import { setCenterPosition, setPositions } from '../utils/index.js'
import { states, getInitialStates } from '../states/index.js'

import { handleInput } from './handleInput.js'
import { setState } from './setState.js'
import { update } from './update.js'

class Fighter {
    constructor({
        game,
        position = { x: 0, y: 0 },
        color = 'red'
    }) {
        this.game = game
        this.position = position
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 50
        this.height = 150
        this.color = color
        this.speed = 10
        /*NOTE: jumpHeight is inversely proportional to position.y
          *      so, the lower the number, the higher the jump.
          */
        this.jumpHeight = 100
        this.states = getInitialStates(this)
        this.currentState = this.states[states.IDLE]
        setPositions.call(this)
    }
    handleInput = handleInput.bind(this)
    setCenterPosition = setCenterPosition.bind(this)
    setState = setState.bind(this)
    update = update.bind(this)
}
export { Fighter }