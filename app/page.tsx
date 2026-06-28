"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BackgroundWrapper from "@/components/BackgroundWrapper";
import PageTransition from "@/components/PageTransition";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <BackgroundWrapper className="min-h-screen flex items-center justify-center">
      <PageTransition>
        <div className="px-6 py-24 max-w-2xl mx-auto text-center">
          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-serif text-stone-100 tracking-[0.2em] mb-6"
          >
            林泽裕
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-16 h-[1px] bg-stone-400 mx-auto mb-8"
          />

          {/* Philosophical quote */}
          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-stone-300 font-light leading-relaxed tracking-wide mb-12"
          >
            "在文字与光影之间，寻找生活的诗意。"
          </motion.p>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm text-stone-400 font-light tracking-widest mb-16"
          >
            物理系学生 · 阅读者 · 偶尔写诗
          </motion.p>

          {/* Navigation Links */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12"
          >
            {[
              { href: "/about", label: "关于我", sub: "About" },
              { href: "/life", label: "生活记录", sub: "Life" },
              { href: "/hobbies", label: "爱好", sub: "Hobbies" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="text-center"
                >
                  <span className="block text-base text-stone-200 group-hover:text-stone-100 transition-colors duration-300 tracking-wider">
                    {link.label}
                  </span>
                  <span className="block text-xs text-stone-500 group-hover:text-stone-400 transition-colors duration-300 tracking-[0.3em] mt-1">
                    {link.sub}
                  </span>
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="mt-24"
          >
            <p className="text-xs text-stone-500/60 font-light tracking-widest">
              ✦ 用心生活，认真感受 ✦
            </p>
          </motion.div>
        </div>
      </PageTransition>
    </BackgroundWrapper>
  );
}
