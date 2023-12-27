'use client';

import React, { useRef, HTMLAttributes, forwardRef, useState, useCallback, useEffect } from "react";
import { cn } from "@/src/utils/pipes/classNames.pipe";
// import { Button } from "@/components/ui/button";

type TooltipProps = {
    children?: React.ReactNode
}

function Tooltip({ children }: TooltipProps) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [activeItem, setActiveItem] = useState<boolean>(false);

    const handleToggle = () => {
        setActiveItem((prev) => !prev);
    }

    const handleMouseEnter = () => {
        setActiveItem(true);
    }

    const handleMouseLeave = () => {
        setActiveItem(false);
    }

    const handleOnOutside = useCallback(
        (e: MouseEvent) => {
            if (buttonRef.current && !buttonRef.current.contains(e.target as Node) && contentRef.current && !contentRef.current.contains(e.target as Node)) {
                setActiveItem(false);
            }
        },
        [buttonRef, contentRef]
    );

    useEffect(() => {
        document.addEventListener('click', handleOnOutside);
        return () => {
            document.removeEventListener('click', handleOnOutside);
        };
    }, [handleOnOutside]);


    return (
        <div className="relative inline-flex">
            <button ref={buttonRef} onClick={handleToggle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="text-emerald-900 inline-flex rounded-md" type="button">
                <span>Info</span>
            </button>
            <TooltipContent ref={contentRef} children={children} active={activeItem} handleToggle={handleToggle} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />    
        </div>
    )
}

interface TooltipContentProps extends HTMLAttributes<HTMLDivElement> {
    active: boolean
    handleToggle: () => void
    handleMouseEnter: () => void
    handleMouseLeave: () => void
}

const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>((props, ref) => {
    const { children, active, handleToggle, handleMouseEnter, handleMouseLeave } = props;

    return (
        <div  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={cn('absolute z-10 p-4 hidden max-w-max bg-red-700 text-white rounded-md', active && 'block')} ref={ref}>
            <button className="absolute -top-3 -right-3 bg-green-900 w-6 h-6 rounded-full" onClick={handleToggle} type="button">x</button>
            {children}
        </div>
    )
});

export { Tooltip };