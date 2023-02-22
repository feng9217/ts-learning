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

        // 做方向判断 不能让蛇调头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            // console.log('发生水平调头')
            // 修正调头
            // 新值大于旧X值 则说明在向右走 此时发生调头 则应该使蛇继续向左走
            if (value > this.X) {
                value = this.X - 10
            } else {
                value = this.X + 10
            }
        }

        // 移动身体
        this.moveBody()

        this.head.style.left = value + 'px'

        this.checkHitBody()
    }
    set Y (value: number) {
        if (this.Y === value) return
        // 也可以在此处做X/Y值判断 超出边界则
        // if (value < 0 || value > 310) throw new Error('蛇撞墙了!')

        // 做方向判断 不能让蛇调头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            // console.log('发生水平调头')
            // 修正调头
            if (value > this.Y) {
                value = this.Y - 10
            } else {
                value = this.Y + 10
            }
        }

        // 移动身体
        this.moveBody()

        this.head.style.top = value + 'px'

        this.checkHitBody()
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
    // 检查是否咬到自己
    checkHitBody () {
        // 从身体开始遍历 检查是否和蛇头(i = 0)的位置是否重叠
        for (let i = 1; i < this.bodies.length; i++) {
            let body = (this.bodies[i] as HTMLElement);
            if (this.X === body.offsetLeft && this.Y === body.offsetTop) {
                // 撞到自己 游戏结束
                throw new Error('撞到自己了')
            }
        }
    }
    // 重置游戏时重置身体长度
    resetBody () {
        // 留个头
        while (this.element.lastChild && this.bodies.length > 1) {
            this.element.removeChild(this.element.lastChild)
        }
    }
}
export default Snake