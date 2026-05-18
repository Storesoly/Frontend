"use client";

import { motion } from "framer-motion";

const logos: string[] = [
    "CURSOR",
    "Moonbeam",
    "thrust",
    "BTRfi",
    "appsecure",
    "manyreach",
    "scale.jobs",
    "webstone",
    "KEARNEY",
    "Content Brew",
    "Metricbooks",
    "Procol",
    "Joyhealth",
    "Loopback",
    "Performance Partners",
    "JKYog",
    "Avant Page",
    "SapientWealth",
    "Helium",
    "Spot",
];

export default function TrustedBy() {
    // Duplicate for seamless marquee
    const doubled = [...logos, ...logos];

    return (
        <section className="bg-[#F0EDE7] py-14 overflow-hidden" id="works">
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center text-[10px] tracking-[0.18em] uppercase text-[rgba(0,0,0,0.38)] mb-10"
            >
                Trusted by Fast-Growing Startups
            </motion.p>

            {/* Scrolling rows */}
            <div className="relative">
                {/* Fade masks on sides */}
                <div
                    className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
                    style={{
                        background:
                            "linear-gradient(to right, #F0EDE7 0%, transparent 100%)",
                    }}
                />
                <div
                    className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
                    style={{
                        background:
                            "linear-gradient(to left, #F0EDE7 0%, transparent 100%)",
                    }}
                />

                {/* Row 1 - marquee left */}
                <LogoRow logos={doubled.slice(0, 14)} direction="left" />
                {/* Row 2 - marquee right */}
                <LogoRow logos={doubled.slice(7, 21)} direction="right" delay={1.5} />
                {/* Row 3 - marquee left slower */}
                <LogoRow logos={doubled.slice(13, 27)} direction="left" delay={0.8} speed={36} />
            </div>
        </section>
    );
}

function LogoRow({
    logos,
    direction,
    delay = 0,
    speed = 28,
}: {
    logos: string[];
    direction: "left" | "right";
    delay?: number;
    speed?: number;
}) {
    return (
        <div className="flex overflow-hidden mb-5 last:mb-0">
            <motion.div
                className="flex gap-10 shrink-0"
                animate={{
                    x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
                }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                    delay,
                }}
                style={{ willChange: "transform" }}
            >
                {/* Double for seamless loop */}
                {[...logos, ...logos].map((logo, i) => (
                    <LogoItem key={i} name={logo} />
                ))}
            </motion.div>
        </div>
    );
}

function LogoItem({ name }: { name: string }) {
    const styleMap: Record<string, string> = {
        CURSOR: "tracking-[-0.03em] text-base",
        Moonbeam: "text-sm tracking-[-0.01em]",
        thrust: "italic text-base tracking-[-0.02em]",
        BTRfi: "text-sm tracking-tight",
        appsecure: "text-sm",
        manyreach: "text-sm",
        "scale.jobs": "text-sm",
        webstone: "text-sm tracking-[-0.02em]",
        KEARNEY: "text-sm tracking-[0.04em]",
        "Content Brew": "text-sm",
        Metricbooks: "text-sm",
        Procol: "text-sm tracking-[-0.01em]",
        Joyhealth: "text-sm",
        Loopback: "text-sm",
        "Performance Partners": "text-xs tracking-[0.02em]",
        JKYog: "italic text-sm",
        "Avant Page": "text-xs tracking-[0.02em]",
        SapientWealth: "text-sm",
        Helium: "text-sm tracking-[-0.02em]",
        Spot: "text-sm",
    };

    return (
        <span
            className={`
        whitespace-nowrap text-[rgba(0,0,0,0.32)] select-none shrink-0
        hover:text-[rgba(0,0,0,0.55)] transition-colors duration-200
        ${styleMap[name] || "text-sm"}
      `}
        >
            {name}
        </span>
    );
}