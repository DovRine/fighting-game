import { drawAttackbox } from "../utils/index.js"
import { State } from './State.js'
import { states } from '../states/index.js'

class Attacking1 extends State {
    constructor(fighter) {
        super({ name: 'ATTACKING1', fighter, fps: 17 })
    }
    draw() {
        drawAttackbox.call(this.fighter)
        super.draw()
        
    }
    update(deltaTime) {
        this.draw()
        const { fighter } = this
        super.update(deltaTime, {
            drawOnce: true,
            callback: () => fighter.setState(states.IDLE)
        })
    }
}

export { Attacking1 }