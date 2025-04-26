import fs from 'fs'
import path from 'path'
import zlib from 'zlib'

/**
 * Parse a glob-like pattern into baseDir and allowed extensions
 *
 */
function parsePattern(pattern) {
    const parts = pattern.split('/**/')
    const baseDir = parts[0]
    const extsMatch = parts[1]?.match(/\{(.+)\}/)
    const exts = extsMatch ? extsMatch[1].split(',').map(e => '.' + e.trim()) : []
    return { baseDir, exts }
}

/**
 * Match file extension
 */
function matchExtension(file, exts) {
    if (exts.length === 0) return true
    const ext = path.extname(file).toLowerCase()
    return exts.includes(ext)
}

/**
 * Format human readable file size
 */
function formatSize(bytes) {
    return (bytes / 1024).toFixed(2) + ' kB'
}

/**
 * Recursively copy files and collect relative paths
 */
function copyRecursiveSync(src, dest, exts, fileList, baseDest) {
    const stats = fs.statSync(src)

    if (stats.isDirectory()) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true })
        }

        const items = fs.readdirSync(src)
        for (const item of items) {
            const srcItem = path.join(src, item)
            const destItem = path.join(dest, item)
            copyRecursiveSync(srcItem, destItem, exts, fileList, baseDest)
        }
    } else if (stats.isFile()) {
        if (matchExtension(src, exts)) {
            const destDir = path.dirname(dest)
            if (!fs.existsSync(destDir)) {
                fs.mkdirSync(destDir, { recursive: true })
            }
            fs.copyFileSync(src, dest)
            const relative = path.relative(baseDest, dest).replace(/\\/g, '/')
            fileList.push(relative)
        }
    }
}

/**
 * Vite Plugin: Native Copy based on simple glob-like patterns
 * @param {Array<string>} patterns
 * @param {{ destination?: string }} options
 */
export function viteCopyPlugin(patterns = [], options = {}) {
    const destination = options.destination || 'dist'

    return {
        name: 'vite-native-glob-copy-plugin',
        apply: 'build',
        async writeBundle() {
            console.log(`📦 [vite-copy] Starting to copy static assets to "${destination}"...`)

            const copiedFiles = []

            for (const pattern of patterns) {
                const { baseDir, exts } = parsePattern(pattern)
                const srcRoot = path.resolve(baseDir)
                const destRoot = path.resolve(destination, baseDir)

                if (!fs.existsSync(srcRoot)) {
                    console.warn(`⚠️ [vite-copy] Source directory does not exist: ${srcRoot}`)
                    continue
                }

                copyRecursiveSync(srcRoot, destRoot, exts, copiedFiles, path.resolve(destination))
            }

            // 打印结果
            console.log('')
            console.log(`📜 Copied Files:`)

            const longestNameLength = copiedFiles.reduce((max, file) => Math.max(max, file.length), 0)

            for (const relative of copiedFiles) {
                const fullPath = path.resolve(destination, relative)
                const fileBuffer = fs.readFileSync(fullPath)
                const size = formatSize(fileBuffer.length)
                const gzipSize = formatSize(zlib.gzipSync(fileBuffer).length)

                const padding = ' '.repeat(longestNameLength - relative.length + 2)
                console.log(`${destination}/${relative}${padding}${size} │ gzip: ${gzipSize}`)
            }

            console.log('')
            console.log('🎉 [vite-copy] Static assets copying completed successfully!')
        },
    }
}
