import React from 'react';
import { ArrowRight, MoveRight } from 'lucide-react';
import Image from 'next/image';

export default function FooterUI() {
    return (
        <div className="min-h-screen bg-gradient-to-tl from-black via-black to-black/90 text-white selection:bg-yellow-500/30">
            <div className="max-w-[1500px] mx-auto px-6 py-20">

                {/* --- HERO / CTA SECTION --- */}
                <div className="relative w-full h-[400px] md:h-[500px] rounded-l-3xl  border border-black/70 bg-gradient-to-tl from-black via-black to-black/70  overflow-hidden flex flex-col justify-center px-8 md:px-16 mb-20">

                    {/* Faded Background Text */}
                    <h2 className="absolute bottom-[-8%] left-4 text-[8rem] md:text-[16rem] font-bold text-white/[0.05] select-none pointer-events-none">
                        Storesolly
                    </h2>

                    {/* Top Right Small Button */}
                    <div className="absolute top-30 right-8">
                        <div className="bg-white text-black rounded-full p-2 px-4 flex items-center gap-2 cursor-pointer hover:bg-neutral-200 transition-colors">
                            <ArrowRight />
                        </div>
                    </div>

                    {/* Main Headline */}
                    <h1 className="relative bottom-30 z-10 text-2xl md:text-4xl font-medium max-w-xl leading-tight">
                        Make your Physical store <br />
                        <span className="text-[#FFC700] hover:text-[#e6b400]  ">Live <span className='text-white/[0.1]'>Today with</span> </span>
                    </h1>
                </div>

                {/* --- FOOTER SECTION --- */}
                <footer className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-10">

                    {/* Logo and Description */}
                    <div className="md:col-span-4 flex flex-col gap-6">
                        <div className="flex items-center gap-2">
                            <div className="grayscale flex items-center justify-center">
                                <Image
                                    src="/storesolly_transparent.png"
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="w-full h-full object-cover grayscale"
                                />
                            </div>
                        </div>
                        <p className="text-neutral-400 text-sm max-w-[240px]">
                            We design and build websites that drive results.
                        </p>
                        <button className="group w-fit flex items-center gap-2 bg-[#FFC700] hover:bg-[#e6b400] text-black px-4 py-2 rounded-lg font-medium transition-all">
                            Get started
                            <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Link Columns */}
                    <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
                        <FooterColumn
                            title="Heading one"
                            links={['Link one', 'Link two', 'Link three', 'Link four', 'Link five']}
                        />
                        <FooterColumn
                            title="Heading two"
                            links={['Link one', 'Link two', 'Link three', 'Link four', 'Link five']}
                        />
                        <FooterColumn
                            title="Heading three"
                            links={['Link one', 'Link two', 'Link three', 'Link four', 'Link five']}
                        />
                        <FooterColumn
                            title="Legal"
                            links={['Privacy Policy', 'Terms of Service', 'Status']}
                        />
                    </div>
                </footer>

                {/* --- BOTTOM BAR --- */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:row flex-row justify-between items-center gap-4 text-xs text-neutral-500">
                    <p>© 2024Storesolly Labs - All Rights Reserved</p>
                    <div className="flex gap-6 items-center">

                    </div>
                </div>

            </div>
        </div>
    );
}

function FooterColumn({ title, links }: { title: string, links: string[] }) {
    return (
        <div className="flex flex-col gap-4">
            <h4 className="text-neutral-500 text-xs font-semibold uppercase tracking-wider">{title}</h4>
            <ul className="flex flex-col gap-3">
                {links.map((link) => (
                    <li key={link}>
                        <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}