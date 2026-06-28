"use client";

import { motion } from "framer-motion";
import BackgroundWrapper from "@/components/BackgroundWrapper";
import PageTransition from "@/components/PageTransition";
import Card from "@/components/Card";
import { lifeRecords } from "@/lib/data";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Life() {
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
          生活记录
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-12 h-[1px] bg-stone-400 mb-4"
        />

        <motion.p
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm text-stone-400 font-light tracking-wide mb-12"
        >
          一些值得被记住的瞬间
        </motion.p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {lifeRecords.map((record, index) => (
            <motion.div
              key={record.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Card
                title={record.title}
                date={record.date}
                description={record.description}
                detail={record.detail}
                location={record.location}
              />
            </motion.div>
          ))}
        </div>
      </PageTransition>
    </BackgroundWrapper>
  );
}
