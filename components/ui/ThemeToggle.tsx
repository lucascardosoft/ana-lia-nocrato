"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Palette } from "lucide-react";

const STORAGE_KEY = "theme-test";
const listeners = new Set<() => void>();

function getSnapshot() {
  return window.localStorage.getItem(STORAGE_KEY) === "rose";
}

function getServerSnapshot() {
  return false;
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function setRoseTheme(next: boolean) {
  if (next) {
    window.localStorage.setItem(STORAGE_KEY, "rose");
  } else {
    window.localStorage.removeItem(STORAGE_KEY);
  }
  listeners.forEach((listener) => listener());
}

export function ThemeToggle() {
  const isRose = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    if (isRose) {
      document.documentElement.setAttribute("data-theme", "rose");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [isRose]);

  return (
    <button
      type="button"
      onClick={() => setRoseTheme(!isRose)}
      aria-pressed={isRose}
      aria-label={isRose ? "Voltar para a paleta padrão" : "Testar paleta rosa"}
      title={isRose ? "Voltar para a paleta padrão" : "Testar paleta rosa"}
      className="fixed bottom-6 left-6 z-40 flex size-12 items-center justify-center rounded-full border border-ink/10 bg-white text-ink shadow-soft transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-dark sm:bottom-8 sm:left-8"
    >
      <Palette className="size-5" strokeWidth={1.75} aria-hidden="true" />
    </button>
  );
}
