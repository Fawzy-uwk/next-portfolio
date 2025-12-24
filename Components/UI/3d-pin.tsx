"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type PinContainerProps = {
    children: React.ReactNode;
    title?: string;
    href?: string;
    className?: string;
    containerClassName?: string;
};

export const PinContainer = ({
    children,
    title,
    href,
    className,
    containerClassName,
}: PinContainerProps) => {
    const [transform, setTransform] = useState(
        "translate(-50%,-50%) rotateX(0deg)"
    );

    const openLink = (
        e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>
    ) => {
        // ⛔ لو الكليك على لينك أو زرار جوه الكارد، متفتحش href
        const target = e.target as HTMLElement;
        if (target.closest("a, button")) return;

        if (!href) return;
        window.open(href, "_blank", "noopener,noreferrer");
    };

    return (
        <div
            role="link"
            tabIndex={0}
            onClick={openLink}
            onKeyDown={(e) => e.key === "Enter" && openLink(e)}
            onMouseEnter={() =>
                setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)")
            }
            onMouseLeave={() =>
                setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)")
            }
            className={cn(
                "relative group/pin z-50 cursor-pointer",
                containerClassName
            )}
        >
            {/* Card */}
            <div
                style={{
                    perspective: "1000px",
                    transform: "rotateX(70deg) translateZ(0deg)",
                }}
                className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 
        -translate-x-1/2 -translate-y-1/2"
            >
                <div
                    style={{ transform }}
                    className="absolute left-1/2 top-1/2 p-4 
          flex justify-start items-start rounded-2xl 
          shadow-[0_8px_16px_rgb(0_0_0/0.4)] 
          bg-black border border-white/10 
          group-hover/pin:border-white/20 
          transition duration-700 overflow-hidden"
                >
                    <div className={cn("relative z-50", className)}>
                        {children}
                    </div>
                </div>
            </div>

            <PinPerspective title={title} />
        </div>
    );
};

type PinPerspectiveProps = {
    title?: string;
};

export const PinPerspective = ({ title }: PinPerspectiveProps) => {
    return (
        <motion.div
            className="pointer-events-none w-full h-80 
      flex items-center justify-center 
      opacity-0 group-hover/pin:opacity-100 
      z-60 transition duration-500"
        >
            <div className="w-100 h-full -mt-7 inset-0">
                <div className="absolute top-0 inset-x-0 flex justify-center">
                    <div
                        className="relative flex items-center z-10 
            rounded-full bg-zinc-950 py-0.5 px-4 
            ring-1 ring-white/10"
                    >
                        <span className="text-white text-sm font-bold">
                            {title}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
