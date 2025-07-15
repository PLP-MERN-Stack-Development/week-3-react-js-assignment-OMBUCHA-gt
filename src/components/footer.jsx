import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-8 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Navigation Links */}
        <div className="flex flex-wrap gap-6 text-sm justify-center md:justify-start">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/about" className="hover:text-white transition">About</Link>
          <Link to="/contact" className="hover:text-white transition">Contact</Link>
          <Link to="/terms" className="hover:text-white transition">Terms</Link>
        </div>

        {/* Line Separator from ShadCN */}
        <Separator className="bg-gray-700" />

        {/* Copyright */}
        <div className="text-xs text-gray-400 text-center">
          &copy; {new Date().getFullYear()} MyCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
