"use client";
import { useState, useEffect } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import { navItems } from "@/data";
import { FaHome, FaProjectDiagram } from "react-icons/fa";
import { SiAboutdotme, SiSkillshare } from "react-icons/si";
import { MdMailOutline, MdWork } from "react-icons/md";

export const FloatingNavBar = ({ className }: { className?: string }) => {
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("");

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        if (typeof current === "number") {
            let direction = current - scrollYProgress.getPrevious()!;
            setVisible(scrollYProgress.get() > 0.05 && direction < 0);
        }
    });

    useEffect(() => {
        const handleScroll = () => {
            navItems.forEach((item) => {
                const section = document.querySelector(item.link);
                if (section) {
                    const top = section.getBoundingClientRect().top;
                    if (top <= window.innerHeight / 2 && top >= -section.clientHeight / 2) {
                        setActiveSection(item.link);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); 

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className={cn(
                    "flex max-w-fit fixed top-6 inset-x-0 mx-auto px-6 py-4  items-center justify-center space-x-6 rounded-full shadow-lg backdrop-blur-md border border-transparent dark:border-white/20 bg-white/80 dark:bg-black/80 z-5000 transition-all",
                    className
                )}
            >
                {navItems.map((navItem: any, idx: number) => (
                    <a
                        key={`link=${idx}`}
                        href={navItem.link}
                        className={cn(
                            "flex items-center space-x-2 text-primary  hover:text-blue-600 dark:hover:text-blue-700 transition-colors duration-200",
                            activeSection === navItem.link
                                ? "font-bold text-blue-600 dark:text-blue-500"
                                : ""
                        )}
                    >
                        <span className="block sm:hidden text-lg">
                            {navItem.name === "Home" ? <FaHome size={25} />
                                : navItem.name === "About" ? <SiAboutdotme size={25} className="scale-200" />
                                    : navItem.name === "Skills" ? <SiSkillshare size={25} className="scale-170" />
                                        : navItem.name === "Projects" ? <FaProjectDiagram size={25} />
                                            : navItem.name === "Experience" ? <MdWork size={25} />
                                                : navItem.name === "Contact" ? <MdMailOutline size={25} /> : null

                            }
                        </span>
                        <span className="hidden sm:block text-sm font-medium">{navItem.name}</span>
                    </a>
                ))}
            </motion.div>
        </AnimatePresence>
    );
};
