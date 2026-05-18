"use client";

interface GridIconProps {
    size?: number;
    color?: string;
    className?: string;
}

export default function GridIcon({
    size = 18,
    color = "#1a1a1a",
    className = "",
}: GridIconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* 3x3 grid of rounded squares */}
            {[0, 1, 2].map((row) =>
                [0, 1, 2].map((col) => (
                    <rect
                        key={`${row}-${col}`}
                        x={col * 6 + 0.5}
                        y={row * 6 + 0.5}
                        width="4.5"
                        height="4.5"
                        rx="1.2"
                        fill={color}
                        opacity={row === 0 && col === 0 ? "1" : row === 0 && col === 1 ? "0.75" : "0.55"}
                    />
                ))
            )}
        </svg>
    );
}