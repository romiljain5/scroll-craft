import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 shadow-sm bg-white dark:bg-gray-900 sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo-scroll-craft.png"
          alt="ScrollCraft Logo"
          width={40}
          height={40}
          priority
        />
        <span className="text-2xl font-bold">
          <span style={{ color: "#dab3ff" }}>Scroll</span>
          <span style={{ color: "#ff831c" }}> Craft</span>
        </span>
      </Link>

      <nav className="space-x-10 text-md font-medium">
        <Link href="/our-services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
