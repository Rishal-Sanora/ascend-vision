import { createFileRoute } from "@tanstack/react-router";
import { Process as ProcessSection } from "@/components/sections/Misc";

export const Route = createFileRoute("/process")({
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <ProcessSection />
    </div>
  );
}
