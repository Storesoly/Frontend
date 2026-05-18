"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import ChatButton from "./chat-button";
import StoresollyLogo from "./store-solly-icon";
import Image from "next/image";
import Link from "next/link";

const navLinks = ["Works", "Products", "Pricing", "Blogs"];

export default function Navbar() {
    const [isFloating, setIsFloating] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.querySelector("section");
            if (heroSection) {
                const heroBottom = heroSection.getBoundingClientRect().bottom + window.scrollY;
                // Transition to floating when the scroll goes past the bottom of the hero section minus the navbar height (approx 80px)
                if (window.scrollY > heroBottom - 80) {
                    setIsFloating(true);
                } else {
                    setIsFloating(false);
                }
            } else {
                // Fallback to static threshold if section is not found
                if (window.scrollY > 580) {
                    setIsFloating(true);
                } else {
                    setIsFloating(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Run initial check
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-500 ease-in-out ${isFloating
                ? "bg-gradient-to-tl from-black via-black to-black/90 m-4 md:m-10 rounded-md px-8 py-2 border border-white/10 shadow backdrop-blur-md"
                : "px-8 py-5 bg-transparent m-0 rounded-none border border-transparent"
                }`}
            style={{ fontFamily: "var(--font-geist)" }}
        >
            {/* Logo */}
            <Link href="/" className="flex items-center" aria-label="Aceternity Home">
                <Image
                    src="/storesolly_transparent.png"
                    alt=""
                    width={50}
                    height={50}
                    className="w-full h-full object-cover grayscale"
                />
            </Link>

            {/* Nav links */}
            <ul className="hidden md:flex items-center gap-7">
                {navLinks.map((link) => (
                    <li key={link}>
                        <a
                            href={`#${link.toLowerCase()}`}
                            className="text-sm text-[rgba(255,255,255,0.62)] hover:text-white transition-colors duration-150 tracking-[-0.01em]"
                        >
                            {link}
                        </a>
                    </li>
                ))}
            </ul>

            {/* CTA */}
            <ChatButton size="sm" title="Get Started" />
        </motion.nav>
    );
}