import fs from 'fs'
import path from 'path'

describe('portfolio and blog content', () => {
  it('contains a featured project and the current portfolio year', () => {
    const p = path.join(process.cwd(), 'data', 'projects.json')
    const raw = fs.readFileSync(p, 'utf-8')
    const projects = JSON.parse(raw)
    expect(Array.isArray(projects)).toBe(true)
    const featured = projects.filter((x: any) => x.featured)
    expect(featured.length).toBeGreaterThan(0)
    const proj = featured[0]
    expect(proj).toHaveProperty('slug')
    expect(proj).toHaveProperty('title')
    expect(proj).toHaveProperty('shortDescription')
    expect(proj).toHaveProperty('techStack')

    const dhun = projects.find((project: any) => project.slug === 'dhun-ai')
    expect(dhun).toBeTruthy()
    expect(dhun.date || '2026').toBe('2026')
  })

  it('keeps the blog AI prompt concise', () => {
    const blogsPath = path.join(process.cwd(), 'data', 'blogs.json')
    const blogs = JSON.parse(fs.readFileSync(blogsPath, 'utf-8'))
    const article = blogs.find((post: any) => post.slug === 'patent-pending-ai-audio-dsp-architecture')
    expect(article).toBeTruthy()
    const text = String(article.content)
    const match = text.match(/role:\s*'system'\s*,\s*content:\s*'([^']+)'/m)
    expect(match).toBeTruthy()
    expect(match![1].length).toBeLessThan(220)
    expect(match![1]).toContain('Indian Classical Musicologist')
  })
})
