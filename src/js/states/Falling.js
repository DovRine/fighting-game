import { State } from './State.js'
import { states } from "./index.js"

class Falling extends State {
    constructor(fighter) {
        super({ name: 'FALLING', fighter, fps: 15 })
    }
    draw() {
        super.draw()
    }
    update(deltaTime) {
        this.draw()
        super.update(deltaTime)
        const { fighter } = this
        const { game: { ground } } = fighter

        const onTheGround = fighter.bottom >= ground
        if (onTheGround) {
            fighter.setState(states.IDLE)
        }

    }
}
export { Falling }