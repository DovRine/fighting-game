import { setCenterPosition, setPositions } from '../utils/index.js'
import { states, getInitialStates } from '../states/index.js'

import { handleInput } from './handleInput.js'
import { setState } from './setState.js'
import { update } from './update.js'

class Fighter {
    constructor({
        game,
        position = { x: 0, y: 0 },
        speed = 10,
        /*NOTE: jumpHeight is inversely proportional to position.y
          *      so, the lower the number, the higher the jump.
          */
        jumpHeight = 100
    }) {
        this.game = game
        this.position = position
        this.velocity = {
            x: 0,
            y: 0
        }
        this.scale = 2
        this.speed = speed
        this.jumpHeight = jumpHeight
        this.states = getInitialStates(this)
        this.currentState = this.states[states.IDLE]
        setPositions.call(this)
        this.attackbox = {
            width: 100,
            height: 20,
            color: 'red'
        }
        // --- sprite setup ---
        const rows = 14
        const framesPerRow = 28
        const image = new Image()
        image.src = 'img/fireKnight.png'
        image.onload = () => {
            this.sprites = {
                image,
                frame: {
                    height: image.height / rows,
                    width: image.width / framesPerRow,
                    current: 0,
                },
                states: {
                    idle: { frames: 8, row: 0 },
                    running: { frames: 8, row: 1 },
                    jumping: { frames: 3, row: 2 },
                    falling: { frames: 3, row: 3 },
                }
            }
            this.width = this.sprites.frame.width
            this.height = this.sprites.frame.height
        }
    }
    handleInput = handleInput.bind(this)
    setCenterPosition = setCenterPosition.bind(this)
    setState = setState.bind(this)
    update = update.bind(this)
}
export { Fighter }