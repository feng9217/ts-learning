// 设计类尽量遵循单一职责原则
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
        if (this.X === value) return
        // 也可以在此处做X/Y值判断 超出边界则
        // if (value < 0 || value > 300) throw new Error('蛇撞墙了!')
        // 移动身体
        this.moveBody()

        this.head.style.left = value + 'px'
    }
    set Y (value: number) {
        if (this.Y === value) return
        // 也可以在此处做X/Y值判断 超出边界则
        // if (value < 0 || value > 310) throw new Error('蛇撞墙了!')
        // 移动身体
        this.moveBody()

        this.head.style.top = value + 'px'
    }

    // 增加身体长度(吃食后) 往#snake添加元素
    addBody () {
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }
    // 添加身体长度后还需要身体移动
    // 蛇头去新位置 后一节去上一节位置
    moveBody () {
        // i = 0 就改到头了
        for(let i = this.bodies.length - 1; i > 0; i--) {
            // 获取前边身体的位置
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            // 将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }
}
export default Snake