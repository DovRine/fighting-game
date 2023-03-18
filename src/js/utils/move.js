import { states } from "../states/index.js"

function jump(){
    this.setState(states.JUMPING)
}
function moveLeft() {
    this.velocity.x = -this.speed
    move.call(this)
}
function moveRight() {
    this.velocity.x = this.speed
    move.call(this)
}

function move() {
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
}

export { jump, move, moveLeft, moveRight }