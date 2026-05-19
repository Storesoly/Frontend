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
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute h-px w-full"
                    style={{
                        top: `${15 + i * 14}%`,
                        background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,${0.018 + i * 0.004}) 30%, rgba(255,255,255,${0.025 + i * 0.004}) 50%, rgba(255,255,255,${0.018 + i * 0.004}) 70%, transparent 100%)`,
                    }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 1.4, delay: 0.1 + i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                />
            ))}
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={`v${i}`}
                    className="absolute w-px h-full"
                    style={{
                        left: `${20 + i * 20}%`,
                        background: `linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.022) 30%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0.022) 70%, transparent 100%)`,
                    }}
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    transition={{ duration: 1.4, delay: 0.2 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                />
            ))}
        </div>
    );
}