"use client";

interface LogoProps {
    size?: number;
    className?: string;
}

export default function StoresollyLogo({ size = 32, className = "" }: LogoProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Geometric "A" mark - two diagonal bars forming a chevron/arrow */}
            <path
                d="M4 24 L16 6 L28 24"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            <path
                d="M8.5 18 L23.5 18"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
            />
        </svg>
    );
}