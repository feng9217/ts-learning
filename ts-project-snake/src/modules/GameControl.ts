import Food from './Food'
import ScorePanel from './ScorePanel'
import Snake from './Snake'

class GameControl {
    snake: Snake
    food: Food
    scorePanel: ScorePanel

    // 蛇的移动方向(按了什么方向按键)
    direction: string = ''

    timer: any
    // 记录游戏是否结束
    isLive: Boolean = true

    constructor () {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()

        this.init()
    }

    // 游戏初始化
    init () {
        // 绑定键盘事件
        document.addEventListener('keydown', this.keyDownHandler.bind(this))
        this.run()
    }

    // press key 时的处理方法
    keyDownHandler (event: KeyboardEvent) {
        console.log(event, event.key)
        const directionCollection = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' ']
        if (directionCollection.includes(event.key)) this.direction = event.key
        // this.direction = event.key // 不设置条件 不然按别的键都会继续走
        // console.log(this.direction)
        // 按空格触发暂停
        if (event.key === ' ') {
            this.timer = null
            return
        } else if (directionCollection.includes(event.key)) {
            // 复位后第一次先不触发游戏开启
            if (!this.isLive) {
                this.isLive = true
                this.snake.resetBody()
                this.scorePanel.resetPanel()
                this.snake.X = 0
                this.snake.Y = 0
                return
            }
            if (!this.timer) this.run()
        }
    }

    // 控制蛇移动的方法 根据direction改变蛇的位置
    // 向上 top-- 向下 top++ 向左 left-- 向右 left++
    run () {
        let X = this.snake.X
        let Y = this.snake.Y
        // console.log(X, Y)

        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                Y -= 10
                break
            case 'ArrowDown':
            case 'Down':
                Y += 10
                break
            case 'ArrowLeft':
            case 'Left':
                X -= 10
                break
            case 'ArrowRight':
            case 'Right':
                X += 10
                break
            default:
                break
        }
        // console.log(X, Y)

        this.checkGotFood(X, Y)

        // max Y = 300 / max X = 310
        if (Y > 300 || X > 310 || Y < 0 || X < 0) {
            // throw new Error('游戏结束!!')
            this.stopGame()
            return
        }
        try {
            this.snake.X = X
            this.snake.Y = Y
        } catch (error) {
            console.log(error, '游戏终止')
            this.stopGame()
        }
        // setTimeout(this.run.bind(this), 300)
        if (this.isLive) {
            this.timer = setTimeout(() => {
                this.run()
            }, 420 - (this.scorePanel.level - 1) * 30)
        }
    }

    checkGotFood (X: number, Y:number) {
        // 判断和蛇头位置是否重合
        if (X === this.food.X && Y === this.food.Y) {
            console.log('吃到食物')
            // 吃到食物后 需要刷新食物位置
            this.food.change()
            // 加分
            this.scorePanel.addScore()
            // 蛇加一节
            this.snake.addBody()
        }
    }

    stopGame () {
        this.isLive = false
        this.timer = null
        let answer = window.confirm('游戏结束!!')
        if (answer) {
            this.snake.resetBody()
            this.scorePanel.resetPanel()
            this.snake.X = 0
            this.snake.Y = 0
            this.isLive = true
        }
    }

}
export default GameControl
