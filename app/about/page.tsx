export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">关于</h1>
        <p className="mt-3 text-sm text-blue-400 sm:text-base">About</p>

        <div className="mt-10 space-y-6 text-lg leading-8 text-gray-300">
          <p>你好，我是 Vic。</p>
          <p>我目前关注的方向是水下探索，以及围绕这一方向展开的长期学习与实践。</p>
          <p>这个网站用来记录我的日志、主题思考与持续积累的路径。</p>
        </div>
      </div>
    </main>
  )
}
