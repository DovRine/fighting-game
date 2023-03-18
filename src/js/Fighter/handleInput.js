import { states } from '../states/index.js'
import { jump, move, moveLeft, moveRight } from "../utils/index.js";

function handleInput(inputType, inputValue) {
    if (inputType === 'keydown') {
        switch (inputValue) {
            case 'ArrowRight':
                this.setState(states.RUNNING)
                moveRight.call(this)
                move.call(this)
                break;
            case 'ArrowLeft':
                this.setState(states.RUNNING)
                moveLeft.call(this)
                move.call(this)
                break;
            case 'ArrowUp':
                jump.call(this)
                move.call(this)
                break;
            case ' ':
                this.setState(states.ATTACKING1)
        }
    }
    if (inputType === 'keyup') {
        switch (inputValue) {
            case 'ArrowRight':
            case 'ArrowLeft':
                this.setState(states.IDLE)
                this.velocity.x = 0
                move.call(this)
                break;
        }
    }
}
export { handleInput }