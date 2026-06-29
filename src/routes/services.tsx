import { createFileRoute } from "@tanstack/react-router";
import { Services as ServicesSection } from "@/components/sections/Services";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <div className="pt-32 pb-20 min-h-screen relative z-10">
        <ServicesSection isWhite />
      </div>
    </>
  );
}
