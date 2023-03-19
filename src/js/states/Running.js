import { State } from './State.js'
import { move } from '../utils/index.js'

class Running extends State {
    constructor(fighter) {
        super({
            name: 'RUNNING',
            fighter,
            fps: 15
        })
    }
    draw() {
        super.draw()
    }
    update(deltaTime) {
        this.draw()
        const { fighter: { game: { keys: { ArrowRight, ArrowLeft } }, velocity, speed } } = this
        if (ArrowRight.pressed) {
            velocity.x = speed
        } else if (ArrowLeft.pressed) {
            velocity.x = -speed
        }
        move.call(this.fighter)
        super.update(deltaTime)
    }
}
export { Running }