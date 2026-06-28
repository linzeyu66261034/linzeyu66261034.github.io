"use client";

import { motion } from "framer-motion";
import BackgroundWrapper from "@/components/BackgroundWrapper";
import PageTransition from "@/components/PageTransition";
import { thoughts } from "@/lib/data";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function About() {
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
          关于我
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-12 h-[1px] bg-stone-400 mb-12"
        />

        {/* Bio Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6 mb-16"
        >
          <p className="text-base text-stone-300 leading-relaxed font-light tracking-wide">
            我是林泽裕，一个在物理与文学之间游走的灵魂。
          </p>
          <p className="text-base text-stone-300 leading-relaxed font-light tracking-wide">
            白天研究量子力学和相对论，晚上读诗、听爵士、写一些不成文的文字。
            相信科学和诗意并不矛盾——物理学的尽头是哲学，而哲学的尽头是诗。
          </p>
          <p className="text-base text-stone-300 leading-relaxed font-light tracking-wide">
            喜欢旧书店的味道、雨天的咖啡馆、凌晨四点的星空。
            相信生活中最美好的事物，往往都是免费的——比如黄昏的光、海边的风、和一本好书的陪伴。
          </p>
        </motion.div>

        {/* Interests Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="text-lg font-serif text-stone-200 tracking-wider mb-6">
            兴趣
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { emoji: "📚", title: "阅读", desc: "文学、哲学、科普，什么书都看。最近在读《百年孤独》和《时间简史》。" },
              { emoji: "🎵", title: "音乐", desc: "爵士、古典、民谣。深夜写作时听Satie，下雨天听Bill Evans。" },
              { emoji: "🌌", title: "思考", desc: "关于宇宙、关于生命、关于一杯咖啡的温度。思考本身就是一种浪漫。" },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-stone-50/10 backdrop-blur-sm rounded-sm p-5 border border-stone-200/20"
              >
                <span className="text-2xl block mb-3">{item.emoji}</span>
                <h3 className="text-sm text-stone-200 tracking-wider mb-2">{item.title}</h3>
                <p className="text-xs text-stone-400 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Thoughts Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-lg font-serif text-stone-200 tracking-wider mb-6">
            一些思考
          </h2>
          <div className="space-y-4">
            {thoughts.map((thought, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="border-l border-stone-400/30 pl-4 py-2"
              >
                <p className="text-sm text-stone-300 leading-relaxed font-light italic">
                  "{thought.content}"
                </p>
                {thought.source && (
                  <p className="text-xs text-stone-500 mt-2 tracking-wider">
                    —— {thought.source}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </PageTransition>
    </BackgroundWrapper>
  );
}
