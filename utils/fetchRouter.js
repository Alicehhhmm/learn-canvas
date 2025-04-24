/**
 * 获取路由列表
 * @description 通过 fetch 获取路由列表
 * @param {*} path 路由路径
 * @example fetchRouter('docs/routes.json')
 * @returns
 */
export const fetchRouter = async path => {
    if (!path) return 'not found path'

    const list = await (await fetch(path)).json()

    return list
}
