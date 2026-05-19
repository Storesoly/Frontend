"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AnnouncementBadge() {
    return (
        <div className="flex items-center justify-center p-4">
            <motion.div
                whileHover={{ scale: 1.02 }}
                className="
          group cursor-pointer
          inline-flex items-center gap-3 
          p-1 pr-4 
          rounded-full 
          bg-white/10 backdrop-blur-md 
          border border-white/10 
          transition-colors hover:bg-white/15
        "
            >
                {/* Inner Solid Badge */}
                <span className="
          px-3 py-1 
          rounded-full 
          bg-black 
          text-white 
          text-xs font-semibold
          border border-white/20
        ">
                    Storesolly
                </span>

                {/* Supporting Text */}
                <span className="text-sm text-zinc-300 font-medium truncate max-w-[150px] sm:max-w-2xl">
                    Solana-powered retail checkout infrastructure platform for Physical Stores
                </span>

                {/* Optional: Subtle Arrow (often found in this design) */}
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3 h-3 text-zinc-500 group-hover:translate-x-0.5 transition-transform"
                >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </motion.div>
        </div>
    );
}