import React from "react";
import "../Marquee/Marquee.css";


const cn = (...classes) => {
    return classes
        .flatMap((item) => {
            if (typeof item === "string") return item;
            if (typeof item === "object" && item !== null) {
                return Object.keys(item).filter((key) => item[key]);
            }
            return [];
        })
        .join(" ");
};

export default function Marquee({
    children,
    vertical = false,
    repeat = 5,
    pauseOnHover = false,
    reverse = false,
    className = "",
    applyMask = true,
    ...props
}) {
    return (
        <div
            {...props}
            className={cn(
                "group/marquee relative flex h-full w-full overflow-hidden p-2 [--duration:10s] [--gap:12px] gap-(--gap)",
                {
                    "flex-col": vertical,
                    "flex-row": !vertical,
                },
                className
            )}
        >
            {Array.from({ length: repeat }).map((_, index) => (
                <div
                    key={`item-${index}`}
                    className={cn("flex shrink-0 gap-(--gap)", {
                        "marquee-pause-on-hover": pauseOnHover,
                        "marquee-horizontal flex-row": !vertical,
                        "marquee-vertical flex-col": vertical,
                    })}
                    style={
                        reverse
                            ? {
                                animationDirection: "reverse",
                            }
                            : undefined
                    }
                >
                    {children}
                </div>
            ))}

            {applyMask && (
                <div
                    className={cn(
                        "pointer-events-none absolute inset-0 z-10 h-full w-full from-white/50 from-5% via-transparent via-50% to-white/50 to-95%",
                        {
                            "bg-linear-to-b": vertical,
                            "bg-linear-to-r": !vertical,
                        }
                    )}
                />
            )}
        </div>
    );
}