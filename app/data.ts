type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Obtener Regalo Oculto',
    description:
      'Descubre cómo obtener los regalos ocultos en osmyreal.com.',
    link: 'https://soporte.osmyreal.com/osmy-accounts/como-obtener-una-cuenta-gratis',
    video:
      'https://media.tenor.com/3ly096l8zfcAAAPo/minecraft.mp4',
    id: 'project1',
  },
  {
    name: 'Como Usar las Osmy Accounts',
    description: 'Visita nuestra guía y aprende todo sobre las cuentas.',
    link: 'https://soporte.osmyreal.com/osmy-accounts/como-iniciar-sesion',
    video:
      'https://media.tenor.com/yJyT6EbqcNYAAAPo/minecrat-minecraft.mp4',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Compra el OsmyPass y disfruta',
    title: 'Obtener Cuenta Exclusiva',
    start: 'Por',
    end: '4,99€',
    link: 'https://whop.com/osmyreal/',
    id: 'work1',
  },
  {
    company: '¡Nuevas cuentas disponibles!',
    title: 'Recibe Avisos en Telegram',
    start: 'Por',
    end: '0,00€',
    link: 'https://t.me/OsmyReal',
    id: 'work2',
  },
  {
    company: '¡Únete y participa! ',
    title: 'Comunidad en Discord',
    start: 'Por',
    end: '0,00€',
    link: 'https://ibelick.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Minecraft: Tricky Trials – Una Aventura Llena de Retos',
    description: '¡Hay regalos disponibles dentro!',
    link: '/blog/minecraft-tricky-trials',
    uid: 'blog-1',
  },
  {
    title: 'Grand Theft Auto VI: Todo lo que sabemos hasta ahora',
    description:
      '¡Una sorpresa te espera al final!',
    link: '/blog/gta-vi-lanzamiento',
    uid: 'blog-2',
  },
  {
    title: 'Top Juegos Más Jugados de la App Store',
    description:
      '¡Consigue tu regalo antes de que se agoten!',
    link: '/blog/top-juegos-app-store',
    uid: 'blog-3',
  },
    {
    title: '¡Una Versión de Prueba Gratuita Lanzada por Mojang!',
    description:
      '¡Tus recompensas te están esperando!',
    link: '/blog/minecraft-regalo-beta',
    uid: 'blog-4',
  },
    {
    title: 'Descubre los Juegos de Mesa Tradicionales',
    description:
      '¡Nuevas sorpresas te esperan!',
    link: '/blog/juegos-de-mesa-tradicionales',
    uid: 'blog-5',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'YouTube',
    link: 'https://www.youtube.com/@OsmyReal',
  },
  {
    label: 'Telegram',
    link: 'https://t.me/OsmyReal',
  },
  {
    label: 'Discord',
    link: 'https://www.linkedin.com/in/ibelick',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/osmyreal',
  },
]

export const EMAIL = 'contacto@osmyreal.com'
