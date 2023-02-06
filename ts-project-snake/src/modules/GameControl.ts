import Food from './Food'
import ScorePanel from './ScorePanel'
import Snake from './Snake'

class GameControl {
    snake: Snake
    food: Food
    scorePanel: ScorePanel

    // 蛇的移动方向(按了什么方向按键)
    direction: string = ''

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
    }

    // press key 时的
    keyDownHandler (event: KeyboardEvent) {
        // console.log(event, event.key)
        const directionCollection = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
        if (directionCollection.includes(event.key)) this.direction = event.key
        console.log(this, this.direction)
    }
}
export default GameControl
