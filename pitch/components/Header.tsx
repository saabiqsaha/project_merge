import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-blue-800 dark:bg-black/90">
      <div className="container flex h-16 items-center">
        <nav className="flex flex-1 items-center justify-between">
          <div className="flex items-center">
            {/* The Link component formerly here has been removed */}
          </div>
          <div className="flex items-center space-x-3">
            <Link
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center rounded-md border border-blue-300 bg-white px-4 py-2 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-50 dark:border-blue-700 dark:bg-black dark:text-blue-300 dark:hover:bg-blue-950"
            >
              Contact Us
            </Link>
            <button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
              Investor Login
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 