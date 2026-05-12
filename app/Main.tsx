import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 4

type Post = {
  slug: string
  date: string
  title: string
  summary?: string
  tags: string[]
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <>
      <nav className="mb-12 flex items-center justify-between border-b border-gray-800 pb-6">
        <Link href="/home" className="text-lg font-extrabold text-white">
          Vicverse
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium text-gray-300">
          <Link href="/home" className="hover:text-white">
            首页
          </Link>
          <Link href="/about" className="hover:text-white">
            关于
          </Link>
        </div>
      </nav>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            最新日志
          </h1>
          <p className="text-sm text-blue-400 sm:text-base">Latest Logs</p>
          <p className="text-lg leading-7 text-gray-400">记录探索，整理思考，沉淀路径。</p>
        </div>

        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && '暂无日志。'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">发布日期</dt>
                      <dd className="text-base leading-6 font-medium text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>

                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link href={`/blog/${slug}`} className="text-white">
                              {title}
                            </Link>
                          </h2>

                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>

                        <div className="prose max-w-none text-gray-400">{summary}</div>
                      </div>

                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-orange-500 hover:text-orange-400"
                          aria-label={`阅读全文: "${title}"`}
                        >
                          阅读全文 &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>

      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end pt-6 text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-orange-500 hover:text-orange-400"
            aria-label="查看全部日志"
          >
            查看全部日志 &rarr;
          </Link>
        </div>
      )}

      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}

      <div className="mt-20 space-y-16">
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">水下机器人项目</h2>
            <p className="mt-2 text-sm text-blue-400">Underwater Robotics</p>
          </div>
          <div className="space-y-3 text-gray-300">
            <p>记录我对水下机器人、结构分析、资料整理与实践过程的持续探索。</p>
          </div>
          <div className="mt-6">
            <Link
              href="/projects/underwater"
              className="rounded-full bg-orange-500 px-6 py-2 font-bold text-white transition hover:bg-orange-400"
            >
              查看全部
            </Link>
          </div>
        </section>

        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">游戏思考</h2>
            <p className="mt-2 text-sm text-blue-400">Game Reflections</p>
          </div>
          <div className="space-y-3 text-gray-300">
            <p>记录我对游戏机制、体验设计、情绪反馈与玩家感受的观察与思考。</p>
          </div>
          <div className="mt-6">
            <Link
              href="/projects/game"
              className="rounded-full bg-orange-500 px-6 py-2 font-bold text-white transition hover:bg-orange-400"
            >
              查看全部
            </Link>
          </div>
        </section>

        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">音乐分析</h2>
            <p className="mt-2 text-sm text-blue-400">Music Analysis</p>
          </div>
          <div className="space-y-3 text-gray-300">
            <p>记录我对音乐、歌词、情绪结构与作品表达方式的理解与分析。</p>
          </div>
          <div className="mt-6">
            <Link
              href="/projects/music"
              className="rounded-full bg-orange-500 px-6 py-2 font-bold text-white transition hover:bg-orange-400"
            >
              查看全部
            </Link>
          </div>
        </section>
                <section>
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">换血</h2>
            <p className="mt-2 text-sm text-blue-400">Vicverse Updates</p>
          </div>
          <div className="space-y-3 text-gray-300">
            <p>换血！换血！换血！换血！换血！换血！换血！换血！换血！换血！</p>
          </div>
          <div className="mt-6">
            <Link
              href="/projects/bloodchange"
              className="rounded-full bg-orange-500 px-6 py-2 font-bold text-white transition hover:bg-orange-400"
            >
              查看全部
            </Link>
          </div>
        </section>
      </div>

      <div className="mt-24 border-t border-gray-800 pt-16">
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Vicverse</h2>
          <p className="mt-2 text-sm text-blue-400">Contact</p>
        </div>

        <p className="max-w-2xl text-base leading-7 text-gray-300">
          If something here resonates with you, feel free to reach out.
        </p>

        <div className="mt-8 space-y-4 text-gray-300">
          <p>
            <span className="font-bold text-white">学校邮箱：</span> wuweizheng@mails.neu.edu.cn
          </p>
          <p>
            <span className="font-bold text-white">Gmail：</span> vicwu9709@gmail.com
          </p>
          <p>
            <span className="font-bold text-white">QQ邮箱：</span> 3110766414@qq.com
          </p>
          <p>
            <span className="font-bold text-white">微信：</span> VicWu2007
          </p>
        </div>

        <p className="mt-12 text-xs tracking-wide text-gray-500">
          The structure remains. The story continues.
        </p>
      </div>
    </>
  )
}
