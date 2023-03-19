import { State } from './State.js'

class Idle extends State {
    constructor(fighter) {
        super({
            name: 'IDLE',
            fighter,
            fps: 15,
        })
    }
    draw() {
        super.draw()
    }
    update(deltaTime) {
        // NOTE: it takes a second for the sprites to load
        if (!this.fighter.sprites) return
        this.draw()
        super.update(deltaTime)
    }
}
export { Idle }