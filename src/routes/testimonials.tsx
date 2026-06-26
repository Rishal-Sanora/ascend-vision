import { createFileRoute } from "@tanstack/react-router";
import { Testimonials as TestimonialsSection } from "@/components/sections/Misc";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <TestimonialsSection />
    </div>
  );
}
