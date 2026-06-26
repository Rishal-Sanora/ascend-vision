import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { triggerContactModal } from "../ContactModal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-28 pb-20 overflow-hidden"
    >
      <div className="container-x relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs md:text-sm text-foreground/80 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Trusted by enterprises across Bengaluru & beyond
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 shadow-2xl border border-white/20 max-w-5xl inline-block"
        >
          <h1 className="text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.95] font-bold tracking-tight drop-shadow-xl mb-6">
            <span className="text-gradient drop-shadow-md">Secure. Smart.</span>
            <br />
            <span className="text-gradient-brand drop-shadow-md">Scalable.</span>
          </h1>

          <p className="max-w-3xl text-lg md:text-2xl text-foreground font-medium leading-relaxed drop-shadow-sm">
            Enterprise networking, surveillance, cloud and cybersecurity — delivered end-to-end by
            certified engineers.{" "}
            <span className="font-bold text-brand-red">TERAiT Technologies</span> bridges complex
            infrastructure with seamless business operations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/services"
            className="group relative inline-flex items-center gap-2 rounded-full px-7 py-4 font-semibold text-white overflow-hidden"
            style={{
              background: "linear-gradient(135deg,var(--brand-red),var(--brand-blue))",
              boxShadow: "var(--shadow-glow-red)",
            }}
          >
            <span>Explore Services</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <button
            onClick={triggerContactModal}
            className="group inline-flex items-center gap-2 rounded-full px-7 py-4 font-semibold glass hover:bg-white/10 transition cursor-pointer border-none"
          >
            Request a Quote
          </button>
          <a
            href="tel:+919964546464"
            className="group inline-flex items-center gap-2 text-foreground/80 hover:text-foreground transition"
          >
            <span className="grid place-items-center h-10 w-10 rounded-full glass">📞</span>
            <div className="text-left text-sm">
              <div className="text-foreground/60">Talk to an expert</div>
              <div className="font-semibold">+91 99645 46464</div>
            </div>
          </a>
        </motion.div>

        {/* Stat row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl"
        >
          {[
            ["500+", "Projects delivered"],
            ["150+", "Enterprise clients"],
            ["24/7", "Managed support"],
            ["15+", "Years of expertise"],
          ].map(([n, l]) => (
            <div key={l} className="glass gradient-border-glow p-4 md:p-5 rounded-2xl">
              <div className="text-2xl md:text-3xl font-display font-bold text-gradient">{n}</div>
              <div className="text-xs md:text-sm text-foreground/60 mt-1">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-foreground/50">
        <span>Scroll to explore</span>
        <span className="h-8 w-px bg-gradient-to-b from-foreground/30 to-transparent" />
      </div>
    </section>
  );
}
