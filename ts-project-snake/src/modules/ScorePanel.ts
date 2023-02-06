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

// const scorePanel = new ScorePanel()
// scorePanel.addScore()
// scorePanel.levelUp()

export default ScorePanel