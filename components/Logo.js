import { Icons } from "@/components/ui/icons";
import { DM_Sans } from "next/font/google";
import Link from "next/link";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function Logo({ isWhite = false }) {
  return (
    <Link
      href="/"
      className={`flex flex-row gap-1 ${
        isWhite ? "text-white" : "text-tcotta-900"
      }`}
    >
      {isWhite ? (
        <Icons.logoWhite className="mt-0.5 h-6 w-6" />
      ) : (
        <Icons.logo className="mt-0.5 h-6 w-6" />
      )}
      <p className={`text-lg font-medium ${dmSans.className}`}>ScammerBlock</p>
    </Link>
  );
}
