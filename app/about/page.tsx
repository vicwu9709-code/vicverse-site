export default function AboutPage() {
  return (
    <div className="space-y-16 pt-6 pb-10">
      <section className="grid gap-10 border-b border-gray-800 pb-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-bold tracking-[0.22em] text-orange-400 uppercase">About</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
            关于 Vic
          </h1>
        </div>
        <div className="max-w-3xl space-y-6 text-lg leading-8 text-gray-300">
          <p>你好，我是 Vic。</p>
          <p>我目前最关注的方向是水下探索，以及围绕这一方向展开的长期学习、资料整理和实践准备。</p>
          <p>
            Vicverse
            是我的个人记录系统。它不追求一次性完成，而是把我正在理解的东西持续沉淀下来：水下机器人、游戏体验、音乐表达、网站本身的重构，以及个人状态的变化。
          </p>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        <div className="border border-gray-800 bg-black p-6">
          <p className="text-sm font-bold text-orange-400">01</p>
          <h2 className="mt-4 text-2xl font-black text-white">主线</h2>
          <p className="mt-4 leading-7 text-gray-400">
            以水下机器人为长期方向，把兴趣拆成结构、控制、推进、传感和应用场景。
          </p>
        </div>
        <div className="border border-gray-800 bg-black p-6">
          <p className="text-sm font-bold text-orange-400">02</p>
          <h2 className="mt-4 text-2xl font-black text-white">记录</h2>
          <p className="mt-4 leading-7 text-gray-400">
            不只写结论，也保留学习时的犹豫、修正、误判和重新组织的过程。
          </p>
        </div>
        <div className="border border-gray-800 bg-black p-6">
          <p className="text-sm font-bold text-orange-400">03</p>
          <h2 className="mt-4 text-2xl font-black text-white">换血</h2>
          <p className="mt-4 leading-7 text-gray-400">
            当结构不再适合继续生长，就重构它。Vicverse 本身也是一个长期项目。
          </p>
        </div>
      </section>
    </div>
  )
}
