import { jump, move, moveLeft, moveRight } from "../utils/index.js";

function handleInput(inputType, inputValue) {
    if (inputType === 'keydown') {
        switch (inputValue) {
            case 'ArrowRight':
                moveRight.call(this)
                move.call(this)
                break;
            case 'ArrowLeft':
                moveLeft.call(this)
                move.call(this)
                break;
            case 'ArrowUp':
                jump.call(this)
                move.call(this)
                break;
        }
    }
    if (inputType === 'keyup') {
        switch (inputValue) {
            case 'ArrowRight':
            case 'ArrowLeft':
                this.velocity.x = 0
                move.call(this)
                break;
        }
    }
}
export { handleInput }