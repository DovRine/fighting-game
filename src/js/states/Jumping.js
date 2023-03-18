import {
    drawBottom,
    drawCenter,
    drawTop,
    drawRight,
    drawLeft,
    setPositions,
} from "../utils/index.js"
import { State } from './State.js'
import { states } from "./index.js"

class Jumping extends State {
    constructor(fighter) {
        super({ name: 'JUMPING', fighter })
    }

    draw() {
        const { fighter } = this
        const { position: { x, y }, width: w, height: h } = fighter
        const { ctx } = fighter.game
        ctx.fillStyle = 'red'
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
        // NOTE: don't destructure properties that change while jumping b/c they don't pass by reference
        const { speed, jumpHeight, game: { ground } } = fighter
        const stillJumping = fighter.top > jumpHeight
        if (stillJumping) {
            fighter.position.y -= speed * 2
        } else {
            fighter.setState(states.FALLING)
        }
        setPositions.call(fighter)

        const onTheGround = fighter.bottom >= ground
        if (onTheGround) {
            fighter.setState(states.IDLE)
        }

    }
}
export { Jumping }