"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
    children,
    containerClassName,
    className,
    as: Tag = "button",
    duration = 1,
    clockwise = true,
    ...props
}: React.PropsWithChildren<
    {
        as?: React.ElementType;
        containerClassName?: string;
        className?: string;
        duration?: number;
        clockwise?: boolean;
    } & React.HTMLAttributes<HTMLElement>
>) {
    const [hovered, setHovered] = useState(false);
    const [direction, setDirection] = useState<Direction>("TOP");

    const rotateDirection = (current: Direction): Direction => {
        const dirs: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
        const index = dirs.indexOf(current);
        return clockwise
            ? dirs[(index - 1 + dirs.length) % dirs.length]
            : dirs[(index + 1) % dirs.length];
    };

    // 🔥 Strong neon gradients
    const movingMap: Record<Direction, string> = {
        TOP: "radial-gradient(30% 60% at 50% 0%, rgba(56,189,248,1) 0%, rgba(56,189,248,0.3) 60%, transparent 100%)",
        LEFT: "radial-gradient(30% 60% at 0% 50%, rgba(34,211,238,1) 0%, rgba(34,211,238,0.3) 60%, transparent 100%)",
        BOTTOM: "radial-gradient(30% 60% at 50% 100%, rgba(59,130,246,1) 0%, rgba(59,130,246,0.3) 60%, transparent 100%)",
        RIGHT: "radial-gradient(30% 60% at 100% 50%, rgba(14,165,233,1) 0%, rgba(14,165,233,0.3) 60%, transparent 100%)",
    };

    const highlight =
        "radial-gradient(80% 200% at 50% 50%, rgba(56,189,248,0.9) 0%, rgba(56,189,248,0.4) 40%, transparent 100%)";

    useEffect(() => {
        if (!hovered) {
            const interval = setInterval(() => {
                setDirection((prev) => rotateDirection(prev));
            }, duration * 1000);
            return () => clearInterval(interval);
        }
    }, [hovered, duration]);

    return (
        <Tag
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={cn(
                "relative flex items-center justify-center rounded-full border-[3px] border-transparent p-px overflow-hidden",
                containerClassName
            )}
            {...props}
        >
            {/* Content */}
            <div
                className={cn(
                    "w-40 relative z-10 rounded-full bg-black/90 px-5 py-2 text-white text-xl font-bold flex items-center justify-center",
                    className
                )}
            >
                {children}
            </div>

            {/* Animated gradient border */}
            <motion.div
                className="absolute inset-0 rounded-full z-0"
                style={{ filter: "blur(1px)" }}
                initial={{ background: movingMap[direction] }}
                animate={{
                    background: hovered
                        ? [movingMap[direction], highlight]
                        : movingMap[direction],
                }}
                transition={{ ease: "linear", duration }}
            />

            {/* Inner mask */}
            <div className="absolute inset-.5 rounded-full bg-black/95 z-1" />
        </Tag>
    );
}
