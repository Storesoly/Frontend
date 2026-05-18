"use client";

import { motion, Variants } from "framer-motion";
import ChatButton from "../chat-button";
import AnnouncementBadge from "../chip";
import BackgroundLines from "../background-lines";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: (delay: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1] as const,
            delay,
        },
    }),
};

export default function HeroSection() {
    return (
        <section
            className="relative min-h-[720px] flex flex-col overflow-hidden bg-gradient-to-tl from-black via-black to-black/90 m-2"
            style={{ borderRadius: "15px 15px 15px 15px" }}


        >
            <BackgroundLines />
            {/* Diamond grid overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(255,255,255,0.042) 0px,
              rgba(255,255,255,0.042) 1px,
              transparent 1px,
              transparent 100%
            ),
            repeating-linear-gradient(
              -45deg,
              rgba(255,255,255,0.042) 0px,
              rgba(255,255,255,0.042) 1px,
              transparent 1px,
              transparent 100%
            )
          `,
                    backgroundSize: "56px 56px",
                }}
            />

            {/* Top radial glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 70% 55% at 50% -5%, rgba(255,255,255,0.07) 0%, transparent 70%)",
                }}
            />

            {/* Left-center soft glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 50% 45% at 15% 45%, rgba(255,255,255,0.04) 0%, transparent 65%)",
                }}
            />


            {/* Watermark "Aceternity" text at bottom */}
            <div
                className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden select-none"
                style={{
                    maskImage:
                        "linear-gradient(to top, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.12) 55%, transparent 100%)",
                    WebkitMaskImage:
                        "linear-gradient(to top, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.12) 55%, transparent 100%)",
                }}
            >
                <p
                    className="text-[clamp(100px,18vw,220px)] leading-none tracking-[-0.06em] text-white whitespace-nowrap pl-4"
                    style={{ opacity: 0.2 }}
                >
                    Storesolly
                </p>
            </div>

            {/* Main content */}
            <div className="relative z-10 flex-1 flex flex-col px-8 lg:px-12 pt-28 pb-16">
                <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-0  w-full px-10">
                    {/* Left side */}
                    <div className=" max-w-2xl">
                        {/* Badges row */}
                        <AnnouncementBadge />
                        {/* Headline */}
                        <motion.h1
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0.28}
                            className="text-[clamp(36px,5.5vw,64px)] leading-[1.05] tracking-[-0.035em] text-white"
                        >
                            Solana-powered retail checkout infrastructure platform <br />
                            <span className="text-[#FFC700] hover:text-[#e6b400]  ">for <span className='text-white/[0.1]'>Physical Stores</span> </span>
                        </motion.h1>
                    </div>

                    {/* Right side */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={0.42}
                        className="flex flex-col gap-6 lg:pt-[150px] lg:ml-auto max-w-[600px]"
                    >
                        <p className="text-[rgba(255,255,255,0.58)] text-sm leading-[1.7] tracking-[-0.01em]">
                            Accept SOL and USDC in-store with fast QR payments, real-time order verification, and inventory sync.
                            <br />
                            <span className='text-white'></span>
                        </p>
                        <div>
                            <ChatButton size="md" title="Get Started" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function Badge({
    children,
    accent = false,
}: {
    children: React.ReactNode;
    accent?: boolean;
}) {
    return (
        <span
            className={`
        inline-flex items-center px-3 py-1 rounded-full text-xs
        border transition-all duration-200
        ${accent
                    ? "border-[rgba(255,255,255,0.13)] bg-[rgba(255,255,255,0.06)] text-[rgba(255,255,255,0.72)]"
                    : "border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.07)] text-[rgba(255,255,255,0.82)]"
                }
        tracking-[-0.005em]
      `}
        >
            {children}
        </span>
    );
}