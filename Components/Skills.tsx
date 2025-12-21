import { skills } from "@/data";
import { HoverEffect } from "./UI/card-hover-effect";

export default function Skills() {
    return (
        <div className="relative z-10 py-10" id="Skills">
            <h1 className="heading ">Some of my {" "} <span className="text-accent">Skills</span></h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-28 gap-y-26">
                <HoverEffect items={skills} />
            </div>
        </div>
    );
}

