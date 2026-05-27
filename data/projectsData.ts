interface Project {
  title: string
  eyebrow: string
  description: string
  href: string
  imgSrc: string
  tag: string
}

const projectsData: Project[] = [
  {
    title: '水下机器人',
    eyebrow: 'Underwater Robotics',
    description: 'Vicverse 的主线。整理水下机器人结构、推进、控制、传感和任务场景的学习记录。',
    imgSrc: '/static/images/ocean.jpeg',
    href: '/projects/underwater',
    tag: 'underwater',
  },
  {
    title: '游戏思考',
    eyebrow: 'Game Reflections',
    description: '记录竞技体验、机制理解、状态管理和玩家反馈，把游戏变成可复盘的观察对象。',
    imgSrc: '/static/images/avatar.jpg',
    href: '/projects/game',
    tag: 'game',
  },
  {
    title: '音乐分析',
    eyebrow: 'Music Analysis',
    description: '分析音乐、歌词和情绪结构，保存作品给人的冲击与背后的表达方式。',
    imgSrc: '/static/images/canada/lake.jpg',
    href: '/projects/music',
    tag: 'music',
  },
  {
    title: '换血记录',
    eyebrow: 'Vicverse Updates',
    description: '记录本站的重构、部署、内容系统、命名规则和每一次版本转向。',
    imgSrc: '/static/images/logo.png',
    href: '/projects/bloodchange',
    tag: 'vicverse',
  },
]

export default projectsData
