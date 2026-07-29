"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { contact } from "@/content/site";

export function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        title={`Mapa: ${contact.address.full}`}
        src={`https://www.google.com/maps?q=${contact.address.mapsEmbedQuery}&output=embed`}
        className="h-full w-full rounded-xl border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className="group flex h-full w-full flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-ink/15 bg-cream-warm text-center transition-colors hover:bg-sage-light/50"
    >
      <span className="flex size-12 items-center justify-center rounded-full bg-white shadow-soft">
        <MapPin className="size-6 text-sage-dark" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <span className="px-6 text-[15px] font-medium text-ink-soft group-hover:text-sage-dark">
        Ver mapa da localização
      </span>
    </button>
  );
}
