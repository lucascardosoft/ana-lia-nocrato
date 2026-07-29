"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/cn";

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
}) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = as === "li" ? motion.li : motion.div;

  const variants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{
        duration: prefersReducedMotion ? 0.01 : 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay: prefersReducedMotion ? 0 : delay,
      }}
    >
      {children}
    </MotionTag>
  );
}
