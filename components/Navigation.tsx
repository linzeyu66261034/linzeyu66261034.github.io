"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { path: "/", label: "首页" },
  { path: "/about", label: "关于" },
  { path: "/life", label: "生活" },
  { path: "/hobbies", label: "爱好" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Logo / Name */}
        <Link href="/" className="group">
          <motion.span
            className="text-sm tracking-[0.3em] text-stone-200 font-light"
            whileHover={{ letterSpacing: "0.5em" }}
            transition={{ duration: 0.3 }}
          >
            LIN ZEYU
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className="relative"
              >
                <span
                  className={`text-sm tracking-wider transition-colors duration-300 ${
                    isActive
                      ? "text-stone-100"
                      : "text-stone-400 hover:text-stone-200"
                  }`}
                >
                  {item.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-stone-100"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[1px] bg-stone-300"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-[1px] bg-stone-300"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[1px] bg-stone-300"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={
          isOpen
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="flex flex-col items-center gap-6 py-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
              >
                <span
                  className={`text-lg tracking-wider transition-colors duration-300 ${
                    isActive
                      ? "text-stone-100"
                      : "text-stone-400 hover:text-stone-200"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </nav>
  );
}
