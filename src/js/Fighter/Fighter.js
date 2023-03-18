import { setCenterPosition } from '../utils/index.js'
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
        this.width = 100
        this.height = 100
        this.color = color
        this.top = this.position.y
        this.right = this.position.x + this.width
        this.left =
        this.bottom = this.position.x + this.height
        this.setCenterPosition()
    }
    draw = draw.bind(this)
    setCenterPosition = setCenterPosition.bind(this)
    update = update.bind(this)
}
export { Fighter }