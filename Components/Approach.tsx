"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/Components/UI/canvas-reveal-effect";
import { HoverBorderGradient } from "./UI/ApproachButton";

export default function Approach() {
    return (
        <section className="relative z-10 py-20 bg-bg w-full">
            <h1 className="heading mb-10 text-center">
                My <span className="text-accent">Approach</span>
            </h1>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4 w-full max-w-7xl mx-auto">
                
                <Card
                    title="Planning"
                    description="Understanding requirements, designing layout and flow."
                    icon={<AceternityIcon order="Phase 1" />}
                >
                    <CanvasRevealEffect
                        animationSpeed={2.5}
                        containerClassName="bg-blue-900"
                        colors={[[14, 165, 233]]}
                        dotSize={3}
                    />
                </Card>

                
                <Card
                    title="Development"
                    description="Building interactive UI components using the suitable tech stack."
                    icon={<AceternityIcon order="Phase 2" />}
                >
                    <CanvasRevealEffect
                        animationSpeed={2.5}
                        containerClassName="bg-indigo-900"
                        colors={[[129, 140, 248], [168, 85, 247]]}
                        dotSize={2}
                    />
                </Card>

                
                <Card
                    title="Deployment"
                    description="Optimizing and deploying websites for high-performance production."
                    icon={<AceternityIcon order="Phase 3" />}
                >
                    <CanvasRevealEffect
                        animationSpeed={2.5}
                        containerClassName="bg-purple-900"
                        colors={[[192, 132, 252]]}
                        dotSize={1.5}
                    />
                </Card>
            </div>
        </section>
    );
}

const Card = ({
    title,
    icon,
    children,
    description,
}: {
    title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
    description: string;
}) => {
    const [hovered, setHovered] = React.useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
         
            className="border group/canvas-card flex items-center justify-center border-secondary/20 max-w-sm w-full p-6 relative min-h-100 lg:h-125 overflow-hidden transition-all duration-300"
        >
            
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-primary" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-primary" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-primary" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-primary" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20 w-full">
          
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/canvas-card:opacity-0 group-hover/canvas-card:-translate-y-10 transition duration-300 ease-in-out w-full flex items-center justify-center">
                    {icon}
                </div>

           
                <div className="opacity-0 group-hover/canvas-card:opacity-100 transition duration-300 ease-in-out delay-200 flex flex-col items-center justify-center">
                    <h2 className="text-2xl lg:text-3xl font-bold text-primary text-center">
                        {title}
                    </h2>
                    <p className="text-sm lg:text-base text-secondary text-center mt-4 font-medium leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

const AceternityIcon = ({ order }: { order: string }) => {
    return (
        <div>
            <HoverBorderGradient
                containerClassName="rounded-full"
                className="bg-bg text-primary px-8 py-2 capitalize font-bold text-lg lg:text-xl"
            >
                {order}
            </HoverBorderGradient>
        </div>
    );
};

export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};