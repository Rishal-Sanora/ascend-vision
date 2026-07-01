import { createFileRoute } from "@tanstack/react-router";
import { Contact as ContactSection } from "@/components/sections/Misc";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen relative overflow-hidden">
      <div className="relative z-10">
        <ContactSection isStandalone={true} />
      </div>
    </div>
  );
}
