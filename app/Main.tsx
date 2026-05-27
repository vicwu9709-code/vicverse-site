import Link from '@/components/Link'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

const MAX_DISPLAY = 5

type Post = {
  slug: string
  date: string
  title: string
  summary?: string
  tags: string[]
}

const tracks = [
  {
    title: '水下机器人',
    eyebrow: 'Underwater Robotics',
    href: '/projects/underwater',
    description: '把结构、推进、控制、传感和任务场景拆开记录，形成长期学习路径。',
    accent: '01',
  },
  {
    title: '游戏思考',
    eyebrow: 'Game Reflections',
    href: '/projects/game',
    description: '从竞技状态、机制反馈和玩家体验里提炼可复盘的观察。',
    accent: '02',
  },
  {
    title: '音乐分析',
    eyebrow: 'Music Analysis',
    href: '/projects/music',
    description: '分析歌词、编曲、情绪结构和作品表达，留下听感背后的判断。',
    accent: '03',
  },
  {
    title: '换血记录',
    eyebrow: 'Vicverse Updates',
    href: '/projects/bloodchange',
    description: '记录网站结构、部署链路、内容系统和表达方式的每一次重构。',
    accent: '04',
  },
]

export default function Home({ posts }: { posts: Post[] }) {
  const latestPosts = posts.slice(0, MAX_DISPLAY)

  return (
    <div className="space-y-24 pb-10">
      <section className="relative -mx-4 overflow-hidden rounded-lg border border-orange-500/20 bg-black sm:-mx-6 lg:-mx-8">
        <div className="absolute inset-0">
          <Image
            src="/static/images/ocean.jpeg"
            alt=""
            fill
            sizes="100vw"
            className="h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.76)_48%,rgba(0,0,0,0.38)_100%)]" />
        </div>

        <div className="relative grid min-h-[620px] items-end px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-12">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-md border border-orange-400/50 bg-orange-500/10 px-3 py-1 text-xs font-bold tracking-[0.24em] text-orange-300 uppercase">
              Vicverse v5
            </p>
            <h1 className="text-5xl leading-none font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Vicverse
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 font-medium text-gray-100 sm:text-2xl">
              一个以水下探索为主线，持续记录技术学习、游戏体验、音乐分析和自我重构的个人空间。
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="rounded-md bg-orange-500 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-orange-400"
              >
                阅读最新日志
              </Link>
              <Link
                href="/projects"
                className="rounded-md border border-white/20 bg-white/10 px-5 py-3 text-sm font-extrabold text-white transition hover:border-orange-400 hover:text-orange-200"
              >
                查看专题
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-3 lg:mt-0 lg:self-end">
            <div className="border-l-4 border-orange-500 bg-black/58 px-5 py-4 backdrop-blur">
              <p className="text-xs font-bold tracking-[0.22em] text-orange-300 uppercase">
                Current Line
              </p>
              <p className="mt-2 text-2xl font-black text-white">水下机器人</p>
              <p className="mt-3 text-sm leading-6 text-gray-300">
                从兴趣出发，把零散学习变成可追踪、可复盘、可继续推进的路径。
              </p>
            </div>
            <div className="grid grid-cols-3 border border-white/10 bg-black/50 text-center backdrop-blur">
              <div className="px-3 py-4">
                <p className="text-2xl font-black text-orange-400">{posts.length}</p>
                <p className="mt-1 text-xs text-gray-400">Logs</p>
              </div>
              <div className="border-x border-white/10 px-3 py-4">
                <p className="text-2xl font-black text-orange-400">4</p>
                <p className="mt-1 text-xs text-gray-400">Tracks</p>
              </div>
              <div className="px-3 py-4">
                <p className="text-2xl font-black text-orange-400">v5</p>
                <p className="mt-1 text-xs text-gray-400">Build</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-8 flex flex-col justify-between gap-4 border-b border-gray-800 pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold tracking-[0.22em] text-orange-400 uppercase">
              Latest Logs
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              最新日志
            </h2>
          </div>
          <Link href="/blog" className="text-sm font-bold text-orange-400 hover:text-orange-300">
            全部日志 &rarr;
          </Link>
        </div>

        <div className="grid gap-4">
          {!latestPosts.length && <p className="text-gray-400">暂无日志。</p>}
          {latestPosts.map((post, index) => (
            <article
              key={post.slug}
              className="group grid gap-5 border border-gray-800 bg-gray-950/60 p-5 transition hover:border-orange-500/70 hover:bg-gray-950 sm:grid-cols-[110px_1fr]"
            >
              <div>
                <p className="text-3xl font-black text-gray-700 group-hover:text-orange-500">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <time className="mt-3 block text-sm text-gray-500" dateTime={post.date}>
                  {formatDate(post.date, siteMetadata.locale)}
                </time>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold tracking-tight text-white">
                  <Link href={`/blog/${post.slug}`} className="hover:text-orange-300">
                    {post.title}
                  </Link>
                </h3>
                <div className="mt-3 flex flex-wrap">
                  {post.tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
                {post.summary && (
                  <p className="mt-4 max-w-3xl text-base leading-7 text-gray-400">{post.summary}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-8">
          <p className="text-sm font-bold tracking-[0.22em] text-orange-400 uppercase">
            Field Notes
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            四条主线
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {tracks.map((track) => (
            <Link
              key={track.title}
              href={track.href}
              className="group border border-gray-800 bg-black p-6 transition hover:border-orange-500 hover:bg-orange-500/5"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-sm font-bold text-orange-400">{track.eyebrow}</p>
                  <h3 className="mt-3 text-2xl font-black text-white group-hover:text-orange-200">
                    {track.title}
                  </h3>
                </div>
                <p className="text-4xl font-black text-gray-800 group-hover:text-orange-500">
                  {track.accent}
                </p>
              </div>
              <p className="mt-5 max-w-xl text-base leading-7 text-gray-400">{track.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-gray-800 pt-12">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold tracking-[0.22em] text-orange-400 uppercase">Contact</p>
            <h2 className="mt-3 text-3xl font-black text-white">找到 Vic</h2>
          </div>
          <div className="grid gap-3 text-gray-300 sm:grid-cols-2">
            <p>
              <span className="font-bold text-white">学校邮箱：</span>
              wuweizheng@mails.neu.edu.cn
            </p>
            <p>
              <span className="font-bold text-white">Gmail：</span>
              vicwu9709@gmail.com
            </p>
            <p>
              <span className="font-bold text-white">QQ邮箱：</span>
              3110766414@qq.com
            </p>
            <p>
              <span className="font-bold text-white">微信：</span>
              VicWu2007
            </p>
          </div>
        </div>
        <p className="mt-12 text-xs tracking-[0.2em] text-gray-600 uppercase">
          The structure remains. The story continues.
        </p>
      </section>
    </div>
  )
}
