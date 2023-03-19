import { states } from '../states/index.js'

function handleInput(inputType, inputValue) {
    if (inputType === 'keydown') {
        switch (inputValue) {
            case 'ArrowRight':
                this.game.keys.ArrowRight.pressed = true
                this.setState(states.RUNNING)
                break;
            case 'ArrowLeft':
                this.game.keys.ArrowLeft.pressed = true
                this.setState(states.RUNNING)
                break;
            case 'ArrowUp':
                this.game.keys.ArrowUp.pressed = true
                this.setState(states.JUMPING)
                break;
            case ' ':
                this.game.keys.space.pressed = true
                this.setState(states.ATTACKING1)
                break
        }
    }
    if (inputType === 'keyup') {
        switch (inputValue) {
            case 'ArrowRight':
                this.game.keys.ArrowRight.pressed = false
                this.setState(states.IDLE)
                break;
            case 'ArrowLeft':
                this.game.keys.ArrowLeft.pressed = false
                this.setState(states.IDLE)
                break;
        }
    }
}
export { handleInput }