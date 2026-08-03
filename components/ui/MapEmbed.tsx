import { contact } from "@/content/site";

export function MapEmbed() {
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
