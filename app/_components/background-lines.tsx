"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AdvancedBackgroundLines() {
    // The screenshot shows a large diamond/rhombus wireframe.
    // Top vertex:    (720,  -10)  — just above the navbar
    // Left vertex:   (-200, 380)  — off-screen left, vertically centered-ish
    // Right vertex:  (1640, 380)  — off-screen right
    // Bottom vertex: (720,  960)  — off-screen bottom

    const TOP = { x: 720, y: -10 };
    const LEFT = { x: -200, y: 380 };
    const RIGHT = { x: 1640, y: 380 };
    const BOTTOM = { x: 720, y: 960 };

    const lines = [
        { x1: TOP.x, y1: TOP.y, x2: LEFT.x, y2: LEFT.y }, // top → left
        { x1: TOP.x, y1: TOP.y, x2: RIGHT.x, y2: RIGHT.y }, // top → right
        { x1: LEFT.x, y1: LEFT.y, x2: BOTTOM.x, y2: BOTTOM.y }, // left → bottom
        { x1: RIGHT.x, y1: RIGHT.y, x2: BOTTOM.x, y2: BOTTOM.y }, // right → bottom
    ];

    return (
        <div className="absolute inset-0 z-0 h-full w-full pointer-events-none overflow-hidden bg-transparent">
            <svg
                className="h-full w-full"
                viewBox="0 0 1440 900"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <radialGradient id="diamond-mask-grad" cx="50%" cy="28%" r="70%">
                        <stop offset="0%" stopColor="white" stopOpacity="1" />
                        <stop offset="70%" stopColor="white" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                    <mask id="diamond-mask">
                        <rect width="1440" height="900" fill="url(#diamond-mask-grad)" />
                    </mask>
                </defs>

                <g mask="url(#diamond-mask)">
                    {lines.map((line, i) => (
                        <motion.line
                            key={i}
                            x1={line.x1} y1={line.y1}
                            x2={line.x2} y2={line.y2}
                            stroke="white"
                            strokeWidth="0.6"
                            strokeOpacity="0.22"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{
                                pathLength: { duration: 1.8, delay: i * 0.12, ease: "easeInOut" },
                                opacity: { duration: 0.5, delay: i * 0.12 },
                            }}
                        />
                    ))}
                </g>
            </svg>
        </div>
    );
}