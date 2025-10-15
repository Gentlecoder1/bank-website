import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const root = path.resolve(__dirname, '..')
const src = path.join(root, 'src')
const assetsDir = path.join(src, 'assets')

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) files.push(...await walk(full))
    else files.push(full)
  }
  return files
}

async function main() {
  const assetFiles = (await walk(assetsDir)).map(f => path.relative(assetsDir, f))
  const jsFiles = (await walk(src)).filter(f => /\.(jsx?|tsx?)$/.test(f))

  const mismatches = []

  for (const file of jsFiles) {
    const content = await fs.readFile(file, 'utf8')
    const re = /\.\.\/assets\/([\w@%()\-., !\[\]]+\.[a-zA-Z0-9]+)/g
    let m
    while ((m = re.exec(content)) !== null) {
      const imp = m[1]
      const found = assetFiles.find(a => a.toLowerCase() === imp.toLowerCase())
      if (found && found !== imp) {
        mismatches.push({file: path.relative(root, file), importPath: imp, actual: found})
      } else if (!found) {
        mismatches.push({file: path.relative(root, file), importPath: imp, actual: null})
      }
    }
  }

  if (mismatches.length === 0) {
    console.log('No mismatches found')
    return
  }

  console.log('Mismatches:')
  for (const mm of mismatches) console.log(JSON.stringify(mm))
}

main().catch(err => { console.error(err); process.exit(1) })
