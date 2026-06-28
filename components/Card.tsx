"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface CardProps {
  title: string;
  date: string;
  description: string;
  detail: string;
  location?: string;
}

export default function Card({
  title,
  date,
  description,
  detail,
  location,
}: CardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      className="group cursor-pointer bg-stone-50/80 backdrop-blur-sm rounded-sm border border-stone-200/50 overflow-hidden"
      whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-base font-serif text-stone-800 tracking-wide">
            {title}
          </h3>
          <span className="text-xs text-stone-400 font-light whitespace-nowrap ml-4">
            {date}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-stone-500 leading-relaxed font-light">
          {description}
        </p>

        {/* Location */}
        {location && (
          <p className="mt-3 text-xs text-stone-400 font-light tracking-wider">
            📍 {location}
          </p>
        )}

        {/* Expand indicator */}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 flex justify-center"
        >
          <span className="text-stone-300 text-xs tracking-widest">
            {isExpanded ? "收起 ▲" : "展开 ▼"}
          </span>
        </motion.div>

        {/* Expanded Detail */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-4 border-t border-stone-200/50">
                <p className="text-sm text-stone-600 leading-relaxed font-light italic">
                  {detail}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
