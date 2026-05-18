"use client";

import { motion } from "framer-motion";


interface ChatButtonProps {
    size?: "sm" | "md";
    className?: string;
    title?: string;
}

export default function ChatButton({ size = "md", className = "", title = "" }: ChatButtonProps) {
    const isSmall = size === "sm";

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
        inline-flex items-center gap-3 rounded-[14px] cursor-pointer
        bg-[#1a1a1a] text-white select-none border border-white/5
        p-1 pr-5 transition-colors duration-200
        ${className}
      `}
        >
            {/* Yellow Icon Box */}
            <div
                className={`
          flex items-center justify-center rounded-[10px] bg-[#FFD300]
          ${isSmall ? "w-8 h-8" : "w-10 h-10"}
        `}
            >
                <DotArrowIcon size={isSmall ? 18 : 22} />
            </div>

            <span className={`font-medium tracking-tight ${isSmall ? "text-sm" : "text-[15px]"}`}>
                {title}
            </span>
        </motion.button>
    );
}

/**
 * Custom SVG to replicate the specific dot-grid arrow in your image
 */
function DotArrowIcon({ size }: { size: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* 5x5 Grid representation of the arrow */}
            <circle cx="4" cy="12" r="1.5" fill="white" />
            <circle cx="8" cy="12" r="1.5" fill="white" />
            <circle cx="12" cy="12" r="1.5" fill="white" />
            <circle cx="16" cy="12" r="1.5" fill="white" />
            <circle cx="20" cy="12" r="1.5" fill="white" />

            <circle cx="16" cy="8" r="1.5" fill="white" />
            <circle cx="12" cy="4" r="1.5" fill="white" />

            <circle cx="16" cy="16" r="1.5" fill="white" />
            <circle cx="12" cy="20" r="1.5" fill="white" />
        </svg>
    );
}