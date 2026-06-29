import { createFileRoute } from "@tanstack/react-router";
import { Products as ProductsSection } from "@/components/sections/Products";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <div className="pt-32 pb-20 min-h-screen relative z-10">
        <ProductsSection isWhite />
      </div>
    </>
  );
}
