'use client';

import React, { useState, useRef, HTMLAttributes, forwardRef, useEffect } from "react";
import { cn } from "@/src/utils/pipes/classNames.pipe";

type AccordionProps = {
    children: React.ReactNode
}

function Accordion({ children }: AccordionProps) {
    return (
        <div className="grid gap-4">
            {children}
        </div>
    )
}

type AccordionItemProps = {
    children: React.ReactNode
    id: string
    title: string
}

function AccordionItem({ children, id, title }: AccordionItemProps) {
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const [activeHeight, setActiveHeight] = useState<number>(0);    
    const contentRef = useRef<HTMLDivElement>(null);

    const handleToggle = (id: string) => {
        const activeHeight = contentRef?.current?.scrollHeight ?? 0;
        setActiveHeight(activeHeight);
        setActiveItem((prev) => (prev === id ? null : id));
    };

    useEffect(() => {
        const handleResize = () => {
            if (activeItem === id) {
                const activeHeight = contentRef?.current?.scrollHeight ?? 0;
                setActiveHeight(activeHeight);
            }
        };


        window.addEventListener('resize', handleResize);    

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [activeItem, contentRef, id]);

    const isActive = activeItem === id;
    const isHeight = activeItem === id ? activeHeight : 0;

    return (
        <div className="overflow-hidden rounded-md shadow-lg">
            <header className={cn('flex justify-between items-center gap-4 p-4 bg-emerald-900 text-white')}>
                <p>{title}</p>
                <button className="bg-yellow-700 rounded-3xl py-1 min-w-24 px-4" onClick={() => handleToggle(id)} type="button">{isActive ? 'Hide' : 'Show'}</button>
            </header>

            <AccordionContent ref={contentRef} height={isHeight} children={children} />
        </div>
    )
}

interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
    height: number
}

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>((props, ref) => {
    const { children, height } = props;

    return (
      <div ref={ref} className="bg-yellow-700 overflow-hidden duration-300 ease-in-out transition-max-height max-h-0" style={{ maxHeight: `${height?.toString()}px`} }>
        <div className={cn('p-4')}>
            {children}
        </div>
      </div>
    );
});


export { Accordion, AccordionItem };