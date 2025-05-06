"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type AccordionProps = {
  content: React.ReactNode;
  title: string;
};

export const Accordion = ({ content, title }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full"
      >
        <span className="font-semibold">{title}</span>
        <ChevronDown
          size={18}
          className={cn(
            "transition-all duration-300 ease-smush",
            isOpen ? "rotate-180" : "rotate-0"
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            key="content"
            initial="open"
            animate="open"
            exit="collapsed"
            transition={{ duration: 0.2, ease: "linear" }}
            className="overflow-hidden py-1.5  text-neutral-500"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
