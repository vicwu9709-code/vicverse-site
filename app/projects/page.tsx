import Link from '@/components/Link'
import Image from '@/components/Image'
import projectsData from '@/data/projectsData'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: '专题' })

export default function Projects() {
  return (
    <div className="space-y-14 pb-10">
      <section className="border-b border-gray-800 pt-6 pb-10">
        <p className="text-sm font-bold tracking-[0.22em] text-orange-400 uppercase">Projects</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">专题地图</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          这里不是作品陈列柜，而是 Vicverse
          的四条长期路线。每个专题都会聚合对应日志，保留从混乱到结构的过程。
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {projectsData.map((project, index) => (
          <Link
            key={project.title}
            href={project.href}
            className="group overflow-hidden border border-gray-800 bg-black transition hover:border-orange-500"
          >
            <div className="relative h-56 overflow-hidden bg-gray-900">
              <Image
                src={project.imgSrc}
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-black/35" />
              <p className="absolute top-5 right-5 text-5xl font-black text-white/20">
                {String(index + 1).padStart(2, '0')}
              </p>
            </div>
            <div className="p-6">
              <p className="text-sm font-bold text-orange-400">{project.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-black text-white group-hover:text-orange-200">
                {project.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-400">{project.description}</p>
              <p className="mt-6 text-sm font-bold text-orange-400">进入专题 &rarr;</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}
