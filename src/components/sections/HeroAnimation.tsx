"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
  type?: "tag" | "title" | "buttons" | "image" | "default";
};

export default function HeroAnimation({
  children,
  delay = 0,
  type = "default",
}: Props) {
  // Different styles based on type
  const styles = {
    tag: "text-xs font-medium uppercase tracking-[0.3em] text-zinc-500",
    title:
      "text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50",
    default:
      "max-w-xl text-sm leading-relaxed text-zinc-600 md:text-base dark:text-zinc-400",
    buttons: "",
    image: "relative",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: type === "image" ? 0.97 : 1 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      className={styles[type]}
    >
      {children}
    </motion.div>
  );
}