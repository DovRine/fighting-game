import { setCenterPosition, setPositions } from '../utils/index.js'
import { draw } from './draw.js'
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
        setPositions.call(this)
    }
    draw = draw.bind(this)
    setCenterPosition = setCenterPosition.bind(this)
    update = update.bind(this)
}
export { Fighter }