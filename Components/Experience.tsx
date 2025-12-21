import { workExperience } from "@/data";
import { Button } from "./UI/MovingBorder";



export default function Experience() {
    return (
        <div className="relative z-10 pb-10" id="Experience">
            <h1 className="heading capitalize mb-12">My {" "} <span className="text-accent">work experience</span></h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                {workExperience.map((work) => (
                    <Button key={work.id} className={`${work.className} flex-1 text-primary border-secondary px-10 py-5`} duration={Math.floor(Math.random() * 8000) + 8000}>
                        <div className="flex items-center flex-col md:flex-row gap-6">
                            <img src={work.thumbnail} alt={work.title} className="w-16 md:w-20 lg:w-32 " width={25} height={25}/>
                            <div className="flex flex-col md:items-start items-center">
                                <h4 className="text-primary md:text-start text-center font-bold tracking-wide text-lg  lg:text-[28px]">{work.title}</h4>
                                <p className="mt-2 text-secondary tracking-wide leading-relaxed text-sm md:text-base md:text-start text-center lg:text-lg ">{work.desc}</p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    )
}
