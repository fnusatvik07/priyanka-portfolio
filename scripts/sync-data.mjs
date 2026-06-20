/**
 * Keeps public/portfolio-data.json in sync with the canonical root file.
 * The root portfolio-data.json is the single source of truth; the site fetches
 * the copy in public/ at runtime. Run `npm run sync-data` after editing the root.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..')
const src = join(root, 'portfolio-data.json')
const dest = join(root, 'public', 'portfolio-data.json')

const raw = readFileSync(src, 'utf8')
JSON.parse(raw) // fail loudly on invalid JSON
writeFileSync(dest, raw)
console.log('✓ Synced portfolio-data.json → public/')
