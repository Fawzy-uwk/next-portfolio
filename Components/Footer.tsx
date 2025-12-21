"use client"
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./UI/Button";

const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-10 z-15 relative" id="contact">

            <div className="w-full absolute left-0 -bottom-72 min-h-96">
                <img
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-50 "
                />
            </div>

            <div className="flex flex-col items-center ">
                <h1 className="heading lg:max-w-[45vw] z-200 leading-16">
                    Turn <span className="text-accent">your vision</span>  into a beautiful website.
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center z-200">
                    Let’s collaborate to achieve your goals and make an impact.
                </p>
                <a href="mailto:fawzy8571@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2025 Fawzy Mohamed
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((info) => (
                        <a
                            key={info.id}
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-black/20 rounded-lg border border-black/30 transition-transform transform hover:scale-110"
                            style={{ ['--hover-bg' as any]: info.color }} // TypeScript fix
                        >
                            <img src={info.img} alt="icon" width={20} height={20} />
                            <style jsx>{`
        a:hover {
          background-color: var(--hover-bg);
        }
      `}</style>
                        </a>
                    ))}
                </div>



            </div>
        </footer>
    );
};

export default Footer;