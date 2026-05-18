"use client";

import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Types                                                               */
/* ------------------------------------------------------------------ */
interface Feature {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    dark: boolean;
    tag: string;
    span?: "tall" | "wide" | "normal";
}

/* ------------------------------------------------------------------ */
/*  Icons                                                               */
/* ------------------------------------------------------------------ */
function QRIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
            <rect x="13" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
            <rect x="2" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
            <rect x="4.5" y="4.5" width="2" height="2" fill="currentColor" />
            <rect x="15.5" y="4.5" width="2" height="2" fill="currentColor" />
            <rect x="4.5" y="15.5" width="2" height="2" fill="currentColor" />
            <path d="M13 13h2v2h-2zM17 13h2v2h-2zM13 17h2v2h-2zM17 17h2v2h-2z" fill="currentColor" />
        </svg>
    );
}

function VerifyIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M11 2L13.5 4.5H17.5V8.5L20 11L17.5 13.5V17.5H13.5L11 20L8.5 17.5H4.5V13.5L2 11L4.5 8.5V4.5H8.5L11 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M7.5 11L9.8 13.3L14.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function SyncIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M4 11C4 7.13 7.13 4 11 4c2.12 0 4.02.92 5.36 2.38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M18 11c0 3.87-3.13 7-7 7-2.12 0-4.02-.92-5.36-2.38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M14.5 2.5L16.5 4.5L14.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.5 15.5L5.5 17.5L7.5 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function MerchantIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M3 9.5L4.5 4h13L19 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="2" y="9.5" width="18" height="2" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <path d="M4 11.5V18h14v-6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <rect x="8.5" y="13.5" width="5" height="4.5" rx="0.75" stroke="currentColor" strokeWidth="1.3" />
        </svg>
    );
}

/* ------------------------------------------------------------------ */
/*  Visual Illustrations                                                */
/* ------------------------------------------------------------------ */

/** Fast checkout — mock browser/POS screen (tall left card) */
function CheckoutIllustration() {
    return (
        <div className="mt-6 flex-1 flex flex-col gap-3">
            {/* Browser chrome mockup */}
            <div
                className="rounded-xl overflow-hidden border"
                style={{ borderColor: "rgba(0,0,0,0.07)", background: "#fff" }}
            >
                {/* title bar */}
                <div className="flex items-center gap-1.5 px-3 py-2 border-b" style={{ borderColor: "rgba(0,0,0,0.06)", background: "#f5f5f4" }}>
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400 opacity-70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-70" />
                    <div className="ml-2 flex-1 h-3.5 rounded bg-zinc-200 opacity-60" style={{ maxWidth: 120 }} />
                </div>
                {/* fake nav */}
                <div className="flex gap-4 px-4 pt-3 pb-1">
                    {["Home", "Features", "Pricing", "Contact"].map((n) => (
                        <span key={n} className="text-[9px] text-zinc-400">{n}</span>
                    ))}
                </div>
                {/* fake content rows */}
                <div className="px-4 pb-4 pt-2 flex flex-col gap-2">
                    <div className="h-2 rounded bg-zinc-200 w-3/4" />
                    <div className="h-2 rounded bg-zinc-100 w-1/2" />
                    <div className="h-2 rounded bg-zinc-200 w-5/6" />
                    <div className="h-2 rounded bg-zinc-100 w-2/3" />
                    <div className="mt-2 h-6 w-20 rounded-lg bg-amber-400 opacity-80 flex items-center justify-center">
                        <span className="text-[8px] font-semibold text-amber-900">View Pricing</span>
                    </div>
                </div>
            </div>

            {/* Floating notification */}
            <div
                className="rounded-xl px-4 py-3 flex items-center gap-3 border"
                style={{ borderColor: "rgba(0,0,0,0.07)", background: "#fafaf9" }}
            >
                <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 1l1.5 2.5H11V6L13 7l-2 2v2.5H8.5L7 14l-1.5-2.5H3V9L1 7l2-2V1.5H5.5L7 1z" stroke="#3b82f6" strokeWidth="1" strokeLinejoin="round" />
                        <path d="M4.5 7L6 8.5 9.5 5" stroke="#3b82f6" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div>
                    <p className="text-[9px] text-zinc-400 mb-0.5">Notification</p>
                    <p className="text-xs font-semibold text-zinc-700">Revision Completed</p>
                </div>
            </div>
        </div>
    );
}

/** Real-time verification — network/node graph */
function NetworkIllustration() {
    const nodes = [
        { x: 52, y: 30 },
        { x: 82, y: 55 },
        { x: 30, y: 60 },
        { x: 62, y: 80 },
        { x: 18, y: 85 },
    ];
    return (
        <div className="mt-6 flex-1 flex items-center justify-center relative min-h-[120px]">
            <svg viewBox="0 0 100 100" className="w-full max-w-[200px] opacity-80">
                {/* dashed connections */}
                {[
                    [0, 1], [0, 2], [1, 3], [2, 3], [2, 4], [3, 4],
                ].map(([a, b], i) => (
                    <line
                        key={i}
                        x1={nodes[a].x} y1={nodes[a].y}
                        x2={nodes[b].x} y2={nodes[b].y}
                        stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" strokeDasharray="2 2"
                    />
                ))}
                {/* nodes */}
                {nodes.map((n, i) => (
                    <g key={i}>
                        <circle cx={n.x} cy={n.y} r="6" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
                        <rect x={n.x - 5} y={n.y - 2.5} width="10" height="5" rx="1.5" fill="rgba(255,255,255,0.55)" />
                    </g>
                ))}
            </svg>
        </div>
    );
}

/** Inventory sync — SEO/search result mockup */
function SearchIllustration() {
    return (
        <div className="mt-6 flex-1 flex flex-col gap-2.5">
            {/* Search bar */}
            <div
                className="flex items-center gap-2 rounded-xl px-3 py-2.5 border"
                style={{ borderColor: "rgba(0,0,0,0.07)", background: "#fff" }}
            >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="6" cy="6" r="4" stroke="#4285F4" strokeWidth="1.5" />
                    <path d="M10 10l2.5 2.5" stroke="#4285F4" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="text-xs text-zinc-500 flex-1">Best GTM tools for business operations</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="5" r="2" stroke="rgba(0,0,0,0.3)" strokeWidth="1.2" />
                    <path d="M4 12c0-2 1.34-3 3-3s3 1 3 3" stroke="rgba(0,0,0,0.3)" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
            </div>

            {/* Result row */}
            <div
                className="rounded-xl px-3 py-3 border flex items-start gap-2.5"
                style={{ borderColor: "rgba(0,0,0,0.07)", background: "#fff" }}
            >
                <div className="w-6 h-6 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <circle cx="6" cy="6" r="5" fill="#7c3aed" />
                        <path d="M3.5 6.5L5 8l3.5-4" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1 mb-0.5">
                        <span className="text-[9px] text-zinc-400">Acme.io</span>
                        <span className="text-[9px] text-zinc-300">›</span>
                        <span className="text-[9px] text-zinc-400">outbound</span>
                        <span className="text-[9px] text-zinc-300">›</span>
                        <span className="text-[9px] text-zinc-400">sales</span>
                    </div>
                    <p className="text-xs font-semibold text-blue-600">Acme.io</p>
                    <p className="text-[10px] text-zinc-400 mt-0.5">All in one outbound platform</p>
                    <div className="h-1.5 rounded bg-zinc-100 mt-1.5 w-4/5" />
                    <div className="h-1.5 rounded bg-zinc-100 mt-1 w-3/5" />
                </div>
            </div>
        </div>
    );
}

/** Merchant-friendly — chip/component grid */
function ComponentIllustration() {
    return (
        <div className="mt-6 flex-1 flex items-end justify-end">
            <div className="relative w-28 h-24 opacity-60">
                {/* chip body */}
                <div
                    className="absolute inset-4 rounded-lg border-2"
                    style={{ borderColor: "rgba(0,0,0,0.12)", background: "rgba(0,0,0,0.04)" }}
                />
                {/* pins top */}
                {[0, 1, 2].map((i) => (
                    <div
                        key={`t${i}`}
                        className="absolute h-3 w-[3px] rounded-sm"
                        style={{ top: 6, left: 36 + i * 10, background: "rgba(0,0,0,0.18)" }}
                    />
                ))}
                {/* pins bottom */}
                {[0, 1, 2].map((i) => (
                    <div
                        key={`b${i}`}
                        className="absolute h-3 w-[3px] rounded-sm"
                        style={{ bottom: 6, left: 36 + i * 10, background: "rgba(0,0,0,0.18)" }}
                    />
                ))}
                {/* pins left */}
                {[0, 1].map((i) => (
                    <div
                        key={`l${i}`}
                        className="absolute w-3 h-[3px] rounded-sm"
                        style={{ left: 6, top: 34 + i * 10, background: "rgba(0,0,0,0.18)" }}
                    />
                ))}
                {/* pins right */}
                {[0, 1].map((i) => (
                    <div
                        key={`r${i}`}
                        className="absolute w-3 h-[3px] rounded-sm"
                        style={{ right: 6, top: 34 + i * 10, background: "rgba(0,0,0,0.18)" }}
                    />
                ))}
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  Section                                                             */
/* ------------------------------------------------------------------ */
export default function FeaturesSection() {
    return (
        <section
            id="features"
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
                    Features
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
                        Everything you need at checkout
                    </h2>
                    <p className="mt-2 text-base text-[rgba(0,0,0,0.45)] tracking-[-0.01em] max-w-md">
                        Storesolly brings on-chain payments to physical retail without the complexity.
                    </p>
                </motion.div>

                {/*
                    Bento layout matching the screenshot:
                    ┌──────────┬──────────┬──────────┐
                    │          │  top-mid │  top-rt  │
                    │  tall    ├──────────┼──────────┤
                    │  left    │  bot-mid │  bot-rt  │
                    └──────────┴──────────┴──────────┘
                */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:grid-rows-2">

                    {/* ── Fast checkout  (tall, spans 2 rows, col 1) ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: 0 }}
                        className="md:row-span-2"
                    >
                        <TallCard
                            icon={<QRIcon />}
                            title="Fast checkout"
                            description="Generate a payment QR in seconds and complete checkout without delays. No waiting, no friction — just scan and pay."
                            dark
                            tag="Instant"
                        >
                            <CheckoutIllustration />
                        </TallCard>
                    </motion.div>

                    {/* ── Real-time verification (dark, top-middle) ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
                    >
                        <BentoCard
                            icon={<VerifyIcon />}
                            title="Real-time verification"
                            description="Confirm Solana payments on-chain before marking an order as paid. Every transaction is trustless and transparent."
                            dark={false}
                            tag="On-chain"
                        >
                            <NetworkIllustration />
                        </BentoCard>
                    </motion.div>

                    {/* ── Inventory sync (dark, top-right) ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
                    >
                        <BentoCard
                            icon={<SyncIcon />}
                            title="Inventory sync"
                            description="Automatically update stock after successful payment. Keep your store accurate without manual intervention."
                            dark
                            tag="Automated"
                        >
                            <NetworkIllustration />
                        </BentoCard>
                    </motion.div>

                    {/* ── Inventory sync 2nd (light, bottom-middle) ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
                    >
                        <BentoCard
                            icon={<SyncIcon />}
                            title="Inventory sync"
                            description="Automatically update stock after successful payment. Keep your store accurate without manual intervention."
                            dark={false}
                            tag="Automated"
                        >
                            <SearchIllustration />
                        </BentoCard>
                    </motion.div>

                    {/* ── Merchant-friendly (light, bottom-right) ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
                    >
                        <BentoCard
                            icon={<MerchantIcon />}
                            title="Merchant-friendly"
                            description="Designed for cashiers and store owners, not just crypto-native users. A familiar POS feel with a decentralized backbone."
                            dark={false}
                            tag="Simple"
                        >
                            <ComponentIllustration />
                        </BentoCard>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/*  Shared card tokens helper                                           */
/* ------------------------------------------------------------------ */
function cardTokens(dark: boolean) {
    return {
        textPrimary: dark ? "#FFFFFF" : "#111111",
        textSecondary: dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.45)",
        borderColor: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)",
        iconBg: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)",
        iconColor: dark ? "rgba(255,255,255,0.75)" : "rgba(0,0,0,0.55)",
    };
}

/* ------------------------------------------------------------------ */
/*  TallCard  (spans 2 rows — left column in bento)                    */
/* ------------------------------------------------------------------ */
interface CardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    dark: boolean;
    tag: string;
    children?: React.ReactNode;
}

function TallCard({ icon, title, description, dark, tag, children }: CardProps) {
    const { textPrimary, textSecondary, borderColor, iconBg, iconColor } = cardTokens(dark);

    return (
        <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`rounded-xl h-full ${dark
                ? "bg-gradient-to-tl from-black via-black to-black/70"
                : "bg-zinc-50"
                }`}
        >
            <div
                className={`rounded-xl p-5 h-full flex flex-col ${dark ? "bg-zinc-600/20" : "bg-zinc-300/20"}`}
            >
                {/* Tag + icon row */}
                <div className="flex items-center justify-between mb-6">
                    <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: iconBg, color: iconColor }}
                    >
                        {icon}
                    </div>
                    <span
                        className="text-[10px] font-medium tracking-[0.06em] uppercase px-2 py-0.5 rounded-full"
                        style={{
                            background: dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.05)",
                            color: dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.35)",
                            border: `1px solid ${borderColor}`,
                        }}
                    >
                        {tag}
                    </span>
                </div>

                {/* Illustration slot — grows to fill extra height */}
                {children}

                {/* Content pinned to bottom */}
                <div className="mt-6">
                    <h3
                        className="text-lg font-semibold tracking-[-0.025em] mb-2 leading-snug"
                        style={{ color: textPrimary }}
                    >
                        {title}
                    </h3>
                    <p
                        className="text-sm leading-[1.65] tracking-[-0.005em]"
                        style={{ color: textSecondary }}
                    >
                        {description}
                    </p>

                    <div className="h-px mt-5 mb-4" style={{ background: borderColor }} />
                    <button
                        className="flex items-center gap-1.5 text-xs tracking-[-0.01em] transition-opacity hover:opacity-70"
                        style={{ color: textSecondary }}
                    >
                        Learn more
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path
                                d="M2.5 6h7M6.5 3.5L9 6l-2.5 2.5"
                                stroke="currentColor"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

/* ------------------------------------------------------------------ */
/*  BentoCard  (standard height — right columns)                       */
/* ------------------------------------------------------------------ */
function BentoCard({ icon, title, description, dark, tag, children }: CardProps) {
    const { textPrimary, textSecondary, borderColor, iconBg, iconColor } = cardTokens(dark);

    return (
        <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`rounded-xl h-full ${dark
                ? "bg-gradient-to-tl from-black via-black to-black/70"
                : "bg-zinc-50"
                }`}
        >
            <div
                className={`rounded-xl p-5 h-full flex flex-col ${dark ? "bg-zinc-600/20" : "bg-zinc-300/20"}`}
            >
                {/* Tag + icon row */}
                <div className="flex items-center justify-between">
                    <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: iconBg, color: iconColor }}
                    >
                        {icon}
                    </div>
                    <span
                        className="text-[10px] font-medium tracking-[0.06em] uppercase px-2 py-0.5 rounded-full"
                        style={{
                            background: dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.05)",
                            color: dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.35)",
                            border: `1px solid ${borderColor}`,
                        }}
                    >
                        {tag}
                    </span>
                </div>

                {/* Illustration slot */}
                <div className="flex-1 min-h-[80px]">{children}</div>

                {/* Content */}
                <div>
                    <h3
                        className="text-lg font-semibold tracking-[-0.025em] mb-2 leading-snug"
                        style={{ color: textPrimary }}
                    >
                        {title}
                    </h3>
                    <p
                        className="text-sm leading-[1.65] tracking-[-0.005em]"
                        style={{ color: textSecondary }}
                    >
                        {description}
                    </p>

                    <div className="h-px mt-5 mb-4" style={{ background: borderColor }} />
                    <button
                        className="flex items-center gap-1.5 text-xs tracking-[-0.01em] transition-opacity hover:opacity-70"
                        style={{ color: textSecondary }}
                    >
                        Learn more
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path
                                d="M2.5 6h7M6.5 3.5L9 6l-2.5 2.5"
                                stroke="currentColor"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </motion.div>
    );
}