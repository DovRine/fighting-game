import { setupCanvas } from '../utils/index.js'
import { animate } from './animate.js'
import { clearScreen } from './clearScreen.js'
import { start } from './start.js'
import { Fighter } from '../Fighter/index.js'


class Game {
    constructor() {
        this.width = 1024
        this.height = 576
        const [canvas, ctx] = setupCanvas({ width: this.width, height: this.height })
        this.canvas = canvas
        this.ctx = ctx
        this.lastTime = 0
        this.gravity = 0.2
        this.ground = this.height - 80
        this.fighters = [
            new Fighter({
                position: { x: 10, y: 10 },
                color: 'dodgerblue',
                game: this
            }),
            new Fighter({
                position: { x: 250, y: 120 },
                color: 'purple',
                game: this
            }),
        ]
    }
    animate = animate.bind(this)
    clearScreen = clearScreen.bind(this)
    start = start.bind(this)
}

export { Game }