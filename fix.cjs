const fs = require("fs");
const lines = fs.readFileSync("src/components/Background.tsx", "utf8").split("\n");
const fixed =
  lines.slice(0, 203).join("\n") +
  `

import { useLocation } from "@tanstack/react-router";

export function VideoBackground() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();
  const isAltVideo = path.includes('/services') || path.includes('/products');

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden z-0"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className={\`absolute inset-0 h-full w-full object-cover z-10 transition-opacity duration-1000 \${isAltVideo ? 'opacity-0' : 'opacity-100'}\`}
      >
        <source src="/background-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
`;
fs.writeFileSync("src/components/Background.tsx", fixed);
