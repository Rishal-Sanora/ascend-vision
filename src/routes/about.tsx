import { createFileRoute } from "@tanstack/react-router";
import { About as AboutSection } from "@/components/sections/Misc";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen relative overflow-hidden">
      <div className="relative z-10">
        <AboutSection isStandalone={true} />
      </div>
    </div>
  );
}
