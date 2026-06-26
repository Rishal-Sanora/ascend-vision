import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Products } from "@/components/sections/Products";
import {
  About,
  WhyUs,
  Process,
  Brands,
  Testimonials,
  FAQ,
  Contact,
} from "@/components/sections/Misc";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TERAiT Technologies — Secure. Smart. Scalable. Enterprise IT in Bengaluru" },
      {
        name: "description",
        content:
          "Enterprise networking, surveillance, cloud, cybersecurity and managed IT services. Certified engineers delivering end-to-end infrastructure across India.",
      },
      { property: "og:title", content: "TERAiT Technologies — Enterprise IT, Cloud & Security" },
      {
        property: "og:description",
        content:
          "Secure. Smart. Scalable. Enterprise IT infrastructure delivered by industry veterans.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Brands />
      <Services />
      <About />
      <Products />
      <WhyUs />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
