class Snake {
    head: HTMLElement // 蛇头
    bodies: HTMLCollection // 蛇身 包含蛇头 HTMLCollection会自动补充新元素
    element: HTMLElement

    constructor () {
        this.element = document.getElementById('snake')!
        // 蛇的第一个元素 为头
        this.head = document.querySelector('#snake > div') as HTMLElement
        // querySelectorAll 返回一个 nodeList节点列表 不会动态更新
        this.bodies = this.element.getElementsByTagName('div')
    }

    // 获取蛇的坐标(蛇头)
    get X () {
        return this.head.offsetLeft
    }
    get Y () {
        return this.head.offsetTop
    }

    set X (value: number) {
        this.head.style.left = value + 'px'
    }
    set Y (value: number) {
        this.head.style.top = value + 'px'
    }

    // 增加身体长度(吃食后) 往#snake添加元素
    addBody () {
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }
}
export default Snake