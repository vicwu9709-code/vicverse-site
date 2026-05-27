import Link from '@/components/Link'
import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'

type TopicPageProps = {
  tag: string
  title: string
  eyebrow: string
  description: string
  statement: string
}

export default function TopicPage({ tag, title, eyebrow, description, statement }: TopicPageProps) {
  const posts = allCoreContent(sortPosts(allBlogs)).filter((post) => post.tags?.includes(tag))

  return (
    <div className="space-y-14 pt-6 pb-10">
      <section className="grid gap-8 border-b border-gray-800 pb-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-bold tracking-[0.22em] text-orange-400 uppercase">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
            {title}
          </h1>
        </div>
        <div className="max-w-3xl">
          <p className="text-xl leading-9 font-medium text-gray-200">{description}</p>
          <p className="mt-6 border-l-4 border-orange-500 pl-5 text-base leading-7 text-gray-400">
            {statement}
          </p>
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold tracking-[0.22em] text-orange-400 uppercase">Archive</p>
            <h2 className="mt-3 text-3xl font-black text-white">相关日志</h2>
          </div>
          <p className="text-sm font-bold text-gray-500">{posts.length} entries</p>
        </div>

        <div className="grid gap-4">
          {posts.length === 0 ? (
            <div className="border border-gray-800 bg-black p-6 text-gray-400">
              这个栏目下暂时还没有文章。
            </div>
          ) : (
            posts.map((post) => (
              <article
                key={post.slug}
                className="border border-gray-800 bg-black p-6 transition hover:border-orange-500"
              >
                <p className="text-sm text-gray-500">{post.date}</p>
                <h3 className="mt-3 text-2xl font-black text-white">
                  <Link href={`/blog/${post.slug}`} className="hover:text-orange-300">
                    {post.title}
                  </Link>
                </h3>
                {post.summary && (
                  <p className="mt-4 max-w-3xl leading-7 text-gray-400">{post.summary}</p>
                )}
              </article>
            ))
          )}
        </div>
      </section>
    </div>
  )
}
