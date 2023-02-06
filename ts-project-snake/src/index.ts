import './style/index.less'

/**
 * 食物类
 */
class Food {
    // 定义一个属性表示食物所应对的元素
    element: HTMLElement

    constructor () {
        // 获取页面中的food元素并赋值给element
        this.element = document.getElementById('food')! // 有可能为空 可以强制断言 加 ! 即表示不可能为空
    }

    // 定义获取食物坐标的方法
    get X () {
        return this.element.offsetLeft
    }
    get Y () {
        return this.element.offsetTop
    }

    // 修改食物的位置 随机生成
    change () {
        const left = Math.floor( Math.random() * 29 ) * 10 // 保证获得整10(蛇的宽)的倍数
        const top = Math.floor( Math.random() * 31 ) * 10 // 保证获得整10(蛇的宽)的倍数
        this.element.style.left = left + 'px'
        this.element.style.top = top + 'px'
    }
}

const food = new Food()
console.log(food.X, food.Y, 'food的x y坐标')
food.change()

/**
 * 计分牌类
 */
class ScorePanel {
    // 用来记录分数
    score: number = 0
    // 用来记录等级
    level: number = 1
    scoreEle: HTMLElement
    levelEle: HTMLElement

    // 控制游戏变量
    maxLevel: number
    upScore: number

    constructor (maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    // 加分
    addScore () {
        this.score++
        this.scoreEle.innerHTML = 'SCORE:' + this.score
        // 分数够了就能升一级
        if (this.score % this.upScore === 0) this.levelUp()
    }

    // 等级提升
    levelUp () {
        if (this.level < this.maxLevel) this.levelEle.innerHTML = 'LEVEL:' + ++this.level
    }
}

const scorePanel = new ScorePanel()
scorePanel.addScore()
scorePanel.levelUp()