import { cn } from "@/lib/utils";
import { Spotlight } from "./UI/Spotlight-new";
import { TextGenerateEffect } from "./UI/TextGenerateEffect";
import Button from "./UI/Button";
import { IoIosSend } from "react-icons/io";



export default function Hero() {
    return (
        <>
            <div className="pb-20 pt-26" id="home">
                <Spotlight />
                {/* Grid */}
                <div
                    className={cn(
                        "absolute inset-0",
                        "bg-size-[20px_20px]",
                        "bg-[radial-gradient(#d4d4d4_1px,transparent_1px)]",
                        "dark:bg-[radial-gradient(#303665_1px,transparent_1px)]",
                    )}
                />


                <div className="pointer-events-none absolute inset-0 bg-bg dark:bg-bg mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />

                <div className="flex justify-end md:justify-between items-center flex-col-reverse md:flex-row h-full px-4 md:px-8 lg:px-16 z-10 md:gap-10 py-10 md:py-0">
                    <div className="max-w-screen flex flex-col justify-center items-center md:items-start">
                        <h2 className="text-base md:text-lg z-5 lg:text-xl font-semibold text-center md:text-start text-secondary mb-2 tracking-widest">
                            Welcome to my Portfolio
                        </h2>
                        <TextGenerateEffect duration={1.5} className="lg:max-w-[40vw] text-center md:text-start " words="Crafting Modern Web Experiences with Next.js & ReactJS" />
                        <p className="text-center z-5 md:text-start text-secondary  my-5 text-base md:text-lg">My name is Fawzy, a Frontend Developer based in Egypt</p>
                        <a href="#projects">
                            <Button title="See My Work" position="right" icon={<IoIosSend size={25} className="text-primary md:mr-auto m-auto" />} />
                        </a>
                    </div>

                    <img src="/hero-image.webp" alt="hero iamge" className="z-50 lg:w-[50%] h-full" />
                </div>
            </div >
        </>
    );
}
