export default function Home() {
  return (
    <main className="min-h-screen max-w-2xl mx-auto px-6 py-24 flex flex-col items-center">
      {/* 1. 顶部摄影位 - 建议放一张有氛围感的照片 */}
      <section className="w-full mb-20 group">
        <div className="aspect-[4/5] bg-stone-200 rounded-sm overflow-hidden relative shadow-sm transition-shadow hover:shadow-md">
          {/* 这里稍后换成你的 me.jpg */}
          <div className="absolute inset-0 flex items-center justify-center text-stone-400 font-serif italic">
            [ 摄影作品：光影的边界 ]
          </div>
        </div>
        <p className="mt-4 text-xs text-stone-400 font-serif tracking-widest text-center uppercase">
          Captured by Zeyu / 2026
        </p>
      </section>

      {/* 2. 诗歌板块 - 极简排版 */}
      <section className="text-center mb-24 space-y-8">
        <h2 className="text-stone-300 text-sm tracking-[0.5em] mb-12 italic">— 诗云 —</h2>
        <div className="space-y-6 text-stone-800 leading-loose tracking-widest font-serif text-lg">
          <p>普朗克拨动常数的琴弦</p>
          <p>宇宙在微小的震荡中苏醒</p>
          <p>你是每一个量子态的叠加</p>
          <p>在观测之前，拥有无限的柔情</p>
        </div>
      </section>

      {/* 3. 音乐推荐 - 优雅的占位符 */}
      <section className="w-full border-t border-stone-200 pt-12 text-center">
        <div className="inline-block p-4 border border-stone-200 rounded-full mb-4">
          <div className="w-3 h-3 bg-stone-800 rounded-full animate-pulse"></div>
        </div>
        <p className="text-sm font-serif text-stone-600 italic">
          正在播放：梅特纳 - 被遗忘的旋律
        </p>
      </section>

      {/* 4. 页脚 - 物理专业的小细节 */}
      <footer className="mt-32 text-[10px] text-stone-300 font-mono tracking-tighter">
        h = 6.62607015 × 10⁻³⁴ J·s | LIN ZEYU
      </footer>
    </main>
  );
}
// physics lab update
