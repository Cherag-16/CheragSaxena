import { MetadataRoute } from 'next'
import projectsData from '@/data/projects.json'
import blogsData from '@/data/blogs.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cheragsaxena.vercel.app'
  const lastModified = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/skills`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/system-design`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
  ]

  const projectRoutes: MetadataRoute.Sitemap = (projectsData || []).map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  const blogRoutes: MetadataRoute.Sitemap = (blogsData || []).map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  return [...staticRoutes, ...projectRoutes, ...blogRoutes]
}

