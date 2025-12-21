"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { Globe } from "./Globe";
import { GridGlobe } from "../GridGlobe";
import { techStack } from "@/data";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/animationData.json";
import Button from "./Button";
import { IoCopyOutline } from "react-icons/io5";


export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(

                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-5 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};



export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: any) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("fawzy8571@gmail.com");
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }
    return (
        <div
            className={cn(

                "row-span-1 relative overflow-hidden rounded-3xl border border-white/10 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
                className
            )}
            style={{


                background:
                    "linear-gradient(90deg, #001a23 0%, #1a1c33 100%)",
            }}
        >

            <div className={`${id === 6 && "flex justify-center"} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, "object-cover object-center ")}
                        />
                    )}
                </div>
                <div
                    className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-70"
                        } `}
                >
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}

                            className="object-cover object-center w-full h-full"
                        />
                    )}
                </div>
                {id === 6 && (
                    <>
                        <BackgroundGradientAnimation>
                            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
                        </BackgroundGradientAnimation>

                    </>
                )}



                <div
                    className={cn(
                        titleClassName,
                        `group-hover/bento:translate-x-2 gap-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-6 lg:p-10 ${id === 6 ? "lg:py-15" : ""}`
                    )}
                >
                    <div
                        className={`font-sans text-lg lg:text-xl max-w-96 font-bold z-10 `}
                    >
                        {title}
                    </div>
                    <div className="font-sans font-extralight md:max-w-60 max-w-38 md:text-xs lg:text-base text-sm text-secondary z-10">
                        {description}
                    </div>

                    {id === 2 && <GridGlobe />}

                    {id === 3 && (
                        <div className="flex gap-1 lg:gap-2 w-fit absolute -right-4 lg:-right-1 ">
                            <div className="flex flex-col gap-3 lg:gap-3">
                                {techStack.slice(0, 3).map((tech, index) => (
                                    <span key={index} className="py-1 px-3 lg:py-2 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg bg-secondary/10">{tech}</span>
                                ))}
                                <span className="py-2 px-1 lg:py-4 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg bg-secondary/10" />
                            </div>

                            <div className="flex flex-col gap-3 lg:gap-3">
                                <span className="py-2 px-1 lg:py-4 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg bg-secondary/10" />
                                {techStack.slice(3, 6).map((tech, index) => (
                                    <span key={index} className="py-1 px-3 lg:py-2 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg bg-secondary/10">{tech}</span>
                                ))}

                            </div>
                        </div>

                    )}

                    {id === 4 && (
                        <div className="md:mt-6 mt-0">
                            <a href="/Fawzy_Mohamed_CV.pdf" download >
                                <Button
                                    title="Download CV"
                                    position="right"
                                    moreClasses="capitalize mb-12 md:mb-0 mx-auto md:w-auto"
                                />
                            </a>
                        </div>
                    )}

                    {id === 6 && (
                        <div className="mt-6 relative ">
                            <div className={`absolute -bottom-8 right-0`}>
                                <Lottie options={{
                                    loop: copied,
                                    autoplay: copied,
                                    animationData: animationData,
                                    rendererSettings: {
                                        preserveAspectRatio: "xMidYMid slice"
                                    }

                                }} />
                                <Button title={copied ? "email copied" : "copy email"} moreClasses="capitalize w-full" icon={<IoCopyOutline />} position="left" handleClick={handleCopy} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
