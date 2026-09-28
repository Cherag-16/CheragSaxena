const fs = require('fs')
const path = require('path')

const projectsPath = path.join(process.cwd(), 'data', 'projects.json')
const outDir = path.join(process.cwd(), 'generated-readmes')

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir)

const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf-8'))

projects.forEach((p) => {
  const md = `# ${p.title}

${p.shortDescription}

## Problem

${p.problem}

## Role

${p.role}

## Tech Stack

${p.techStack.join(', ')}

## Key Challenges

${p.challenges.map((c) => `- ${c}`).join('\n')}

## Solution

${p.solution || ''}

## Demo & Repo

- Demo: ${p.demo || 'N/A'}
- Repo: ${p.repo || 'N/A'}
`
  const fileName = `${p.slug || p.title.replace(/\s+/g, '-').toLowerCase()}-README.md`
  fs.writeFileSync(path.join(outDir, fileName), md)
  console.log('Generated', fileName)
})
