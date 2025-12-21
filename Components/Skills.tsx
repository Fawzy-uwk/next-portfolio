"use client";

import { skills } from "@/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const HoverSkills = ({ className }: { className?: string }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-10",
                className
            )}
        >
            {skills.map((skill, idx) => (
                <div
                    key={skill.name}
                    className="relative group p-2 rounded-2xl cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.div
                                className="absolute inset-0 rounded-2xl bg-bg/80 dark:bg-slate-800/80 z-10"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 0.25 } }}
                                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                            />
                        )}
                    </AnimatePresence>

                    <div className="relative z-20 flex flex-col items-center p-4">
                        <Image
                            src={skill.img}
                            alt={skill.name}
                            width={60}
                            height={60}
                            className="mb-3"
                        />
                        <h4 className="text-lg font-bold text-primary">{skill.name}</h4>
                        {hoveredIndex === idx && (
                            <p className="mt-2 text-center text-secondary text-sm md:text-base">
                                {skill.description}
                            </p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};
