import {
  Wind,
  HeartHandshake,
  Sparkles,
  Flower2,
  Target,
  Baby,
  Puzzle,
  MapPin,
  Video,
  type LucideIcon,
} from "lucide-react";

export const iconMap = {
  Wind,
  HeartHandshake,
  Sparkles,
  Flower2,
  Target,
  Baby,
  Puzzle,
  MapPin,
  Video,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;
