"use client";

import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */
const comparisons = [
    {
        id: "traditional",
        label: "Traditional POS",
        badge: { text: "Legacy system", type: "warning" as const },
        dark: false,
        points: [
            "High hardware and setup costs",
            "Bank settlement delays of 1–3 days",
            "Requires merchant accounts and intermediaries",
            "Limited to fiat currencies only",
            "Monthly fees and per-transaction charges",
            "Slow reconciliation and manual reporting",
        ],
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="5" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
                <path d="M6 5V4a2 2 0 0 1 4 0v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M5 10h10M5 13h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: "storesolly",
        label: "Storesolly",
        badge: { text: "Live on Solana", type: "success" as const },
        dark: true,
        points: [
            "Zero hardware required — works on any device",
            "Payments confirmed on-chain in under 2 seconds",
            "No banks, no merchant accounts, no gatekeepers",
            "Accept SOL and USDC natively",
            "Flat, transparent pricing — no hidden fees",
            "Automated inventory and order reconciliation",
        ],
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.4" />
                <path d="M7 10.5L9 12.5L13 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

const pillars = [
    {
        title: "Decentralized",
        description: "Payments settle directly on Solana — no bank, no delay.",
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="3" r="2" stroke="currentColor" strokeWidth="1.3" />
                <circle cx="3" cy="14" r="2" stroke="currentColor" strokeWidth="1.3" />
                <circle cx="15" cy="14" r="2" stroke="currentColor" strokeWidth="1.3" />
                <path d="M9 5v3M5 13L9 8M13 13L9 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: "Transparent",
        description: "Every transaction is publicly verifiable on-chain.",
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 3C5.5 3 2.5 6 2.5 9s3 6 6.5 6 6.5-3 6.5-6S12.5 3 9 3Z" stroke="currentColor" strokeWidth="1.3" />
                <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.3" />
            </svg>
        ),
    },
    {
        title: "Accessible",
        description: "No crypto knowledge needed. As easy as scanning a QR.",
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2a7 7 0 1 0 0 14A7 7 0 0 0 9 2Z" stroke="currentColor" strokeWidth="1.3" />
                <path d="M9 7v4M9 13v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
];

/* ------------------------------------------------------------------ */
/*  Section                                                             */
/* ------------------------------------------------------------------ */
export default function WhyStoreSollySection() {
    return (
        <section
            id="why-storesolly"
            className="relative bg-[#EDE8DF] py-[200px] px-5 md:px-8 lg:px-12 overflow-hidden"
        >
            {/* Watermark */}
            <div
                className="absolute inset-x-0 top-0 pointer-events-none select-none overflow-hidden"
                style={{
                    maskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 50%, transparent 90%)",
                    WebkitMaskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 50%, transparent 90%)",
                }}
            >
                <p
                    className="text-center leading-none tracking-[-0.06em] text-[#c8c0b4]"
                    style={{ fontSize: "clamp(110px, 19vw, 240px)", opacity: 0.45 }}
                >
                    Why
                </p>
            </div>

            <div className="relative z-10 max-w-[1040px] mx-auto">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
                    className="mb-12"
                >

                    <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.035em] text-[#111111] leading-tight">
                        Why stores choose Storesolly
                    </h2>
                    <p className="mt-3 text-base text-[rgba(0,0,0,0.45)] tracking-[-0.01em] max-w-lg leading-relaxed">
                        Traditional POS systems are expensive, slow, and limited by bank settlement delays.
                        Storesolly adds a decentralized payment layer to physical retail so merchants can accept
                        crypto with a smoother checkout experience.
                    </p>
                </motion.div>

                {/* Comparison cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {comparisons.map((card, i) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                duration: 0.55,
                                ease: [0.25, 0.1, 0.25, 1],
                                delay: i * 0.1,
                            }}
                        >
                            <ComparisonCard card={card} />
                        </motion.div>
                    ))}
                </div>

                {/* Pillars — wide card */}
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
                >
                    <PillarsCard />
                </motion.div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/*  ComparisonCard                                                      */
/* ------------------------------------------------------------------ */
function ComparisonCard({
    card,
}: {
    card: (typeof comparisons)[number];
}) {
    const { dark } = card;
    const textPrimary = dark ? "#FFFFFF" : "#111111";
    const textSecondary = dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.45)";
    const borderColor = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)";
    const dotColor = dark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.22)";
    const iconBg = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)";
    const iconColor = dark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.45)";

    return (
        <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`rounded-xl p-6 h-full ${dark
                ? "bg-gradient-to-tl from-black via-black to-black/70"
                : "bg-zinc-50"
                }`}
        >
            <div
                className={`rounded-xl p-5 h-full flex flex-col ${dark ? "bg-zinc-600/20" : "bg-zinc-300/20"
                    }`}
            >
                {/* Header */}
                <div className="flex items-center gap-2.5 mb-5 flex-wrap">
                    <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: iconBg, color: iconColor }}
                    >
                        {card.icon}
                    </div>
                    <span
                        className="font-semibold text-sm tracking-[-0.01em]"
                        style={{ color: textPrimary }}
                    >
                        {card.label}
                    </span>
                    <StatusBadge type={card.badge.type} text={card.badge.text} dark={dark} />
                </div>

                {/* Divider */}
                <div className="h-px mb-5" style={{ background: borderColor }} />

                {/* Points */}
                <div className="grid grid-cols-1 gap-2.5 flex-1">
                    {card.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                            {dark ? (
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    className="flex-shrink-0 mt-[3px]"
                                >
                                    <circle cx="7" cy="7" r="6" fill="#22c55e" opacity={0.2} />
                                    <path
                                        d="M4.5 7L6.2 8.8L9.5 5.5"
                                        stroke="#22c55e"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    className="flex-shrink-0 mt-[3px]"
                                >
                                    <circle cx="7" cy="7" r="6" fill="rgba(0,0,0,0.06)" />
                                    <path
                                        d="M4.5 7h5"
                                        stroke={dotColor}
                                        strokeWidth="1.3"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            )}
                            <span
                                className="text-[12.5px] leading-[1.55] tracking-[-0.005em]"
                                style={{ color: textSecondary }}
                            >
                                {point}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

/* ------------------------------------------------------------------ */
/*  PillarsCard (wide)                                                  */
/* ------------------------------------------------------------------ */
function PillarsCard() {
    return (
        <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="rounded-xl p-6 bg-zinc-50"
        >
            <div className="rounded-xl p-5 bg-zinc-300/20">
                <p className="text-xs font-medium tracking-[0.05em] uppercase text-[rgba(0,0,0,0.32)] mb-5">
                    Our principles
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {pillars.map((pillar) => (
                        <div key={pillar.title} className="flex flex-col gap-2">
                            <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center"
                                style={{
                                    background: "rgba(0,0,0,0.05)",
                                    color: "rgba(0,0,0,0.45)",
                                }}
                            >
                                {pillar.icon}
                            </div>
                            <h4 className="text-sm font-semibold tracking-[-0.015em] text-[#111111]">
                                {pillar.title}
                            </h4>
                            <p className="text-xs leading-[1.6] text-[rgba(0,0,0,0.45)] tracking-[-0.005em]">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

/* ------------------------------------------------------------------ */
/*  StatusBadge (shared)                                                */
/* ------------------------------------------------------------------ */
function StatusBadge({
    type,
    text,
    dark,
}: {
    type: "warning" | "success";
    text: string;
    dark: boolean;
}) {
    if (type === "success") {
        return (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs bg-[#4ade80]/15 text-[#16a34a] border border-[#4ade80]/30 tracking-[-0.005em]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] inline-block" />
                {text}
            </span>
        );
    }
    return (
        <span
            className="inline-flex items-center gap-1 text-xs"
            style={{
                color: dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.38)",
            }}
        >
            <span
                className="px-1.5 py-0.5 rounded text-[10px] tracking-[-0.005em]"
                style={{
                    background: dark
                        ? "rgba(255,165,0,0.12)"
                        : "rgba(255,140,0,0.08)",
                    color: dark
                        ? "rgba(255,200,100,0.8)"
                        : "rgba(180,90,0,0.7)",
                    border: `1px solid ${dark ? "rgba(255,165,0,0.15)" : "rgba(255,140,0,0.12)"
                        }`,
                }}
            >
                {text}
            </span>
        </span>
    );
}