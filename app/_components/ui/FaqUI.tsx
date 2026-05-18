"use client"
import React, { useState } from 'react';
import { Plus, Minus, MessageSquare } from 'lucide-react';
import ChatButton from '../chat-button';

// --- Types ---
interface Testimonial {
    company: string;
    logo?: string;
    quote: string;
    author: string;
    role: string;
}

interface FAQItem {
    question: string;
    answer: string;
}

// --- Mock Data ---
const testimonials: Testimonial[] = [
    {
        company: "Cal.com",
        quote: "Working with Manu and his team was a masterclass in design engineering. They didn't just create a website; they built a high-performance, thoughtfully engineered product.",
        author: "Jack Hudson",
        role: "VP of Engineering, Cal.com"
    },
    {
        company: "ramp",
        quote: "Working with Manu and his team was a masterclass in design engineering. They didn't just create a website; they built a high-performance, thoughtfully engineered product.",
        author: "Jack Hudson",
        role: "VP of Technology, Cal.com"
    }
];

const faqData: FAQItem[] = [
    {
        question: "What is Storesolly?",
        answer: "Storesolly is a Solana-powered retail checkout platform for physical stores."
    },
    {
        question: "Who is it for?",
        answer: "Supermarkets, mini-marts, pharmacies, restaurants, and other cashier-assisted retail businesses."
    },
    { question: "Why Solana?", answer: "Solana offers fast, low-cost transactions, making it ideal for retail payments." },
    { question: "How do I accept payments?", answer: "Link your Solana wallet to the POS terminal and start accepting payments instantly." },
    { question: "Is it secure?", answer: "Yes, all transactions are processed on the Solana blockchain, ensuring security and transparency." },
    { question: "Do I need technical knowledge?", answer: "No, our POS system is designed to be user-friendly for non-technical store owners." },
    { question: "Can I switch between USD and crypto?", answer: "Yes, the platform supports both USD and crypto payments, with easy conversion." },
    { question: "How does this help my business?", answer: "Reduce transaction fees, attract crypto-savvy customers, and streamline your checkout process." }
];

export default function FaqUI() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="min-h-screen  text-[#1A1A1A] font-sans selection:bg-yellow-200">

            {/* --- Testimonials Section --- */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-4xl font-medium tracking-tight">What people have been saying</h2>
                    <button className="bg-[#FFC700] hover:bg-[#E6B400] transition-colors px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold">
                        <div className="w-2 h-2 bg-black rounded-full" />
                        Chat with us
                    </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-gradient-to-tl from-black via-black to-black/70 text-white p-10 rounded-tl-3xl rounded-br-3xl flex flex-col justify-between min-h-[320px]">
                            <div>
                                <h3 className="text-2xl font-bold mb-8 italic">{t.company}</h3>
                                <p className="text-lg leading-relaxed text-gray-300 font-light">
                                    "{t.quote}"
                                </p>
                            </div>
                            <div className="mt-8">
                                <p className="font-medium">{t.author}</p>
                                <p className="text-sm text-gray-500">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    <div className="w-2 h-2 rounded-full bg-gray-400" />
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                </div>
            </section>

            {/* --- FAQ Section --- */}
            <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-12 gap-12">

                {/* Left Column */}
                <div className="md:col-span-5">
                    <h2 className="text-4xl font-medium mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600 mb-10">
                        Have more doubts? Reach out to us at <a href="mailto:contact@acelera.com" className="underline underline-offset-4 decoration-gray-300 hover:decoration-black transition-all">contact@acelera.com</a>
                    </p>

                    <div className="bg-white p-8 rounded-xl border border-gray-200  inline-block max-w-sm">
                        <h4 className="text-xl font-medium mb-4 leading-snug">
                            Ready to modernize your store checkout?
                        </h4>
                        <p className="text-gray-500 text-sm mb-6">
                            Join the Storesolly pilot and test Solana-powered retail payments in a real store environment.
                        </p>
                        <ChatButton title={"Request Access"} size="md" className="mt-4" />

                    </div>
                </div>

                {/* Right Column (Accordion) */}
                <div className="md:col-span-7">
                    {faqData.map((item, idx) => (
                        <div key={idx} className="border-b border-gray-300">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full py-6 flex justify-between items-center text-left group"
                            >
                                <span className="text-lg font-medium text-gray-800 group-hover:text-black transition-colors">
                                    {item.question}
                                </span>
                                {openIndex === idx ? (
                                    <Minus size={20} className="text-gray-400" />
                                ) : (
                                    <Plus size={20} className="text-gray-400" />
                                )}
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 pb-6' : 'max-h-0'
                                }`}>
                                <p className="text-gray-500 leading-relaxed max-w-xl">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}