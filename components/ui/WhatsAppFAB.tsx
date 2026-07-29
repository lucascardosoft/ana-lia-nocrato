"use client";

import { MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { whatsappLink, whatsappMessages } from "@/content/site";

export function WhatsAppFAB() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.a
      href={whatsappLink(whatsappMessages.fab)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex size-14 items-center justify-center rounded-full bg-sage-dark text-white shadow-soft-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:bottom-8 sm:right-8"
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, delay: 0.6 }}
    >
      <MessageCircle className="size-6" strokeWidth={2} aria-hidden="true" />
    </motion.a>
  );
}
