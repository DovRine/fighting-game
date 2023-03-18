import { drawAttackbox, drawCenter, drawTop, drawBottom, drawRight, drawLeft } from "../utils/index.js"
import { State } from './State.js'
import { states } from '../states/index.js'

class Attacking1 extends State {
    constructor(fighter) {
        super({ name: 'ATTACKING1', fighter })
        this.attackDuration = 200
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

        drawAttackbox.call(this.fighter)
        setTimeout(() => {
            fighter.setState(states.IDLE)
        }, this.attackDuration)
    }
    update() {
        this.draw()
    }
}

export { Attacking1 }