"use client";
import { useState } from "react";
import AuthButtons from "./AuthButtons";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-white md:text-4xl">
          LeetCode 150 Solutions
        </h1>
        <p className="ml-4 hidden text-lg text-gray-400 md:block">
          by parthib007
        </p>
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <nav className={`md:flex ${isMenuOpen ? "block" : "hidden"}`}>
        <AuthButtons />
      </nav>
    </header>
  );
}
