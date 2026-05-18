"use client";

import { motion } from "framer-motion";
import ChatButton from "../chat-button";

/* ------------------------------------------------------------------ */
/*  Types                                                               */
/* ------------------------------------------------------------------ */
interface PricingPlan {
    id: string;
    label: string;
    badge: { text: string; type: "warning" | "success" };
    title: string;
    subtitle: string;
    price: string;
    period: string;
    dark: boolean;
    testimonial: { name: string; role: string; text: string; initials: string };
    features: string[];
}

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */
const plans: PricingPlan[] = [
    {
        id: "components",
        label: "Components",
        badge: { text: "All slots booked for November.", type: "warning" },
        title: "Tailored Website Components",
        subtitle: "for Fast Moving Brands",
        price: "$4,995",
        period: "/mo",
        dark: false,
        testimonial: {
            name: "Jason Ray",
            role: "CEO",
            initials: "JR",
            text: "Aceternity and Manu are Cracked Devs!",
        },
        features: [
            "Custom Strategy & Wireframe",
            "Smooth Animations & Interactions",
            "High-Fidelity Design in Figma",
            "Basic SEO & Performance Optimization",
            "Development in Framer or Webflow",
            "Unlimited Revisions",
            "Conversion-Focused Copywriting",
            "Conversion-Focused Copywriting",
        ],
    },
    {
        id: "website-pages",
        label: "Website Pages",
        badge: { text: "2 Spots Available", type: "success" },
        title: "Tailored Website Components",
        subtitle: "for Fast Moving Brands",
        price: "$6,995",
        period: "/mo",
        dark: true,
        testimonial: {
            name: "Steve Wozniak",
            role: "CTO",
            initials: "SW",
            text: "Aceternity and Manu are Cracked Devs!",
        },
        features: [
            "Custom Strategy & Wireframe",
            "Smooth Animations & Interactions",
            "High-Fidelity Design in Figma",
            "Basic SEO & Performance Optimization",
            "Development in Framer or Webflow",
            "Unlimited Revisions",
            "Conversion-Focused Copywriting",
            "Conversion-Focused Copywriting",
        ],
    },
    {
        id: "multi-pages",
        label: "Multi Pages",
        badge: { text: "All slots booked for November.", type: "warning" },
        title: "Tailored Multi Page Websites",
        subtitle: "for Best Conversion Rates",
        price: "$12,499",
        period: "/mo",
        dark: false,
        testimonial: {
            name: "Alex Turner",
            role: "Founder",
            initials: "AT",
            text: "Absolutely transformed our online presence!",
        },
        features: [
            "Custom Strategy & Wireframe",
            "Smooth Animations & Interactions",
            "High-Fidelity Design in Figma",
            "Basic SEO & Performance Optimization",
            "Conversion-Focused Copywriting",
            "Basic SEO & Performance Optimization",
            "Development in Framer or Webflow",
            "Conversion-Focused Copywriting",
            "High-Fidelity Design in Figma",
            "Unlimited Revisions",
            "Conversion-Focused Copywriting",
            "Development in Framer or Webflow",
        ],
    },
];

/* ------------------------------------------------------------------ */
/*  Section                                                             */
/* ------------------------------------------------------------------ */
export default function PricingSection() {
    const topPlans = plans.slice(0, 2);
    const bottomPlan = plans[2];

    return (
        <section
            id="pricing"
            className="relative bg-[#EDE8DF] py-[200px] px-5 md:px-8 lg:px-12 overflow-hidden"
        >
            {/* Watermark "Pricing" */}
            <div
                className="absolute inset-x-0 top-0 pointer-events-none select-none overflow-hidden"
                style={{
                    maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 50%, transparent 90%)",
                    WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 50%, transparent 90%)",
                }}
            >
                <p
                    className="text-center leading-none tracking-[-0.06em] text-[#c8c0b4]"
                    style={{ fontSize: "clamp(110px, 19vw, 240px)", opacity: 0.45 }}
                >
                    Pricing
                </p>
            </div>

            <div className="relative z-10 max-w-[1040px] mx-auto">
                {/* Top row: two cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {topPlans.map((plan, i) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.1 }}
                        >
                            <PricingCard plan={plan} />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom: wide card */}
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
                >
                    <PricingCard plan={bottomPlan} wide />
                </motion.div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/*  PricingCard                                                         */
/* ------------------------------------------------------------------ */
function PricingCard({ plan, wide = false }: { plan: PricingPlan; wide?: boolean }) {
    const { dark } = plan;

    const textPrimary = dark ? "#FFFFFF" : "#111111";
    const textSecondary = dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.45)";
    const textMuted = dark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.32)";
    const borderColor = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)";
    const featureDotColor = dark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.25)";

    const featureCols = wide
        ? "grid-cols-2 sm:grid-cols-3"
        : "grid-cols-2";

    const contentLayout = wide
        ? "flex flex-col sm:flex-row sm:gap-10"
        : "flex flex-col";

    return (
        <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`rounded-xl p-6 ${dark ? "bg-gradient-to-tl from-black via-black to-black/70" : "bg-zinc-50"}`}

        >

            <div className={`rounded-xl p-4 ${dark ? "bg-zinc-600/20" : "bg-zinc-300/20"}`}>
                {/* Header row */}
                <div className="flex items-center gap-2.5 mb-5 flex-wrap">
                    <span
                        className="font-semibold text-sm tracking-[-0.01em]"
                        style={{ color: textPrimary }}
                    >
                        {plan.label}
                    </span>
                    <StatusBadge type={plan.badge.type} text={plan.badge.text} dark={dark} />
                </div>

                {/* Title */}
                <div className="mb-5 font-semibold">
                    <h2
                        className="text-xl leading-tight tracking-[-0.025em]"
                        style={{ color: textPrimary }}
                    >
                        {plan.title}
                    </h2>
                    <p className="text-base font-normal mt-0.5 tracking-[-0.01em]" style={{ color: textSecondary }}>
                        {plan.subtitle}
                    </p>
                </div>

                {/* Price + Testimonial row */}
                <div className={`flex items-start gap-4 mb-6 ${wide ? "sm:items-center" : ""}`}>
                    {/* Price */}
                    <div className="flex-shrink-0">
                        <div className="flex items-baseline gap-0.5">
                            <span
                                className="text-[2.4rem] leading-none tracking-[-0.04em]"
                                style={{ color: textPrimary }}
                            >
                                {plan.price}
                            </span>
                            <span className="text-sm" style={{ color: textSecondary }}>
                                {plan.period}
                            </span>
                        </div>
                        {/* CTA Button */}
                        <ChatButton title={"Select Plan"} size="md" className="mt-4" />
                    </div>

                    {/* Testimonial */}
                    <div
                        className="flex-1 min-w-0 rounded-xl p-3.5"
                        style={{
                            background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
                            border: `1px solid ${borderColor}`,
                        }}
                    >
                        {/* Avatar + name */}
                        <div className="flex items-center gap-2.5 mb-2">
                            <div
                                className="w-8 h-8 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                                style={{
                                    background: dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)",
                                    color: textPrimary,
                                }}
                            >
                                {plan.testimonial.initials}
                            </div>
                            <div className="flex items-center gap-1.5 min-w-0">
                                <span
                                    className="text-xs truncate tracking-[-0.01em]"
                                    style={{ color: textPrimary }}
                                >
                                    {plan.testimonial.name}
                                </span>
                                <span className="text-xs" style={{ color: textMuted }}>
                                    ,
                                </span>
                                <span className="text-xs" style={{ color: textMuted }}>
                                    {plan.testimonial.role}
                                </span>
                                {/* Blue verified icon */}
                                <VerifiedIcon dark={dark} />
                            </div>
                        </div>
                        <p
                            className="text-xs leading-[1.5] tracking-[-0.005em]"
                            style={{ color: textSecondary }}
                        >
                            {plan.testimonial.text}
                        </p>
                    </div>
                </div>
            </div>
            {/* Divider */}
            <div className="h-px mb-5" style={{ background: borderColor }} />

            {/* Features */}
            <div className={contentLayout}>
                <div className={`grid ${featureCols} gap-x-6 gap-y-2.5 flex-1`}>
                    {plan.features.map((feature, i) => (
                        <FeatureItem key={i} text={feature} dotColor={featureDotColor} textColor={textSecondary} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                      */
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
        <span className="inline-flex items-center gap-1 text-xs" style={{ color: dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.38)" }}>
            <span
                className="px-1.5 py-0.5 rounded text-[10px] tracking-[-0.005em]"
                style={{
                    background: dark ? "rgba(255,165,0,0.12)" : "rgba(255,140,0,0.08)",
                    color: dark ? "rgba(255,200,100,0.8)" : "rgba(180,90,0,0.7)",
                    border: `1px solid ${dark ? "rgba(255,165,0,0.15)" : "rgba(255,140,0,0.12)"}`,
                }}
            >
                {text}
            </span>
            <button className="text-[10px] underline underline-offset-2 hover:opacity-70 transition-opacity" style={{ color: dark ? "rgba(255,200,100,0.7)" : "rgba(180,90,0,0.65)" }}>
                Remind me
            </button>
        </span>
    );
}

function SelectPlanButton({ dark, className = "" }: { dark: boolean; className?: string }) {
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className={`
        inline-flex items-center gap-2 px-4 py-2.5 rounded-full
        text-sm tracking-[-0.01em] cursor-pointer
        bg-[#F5C518] text-[#111111]
        hover:bg-[#f7cc2a] active:bg-[#e8b810]
        transition-all duration-150
        ${className}
      `}
        >
            <SelectPlanIcon />
            Select Plan
        </motion.button>
    );
}

function SelectPlanIcon() {
    const size = 16;
    const cellSize = (size - 3) / 3;
    return (
        <span className="flex items-center justify-center w-5 h-5 rounded-md bg-[#1a1a1a]/10">
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
                {[0, 1, 2].map((row) =>
                    [0, 1, 2].map((col) => (
                        <rect
                            key={`${row}-${col}`}
                            x={col * (cellSize + 1.5)}
                            y={row * (cellSize + 1.5)}
                            width={cellSize}
                            height={cellSize}
                            rx={cellSize * 0.3}
                            fill="#111111"
                            opacity={0.6}
                        />
                    ))
                )}
            </svg>
        </span>
    );
}

function VerifiedIcon({ dark }: { dark: boolean }) {
    return (
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="flex-shrink-0">
            <circle cx="6.5" cy="6.5" r="6.5" fill="#3B82F6" opacity={dark ? 0.9 : 0.85} />
            <path
                d="M4 6.5L5.8 8.3L9 5"
                stroke="white"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function FeatureItem({
    text,
    dotColor,
    textColor,
}: {
    text: string;
    dotColor: string;
    textColor: string;
}) {
    return (
        <div className="flex items-start gap-2">
            <span
                className="w-[5px] h-[5px] rounded-full mt-[6px] flex-shrink-0"
                style={{ background: dotColor }}
            />
            <span
                className="text-[12.5px] leading-[1.55] tracking-[-0.005em]"
                style={{ color: textColor }}
            >
                {text}
            </span>
        </div>
    );
}