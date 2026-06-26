const Jimp = require("jimp");

Jimp.read("public/images.jfif")
  .then((image) => {
    // Scan all pixels
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];

      // If the pixel is very close to white, make it transparent
      if (r > 230 && g > 230 && b > 230) {
        this.bitmap.data[idx + 3] = 0; // Set alpha to 0
      }
    });

    // Save as PNG
    return image.writeAsync("public/logo-transparent.png");
  })
  .then(() => {
    console.log("Background removed and saved as logo-transparent.png!");
  })
  .catch((err) => {
    console.error("Error processing image:", err);
  });
