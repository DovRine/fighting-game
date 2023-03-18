import {
    drawBottom,
    drawCenter,
    drawTop,
    drawRight,
    drawLeft,
} from "../utils/index.js"
import {State} from './State.js'

class Idle extends State {
    constructor(fighter) {
        super({
            name: 'IDLE',
            fighter
        })
    }
    draw() {
        const { fighter } = this
        const { position: { x, y }, width: w, height: h } = fighter
        const { ctx } = fighter.game
        ctx.fillStyle = fighter.color
        ctx.fillRect(x, y, w, h)

        // draw center
        drawCenter.call(fighter)
        drawTop.call(fighter)
        drawBottom.call(fighter)
        drawRight.call(fighter)
        drawLeft.call(fighter)
    }
    update() {
        this.draw()
    }
}
export { Idle }