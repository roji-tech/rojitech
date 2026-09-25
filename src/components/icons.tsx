import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiSend,
  FiMail,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { SocialLink } from "@/lib/types";

const iconMap: Record<SocialLink["icon"], React.ComponentType<{ size?: number }>> = {
  github: FiGithub,
  linkedin: FiLinkedin,
  twitter: FiTwitter,
  telegram: FiSend,
  whatsapp: FaWhatsapp,
  mail: FiMail,
};

export function SocialIcon({
  icon,
  size = 18,
}: {
  icon: SocialLink["icon"];
  size?: number;
}) {
  const Icon = iconMap[icon];
  return <Icon size={size} />;
}
