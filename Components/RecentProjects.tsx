"use client";

import { projects } from "@/data";
import { PinContainer } from "./UI/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";

function RecentProjects() {
    return (
        <div className="relative z-10 py-20" id="projects">
            <h1 className="heading mb-10">
                Some of my <span className="text-accent">Recent Projects</span>
            </h1>

            <div className="flex flex-wrap items-center justify-center p-4 gap-x-28 gap-y-26">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="lg:min-h-100 h-100 flex items-center justify-center sm:w-100 w-[80vw]"
                    >
                        <PinContainer title={project.link} href={project.link}>
                            <div className="relative flex items-center justify-center sm:w-110 w-[80vw] overflow-hidden rounded-md h-[20vh] lg:h-[35vh]">
                                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl rounded-2xl bg-bg">
                                    <Image
                                        src="/bg.png"
                                        alt="bg"
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>

                                <Image
                                    src={project.img}
                                    alt={project.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    priority
                                />
                            </div>

                            <h1 className="font-bold text-lg md:text-xl line-clamp-1 lg:text-3xl">
                                {project.title}
                            </h1>
                            <p className="lg:text-base text-sm text-secondary font-light line-clamp-2">
                                {project.des}
                            </p>

                            <div className="flex items-center justify-between my-5">
                                <div className="flex items-center w-full">
                                    {project.iconLists.map((icon, index) => (
                                        <div
                                            key={index}
                                            className="w-8 h-8 mr-2 lg:w-12 lg:h-12 bg-bg flex items-center justify-center rounded-full border border-white/20 p-1"
                                            style={{ transform: `translateX(-${5 * index * 2}px)` }}
                                        >
                                            <Image
                                                src={icon}
                                                alt={`icon-${index}`}
                                                width={30}
                                                height={30}
                                            />
                                        </div>
                                    ))}

                                    <div className="flex items-center gap-1 flex-wrap flex-col justify-center ms-auto">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center text-accent hover:text-primary"
                                        >
                                            <p className="flex lg:text-xl md:text-base text-sm">
                                                Visit URL
                                            </p>{" "}
                                            <FaLocationArrow className="ms-2 " />
                                        </a>
                                        <a
                                            href={project.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center text-accent hover:text-primary"
                                        >
                                            <p className="flex lg:text-xl md:text-base text-sm">
                                                Visit Repo
                                            </p>{" "}
                                            <FaLocationArrow className="ms-2 " />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecentProjects;
