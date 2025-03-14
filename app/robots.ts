import type { MetadataRoute } from 'next'
import { WEBSITE_URL } from '@/lib/constants'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/ads.txt'],
      disallow: '/private/',
    },
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  }
}
