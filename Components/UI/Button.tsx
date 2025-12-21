

export default function Button({ title, icon, position, handleClick, moreClasses }: { title?: string, icon?: React.ReactNode, position?: string, handleClick?: () => void, moreClasses?: string }) {
    return (
        <button className={`relative inline-flex h-13 overflow-hidden rounded-md p-px focus:outline-none focus:ring-1 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-slate-50   ${moreClasses ? moreClasses : ''}`} onClick={handleClick}>
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#98ccdd_0%,#000266_50%,#98ccdd_100%)] " />
            <span className={`inline-flex text-nowrap gap-2 h-full w-full cursor-pointer items-center justify-center rounded-md bg-bg hover:bg-transparent  px-12 py-2 text-sm md:text-lg transition-all delay-150 duration-200 font-medium text-primary backdrop-blur-3xl `} >
                {position === "left" && icon}
                {title}
                {position === "right" && icon}
            </span>
        </button>
    )
}
