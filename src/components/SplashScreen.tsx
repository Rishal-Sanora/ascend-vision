import { motion } from "framer-motion";
import { useEffect } from "react";
import { Wordmark } from "./Logo";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2800); // the total duration before fading out the splash
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-slate-950 overflow-hidden"
    >
      {/* Background ambient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, var(--brand-blue) 0%, transparent 60%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[800px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, var(--brand-red) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="scale-125 md:scale-150 mb-8"
        >
          <Wordmark size="text-3xl" />
        </motion.div>

        {/* Animated Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-foreground/70 tracking-widest uppercase text-sm md:text-base font-medium"
        >
          Elevating Your Infrastructure
        </motion.div>

        {/* Loading line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 120, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
          className="h-[2px] mt-8 rounded-full"
          style={{
            background: "linear-gradient(90deg, var(--brand-red), var(--brand-blue))",
          }}
        />
      </div>
    </motion.div>
  );
}
