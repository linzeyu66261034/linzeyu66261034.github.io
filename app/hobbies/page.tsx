"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import BackgroundWrapper from "@/components/BackgroundWrapper";
import PageTransition from "@/components/PageTransition";
import { books, musicList } from "@/lib/data";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

type Tab = "books" | "music";

export default function Hobbies() {
  const [activeTab, setActiveTab] = useState<Tab>("books");

  return (
    <BackgroundWrapper className="min-h-screen">
      <PageTransition className="px-6 pt-32 pb-24 max-w-3xl mx-auto">
        {/* Title */}
        <motion.h1
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl md:text-3xl font-serif text-stone-100 tracking-wider mb-4"
        >
          爱好
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-12 h-[1px] bg-stone-400 mb-12"
        />

        {/* Tabs */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex gap-8 mb-12"
        >
          {[
            { id: "books" as Tab, label: "书籍", sub: "Books" },
            { id: "music" as Tab, label: "音乐", sub: "Music" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="group text-left"
            >
              <span
                className={`block text-base tracking-wider transition-colors duration-300 ${
                  activeTab === tab.id
                    ? "text-stone-100"
                    : "text-stone-500 hover:text-stone-300"
                }`}
              >
                {tab.label}
              </span>
              <span className="block text-xs text-stone-600 tracking-[0.2em] mt-1">
                {tab.sub}
              </span>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="tab-underline"
                  className="h-[1px] bg-stone-400 mt-2"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Books Tab */}
        {activeTab === "books" && (
          <div className="space-y-6">
            {books.map((book, index) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-stone-50/10 backdrop-blur-sm rounded-sm p-6 border border-stone-200/20"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-base font-serif text-stone-200 tracking-wide">
                    {book.title}
                  </h3>
                  <span className="text-xs text-stone-500 font-light ml-4 whitespace-nowrap">
                    {book.author}
                  </span>
                </div>
                <blockquote className="border-l border-stone-400/30 pl-4 mb-4">
                  <p className="text-sm text-stone-400 leading-relaxed font-light italic">
                    "{book.quote}"
                  </p>
                </blockquote>
                <p className="text-sm text-stone-500 leading-relaxed font-light">
                  {book.thoughts}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Music Tab */}
        {activeTab === "music" && (
          <div className="space-y-6">
            {musicList.map((music, index) => (
              <motion.div
                key={music.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-stone-50/10 backdrop-blur-sm rounded-sm p-6 border border-stone-200/20"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-base font-serif text-stone-200 tracking-wide">
                      {music.title}
                    </h3>
                    {music.album && (
                      <span className="text-xs text-stone-500 font-light block mt-1">
                        {music.album}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-stone-500 font-light ml-4 whitespace-nowrap">
                    {music.artist}
                  </span>
                </div>
                <p className="text-sm text-stone-500 leading-relaxed font-light">
                  {music.thoughts}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </PageTransition>
    </BackgroundWrapper>
  );
}
