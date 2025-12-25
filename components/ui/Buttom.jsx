import React from "react";

export default function Button({ text, icon, className = "" }) {
    const baseClasses =
        "flex items-center justify-center   rounded-[12px] text-sm cursor-pointer transition-all duration-5 00 tracking-[-1%]";

    return (
        <button
            className={`${baseClasses} ${className}`}
        >
            {icon && <span className="text-base">{icon}</span>}
            {text}
        </button>
    );
}
