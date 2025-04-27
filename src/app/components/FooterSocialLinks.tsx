import { Facebook, Instagram, Youtube } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link"; // 🛠️ Correct import

interface SocialLinkProps {
  title: string;
  platform: "KIIT" | "KIITX";
}

export const FooterSocialLinks = ({ title, platform }: SocialLinkProps) => {
  const links = platform === "KIIT"
    ? {
        facebook: "https://facebook.com/kiituniversity",
        instagram: "https://instagram.com/kiituniversity",
        x: "https://x.com/kiituniversity",
        youtube: "https://youtube.com/kiituniversity",
      }
    : {
        facebook: "https://facebook.com/kiitx",
        instagram: "https://instagram.com/kiitx",
        x: "https://x.com/kiitx",
        youtube: "https://youtube.com/kiitx",
      };

  return (
    <div className="mb-6">
      <h3 className="text-green-500 font-semibold mb-4">
        Follow {title} on:
      </h3>
      <div className="flex gap-4">
        <Link
          href={links.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition-colors"
        >
          <Facebook size={24} />
        </Link>
        <Link
          href={links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition-colors"
        >
          <Instagram size={24} />
        </Link>
        <Link
          href={links.x}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition-colors"
        >
          <FaXTwitter size={24} />
        </Link>
        <Link
          href={links.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition-colors"
        >
          <Youtube size={24} />
        </Link>
      </div>
    </div>
  );
};
