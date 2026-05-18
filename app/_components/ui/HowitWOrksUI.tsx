"use client";

import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */
const steps = [
    {
        number: "01",
        title: "Add products to the store dashboard",
        description:
            "Set up your inventory once. Add product names, prices, and stock levels directly from the Storesolly dashboard.",
        dark: false,
    },
    {
        number: "02",
        title: "Start a checkout session",
        description:
            "When a customer is ready to pay, open a new checkout session from any device. No specialist hardware needed.",
        dark: true,
    },
    {
        number: "03",
        title: "Generate a Solana Pay QR code",
        description:
            "Storesolly instantly creates a unique payment QR tied to the exact order total. One tap, one code.",
        dark: false,
    },
    {
        number: "04",
        title: "Customer pays with SOL or USDC",
        description:
            "The customer scans the QR with any Solana-compatible wallet. Payment is sent directly on-chain — no middleman.",
        dark: true,
    },
    {
        number: "05",
        title: "Payment is verified on-chain",
        description:
            "Storesolly listens for the confirmed transaction on the Solana network and validates it in real time.",
        dark: false,
    },
    {
        number: "06",
        title: "Order completes and inventory updates automatically",
        description:
            "Once payment is confirmed, the order is marked as paid and stock levels adjust — zero manual work required.",
        dark: true,
    },
];

/* ------------------------------------------------------------------ */
/*  Section                                                             */
/* ------------------------------------------------------------------ */
export default function HowItWorksSection() {
    return (
        <section
            id="how-it-works"
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
                    Process
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
                        How Storesolly works
                    </h2>
                    <p className="mt-2 text-base text-[rgba(0,0,0,0.45)] tracking-[-0.01em] max-w-md">
                        From product setup to confirmed payment — the full flow in seconds.
                    </p>
                </motion.div>

                {/* Steps grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                duration: 0.55,
                                ease: [0.25, 0.1, 0.25, 1],
                                delay: (i % 2) * 0.1,
                            }}
                        >
                            <StepCard step={step} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/*  StepCard                                                            */
/* ------------------------------------------------------------------ */
function StepCard({
    step,
}: {
    step: { number: string; title: string; description: string; dark: boolean };
}) {
    const { dark } = step;

    const textPrimary = dark ? "#FFFFFF" : "#111111";
    const textSecondary = dark
        ? "rgba(255,255,255,0.5)"
        : "rgba(0,0,0,0.45)";
    const borderColor = dark
        ? "rgba(255,255,255,0.08)"
        : "rgba(0,0,0,0.07)";
    const numberBg = dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)";
    const numberColor = dark
        ? "rgba(255,255,255,0.25)"
        : "rgba(0,0,0,0.18)";

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
                className={`rounded-xl p-5 h-full ${dark ? "bg-zinc-600/20" : "bg-zinc-300/20"
                    }`}
            >
                {/* Step number */}
                <div
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-5 font-semibold text-sm tracking-[-0.02em]"
                    style={{
                        background: numberBg,
                        color: numberColor,
                        border: `1px solid ${borderColor}`,
                    }}
                >
                    {step.number}
                </div>

                {/* Connector line (decorative) */}
                <div className="h-px mb-5" style={{ background: borderColor }} />

                {/* Title & description */}
                <h3
                    className="text-base font-semibold tracking-[-0.02em] mb-2 leading-snug"
                    style={{ color: textPrimary }}
                >
                    {step.title}
                </h3>
                <p
                    className="text-sm leading-[1.65] tracking-[-0.005em]"
                    style={{ color: textSecondary }}
                >
                    {step.description}
                </p>
            </div>
        </motion.div>
    );
}