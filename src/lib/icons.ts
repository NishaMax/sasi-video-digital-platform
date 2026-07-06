import { 
  Tv, Speaker, Smartphone, Shield, Wifi, Headphones, Monitor, Box
} from "lucide-react";

export const IconMap: Record<string, any> = {
  Tv,
  Speaker,
  Smartphone,
  Shield,
  Wifi,
  Headphones,
  Monitor
};

export function getIcon(iconName: string) {
  return IconMap[iconName] || Box;
}
