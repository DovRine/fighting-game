import {
    drawBottom,
    drawCenter,
    drawTop,
    drawRight,
    drawLeft,
} from "../utils/index.js"
import { State } from './State.js'
import { states } from "./index.js"

class Falling extends State {
    constructor(fighter) {
        super({ name: 'FALLING', fighter })
    }
    draw() {
        const { fighter } = this
        const { position: { x, y }, width: w, height: h } = fighter
        const { ctx } = fighter.game
        ctx.fillStyle = 'green'
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

        const { fighter } = this
        const { game: { ground } } = fighter

        const onTheGround = fighter.bottom >= ground
        if (onTheGround) {
            fighter.setState(states.IDLE)
        }

    }
}
export { Falling }