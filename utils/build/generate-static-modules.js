import fg from 'fast-glob'
import path from 'path'

function getMultiTypeInputs() {
    const files = fg.sync(['examples/**/*.{html,js,css}', 'manual/**/*.{html,js,css}', 'styles/**', 'index.html'], {
        cwd: path.resolve(), // 项目根目录
        ignore: ['**/node_modules/**', '**/dist/**'],
    })

    const inputs = {}

    files.forEach(file => {
        const name = file.replace(/\.[^.]+$/, '') // 去掉文件扩展名
        inputs[name] = path.resolve(file)
    })

    return inputs
}

export { getMultiTypeInputs }
