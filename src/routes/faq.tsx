import { createFileRoute } from "@tanstack/react-router";
import { FAQ as FAQSection } from "@/components/sections/Misc";

export const Route = createFileRoute("/faq")({
  component: FAQPage,
});

function FAQPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <FAQSection />
    </div>
  );
}
