import { createFileRoute } from "@tanstack/react-router";
import { WhyUs as WhyUsSection } from "@/components/sections/Misc";

export const Route = createFileRoute("/why")({
  component: WhyUsPage,
});

function WhyUsPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen relative overflow-hidden">
      <div className="relative z-10">
        <WhyUsSection isStandalone={true} />
      </div>
    </div>
  );
}
