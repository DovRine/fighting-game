import { setPositions } from "../utils/index.js"
import { State } from './State.js'
import { states } from "./index.js"

class Jumping extends State {
    constructor(fighter) {
        super({ name: 'JUMPING', fighter, fps: 15 })
    }

    draw() {
        super.draw()
    }
    update(deltaTime) {
        this.draw()
        super.update(deltaTime)
        const { fighter } = this

        // NOTE: don't destructure properties that change while jumping b/c they don't pass by reference
        const { speed, jumpHeight, game: { ground } } = fighter
        const stillJumping = fighter.top > jumpHeight
        if (stillJumping) {
            // fighter.position.y -= speed * 2
            fighter.position.y -= speed * 2
        } else {
            fighter.game.keys.space.pressed = false
            fighter.setState(states.FALLING)
        }
        setPositions.call(fighter)

        const onTheGround = fighter.bottom >= ground
        if (onTheGround) {
            fighter.game.keys.space.pressed = false
            fighter.setState(states.IDLE)
        }

    }
}
export { Jumping }