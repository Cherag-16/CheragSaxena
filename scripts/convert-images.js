const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const publicDir = path.join(process.cwd(), 'public')
const outDir = publicDir // overwrite by default; could change to public/webp

function walk(dir) {
  const files = fs.readdirSync(dir)
  files.forEach((file) => {
    const full = path.join(dir, file)
    const stat = fs.statSync(full)
    if (stat.isDirectory()) {
      walk(full)
    } else {
      const ext = path.extname(full).toLowerCase()
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const outPath = full.replace(ext, '.webp')
        sharp(full)
          .webp({ quality: 80 })
          .toFile(outPath)
          .then(() => console.log('Converted', full, '->', outPath))
          .catch((err) => console.error('Error converting', full, err))
      }
    }
  })
}

console.log('Starting image conversion in', publicDir)
walk(publicDir)
console.log('Conversion triggered (async).')
