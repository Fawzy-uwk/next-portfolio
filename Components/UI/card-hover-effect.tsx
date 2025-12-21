"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export const HoverEffect = ({
    items,
    className,
}: {
    items: { name: string; img: string; description: string }[];
    className?: string;
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-8", className)}>
            {items.map((item, idx) => (
                <div
                    key={item.name}
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-bg dark:bg-slate-800/85 block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 0.25 } }}
                                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.4 } }}
                            />
                        )}
                    </AnimatePresence>
                    <motion.div
                        className="rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/20 relative z-20 flex flex-col items-center"
                        whileHover={{ scale: 1, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)", background: "rgba(3, 19, 35, 0.8)" }}
                        transition={{ duration: 0.2 }}
                    >
                        <Image src={item.img} alt={item.name} width={64} height={64} className="mb-3" />
                        <h4 className="text-primary font-bold tracking-wide text-lg">{item.name}</h4>
                        <p className="mt-2 text-secondary tracking-wide leading-relaxed text-sm md:text-base text-center">{item.description}</p>
                    </motion.div>
                </div>
            ))}
        </div>
    );
};
