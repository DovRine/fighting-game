import { State } from './State.js'

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
        super.update(deltaTime)
    }
}
export { Running }