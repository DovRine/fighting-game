import { animate } from './animate.js'
import { clearScreen } from './clearScreen.js'
import { handleInput } from './handleInput.js'
import { setupCanvas } from '../utils/index.js'
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
                position: { x: 250, y: 120 },
                color: 'purple',
                game: this
            }),
        ]
        this.keys = {
            ArrowRight: {
                pressed: false
            },
            ArrowLeft: {
                pressed: false
            },
            ArrowUp: {
                pressed: false
            },
            space: {
                pressed: false
            },
        }

        // === setup background ===
        const layer11 = new Image()

        this.backgroundLayers = []
    }
    draw() {
        const { ctx } = this
        for (const layer of this.backgroundLayers) {
            if (layer) {
                ctx.drawImage(layer, 0, 0, layer.width, layer.height, 0, 0, this.width, this.height)
            }
        }
    }
    update() {
        this.draw()
    }
    animate = animate.bind(this)
    clearScreen = clearScreen.bind(this)
    handleInput = handleInput.bind(this)
    start = start.bind(this)
}

export { Game }