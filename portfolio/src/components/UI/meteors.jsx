"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

// Meteors.jsx or meteors.tsx
export const Meteors = ({ number = 20, className }) => {
    const meteors = new Array(number).fill(true);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 pointer-events-none z-0">
            {meteors.map((_, idx) => {
                const position = idx * (800 / number) - 400;

                return (
                    <span
                        key={"meteor" + idx}
                        className={cn(
                            "absolute h-0.5 w-0.5 rotate-[45deg] rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
                            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
                            className
                        )}
                        style={{
                            top: "-20px",
                            left: `${position}px`,
                            animation: 'var(--animate-meteor-effect)',
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />

                );
            })}
        </motion.div>
    );
};
