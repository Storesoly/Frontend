"use client";

import ChatButton from "@/app/_components/chat-button";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Animation Variants (matches HeroSection fadeUp)                    */
/* ------------------------------------------------------------------ */
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

/* ------------------------------------------------------------------ */
/*  Reusable Input                                                      */
/* ------------------------------------------------------------------ */
function AuthInput({
    label,
    type,
    placeholder,
    value,
    onChange,
}: {
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (v: string) => void;
}) {
    return (
        <div className="flex flex-col gap-1.5">
            <label
                className="text-[11px] uppercase tracking-[0.08em] font-medium"
                style={{ color: "rgba(255,255,255,0.38)" }}
            >
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full bg-transparent outline-none text-sm tracking-[-0.01em] placeholder:text-[rgba(255,255,255,0.2)] text-white pb-2.5"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}
                onFocus={(e) =>
                ((e.target as HTMLInputElement).style.borderBottomColor =
                    "rgba(255,199,0,0.6)")
                }
                onBlur={(e) =>
                ((e.target as HTMLInputElement).style.borderBottomColor =
                    "rgba(255,255,255,0.12)")
                }
            />
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  Sign In Submit Button (matches ChatButton golden style)            */
/* ------------------------------------------------------------------ */
function SignInButton({ loading }: { loading: boolean }) {
    return (
        <motion.button
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.975 }}
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm tracking-[-0.01em] font-medium cursor-pointer transition-all duration-150 disabled:opacity-60"
            style={{
                background: "linear-gradient(135deg, #FFC700 0%, #e6a800 100%)",
                color: "#111111",
                boxShadow: "0 4px 24px rgba(255,199,0,0.22)",
            }}
        >
            {loading ? (
                <span className="w-4 h-4 border-2 border-[#111]/30 border-t-[#111] rounded-full animate-spin" />
            ) : (
                <GridIcon />
            )}
            {loading ? "Signing in…" : "Sign In"}
        </motion.button>
    );
}

function GridIcon() {
    const cellSize = (14 - 3) / 3;
    return (
        <span className="flex items-center justify-center w-5 h-5 rounded-md bg-[#1a1a1a]/10">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
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
                            opacity={0.65}
                        />
                    ))
                )}
            </svg>
        </span>
    );
}

/* ------------------------------------------------------------------ */
/*  Divider                                                             */
/* ------------------------------------------------------------------ */
function Divider() {
    return (
        <div className="flex items-center gap-3">
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
            <span className="text-[11px] tracking-[0.06em] uppercase" style={{ color: "rgba(255,255,255,0.25)" }}>
                or continue with
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  OAuth Button                                                        */
/* ------------------------------------------------------------------ */
function OAuthButton({ icon, label }: { icon: React.ReactNode; label: string }) {
    return (
        <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            type="button"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs tracking-[-0.005em] transition-all duration-150 cursor-pointer"
            style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.09)",
                color: "rgba(255,255,255,0.65)",
            }}
        >
            {icon}
            {label}
        </motion.button>
    );
}

/* ------------------------------------------------------------------ */
/*  Background Lines (matches BackgroundLines component pattern)       */
/* ------------------------------------------------------------------ */
function BackgroundLines() {
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

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */
export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await new Promise((r) => setTimeout(r, 1800));
        setLoading(false);
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-tl from-black via-black to-black/90 ">
            <section
                className="relative w-full  min-h-[600px] flex flex-col  overflow-hidden  m-2"
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

                {/* Golden accent glow (unique to auth) */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse 60% 40% at 85% 80%, rgba(255,199,0,0.04) 0%, transparent 70%)",
                    }}
                />

                {/* Watermark */}
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
                        className="text-[clamp(60px,12vw,140px)] leading-none tracking-[-0.06em] text-white whitespace-nowrap pl-4"
                        style={{ opacity: 0.2 }}
                    >
                        Storesolly
                    </p>
                </div>

                {/* Main content */}
                <div className="relative z-10  flex flex-col  px-8  pb-10 max-w-[480px]">
                    {/* Logo / Brand */}

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={0}
                        className="mb-8"
                    >
                        <div className="flex items-center gap-2">
                            <Image src={'/storesolly_transparent.png'} alt='logo' width={100} height={100} />
                            <span className="hidden text-white text-sm font-semibold tracking-[-0.02em]">
                                Storesolly
                            </span>
                        </div>
                    </motion.div>
                    {/* Heading */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={0.1}
                        className="mb-8"
                    >
                        <h1
                            className="text-[clamp(28px,5.5vw,38px)] leading-[1.05] tracking-[-0.035em] text-white"
                        >
                            Welcome back<br />
                            <span className="text-[#FFC700]">to your store.</span>
                        </h1>
                        <p
                            className="mt-2.5 text-sm leading-[1.7] tracking-[-0.01em]"
                            style={{ color: "rgba(255,255,255,0.45)" }}
                        >
                            Sign in to manage SOL & USDC payments, inventory, and orders.
                        </p>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={0.22}
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-5"
                    >
                        <AuthInput
                            label="Email address"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={setEmail}
                        />
                        <div className="flex flex-col gap-1.5">
                            <div className="flex items-center justify-between">
                                <label
                                    className="text-[11px] uppercase tracking-[0.08em] font-medium"
                                    style={{ color: "rgba(255,255,255,0.38)" }}
                                >
                                    Password
                                </label>
                                <Link
                                    href="/forgot-password"
                                    className="text-[11px] tracking-[-0.005em] transition-opacity hover:opacity-100"
                                    style={{ color: "rgba(255,199,0,0.65)" }}
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <input
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-transparent outline-none text-sm tracking-[-0.01em] placeholder:text-[rgba(255,255,255,0.2)] text-white pb-2.5"
                                style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}
                                onFocus={(e) =>
                                ((e.target as HTMLInputElement).style.borderBottomColor =
                                    "rgba(255,199,0,0.6)")
                                }
                                onBlur={(e) =>
                                ((e.target as HTMLInputElement).style.borderBottomColor =
                                    "rgba(255,255,255,0.12)")
                                }
                            />
                        </div>

                        {/* Remember me */}
                        <div className="flex items-center gap-2.5">
                            <div
                                className="w-4 h-4 rounded-[4px] flex items-center justify-center cursor-pointer"
                                style={{ border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.04)" }}
                            />
                            <span className="text-xs tracking-[-0.005em]" style={{ color: "rgba(255,255,255,0.38)" }}>
                                Remember me for 30 days
                            </span>
                        </div>

                        <ChatButton size="md" title="Sign in to your Account" className="w-fit" />

                        <Divider />

                        {/* OAuth */}
                        <div className="flex gap-3 hidden">
                            <OAuthButton
                                label="Google"
                                icon={
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" opacity="0.8" />
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" opacity="0.8" />
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" opacity="0.8" />
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" opacity="0.8" />
                                    </svg>
                                }
                            />
                            <OAuthButton
                                label="GitHub"
                                icon={
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.65)">
                                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                    </svg>
                                }
                            />
                        </div>
                    </motion.form>

                    {/* Footer */}
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={0.38}
                        className="mt-auto pt-8 text-[11px] tracking-[-0.005em]"
                        style={{ color: "rgba(255,255,255,0.28)" }}
                    >
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/signup"
                            className="transition-colors hover:text-[#FFC700]"
                            style={{ color: "rgba(255,199,0,0.7)" }}
                        >
                            Create one →
                        </Link>
                    </motion.p>
                </div>
            </section>
        </main>
    );
}