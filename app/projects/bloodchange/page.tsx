import Link from '@/components/Link'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'

const TAG = 'vicverse'

export default function BloodchangePage() {
  const posts = allCoreContent(sortPosts(allBlogs)).filter((post) =>
    post.tags?.includes(TAG)
  )

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          换血
        </h1>

        <p className="mt-3 text-sm text-blue-400 sm:text-base">
          Vicverse Updates
        </p>

        <p className="mt-8 text-lg leading-8 text-gray-300">
          这里记录 Vicverse 的建设、重构、部署、问题修复与每一次结构更新。
        </p>

        <div className="mt-12 space-y-8">
          {posts.length === 0 ? (
            <p className="text-gray-400">这个栏目下暂时还没有文章。</p>
          ) : (
            posts.map((post) => (
              <article key={post.slug} className="border-b border-gray-800 pb-8">
                <p className="text-sm text-gray-500">{post.date}</p>

                <h2 className="mt-2 text-2xl font-bold">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition hover:text-orange-500"
                  >
                    {post.title}
                  </Link>
                </h2>

                {post.summary && (
                  <p className="mt-3 leading-7 text-gray-300">
                    {post.summary}
                  </p>
                )}
              </article>
            ))
          )}
        </div>
      </div>
    </main>
  )
}