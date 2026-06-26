import { createFileRoute } from "@tanstack/react-router";
import { WhyUs as WhyUsSection } from "@/components/sections/Misc";

export const Route = createFileRoute("/why")({
  component: WhyUsPage,
});

function WhyUsPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <WhyUsSection />
    </div>
  );
}
