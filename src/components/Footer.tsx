import { ArrowUp } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {new Date().getFullYear()} Aditya.co. All rights reserved.
        </p>

        <Link
          href="#hero"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
