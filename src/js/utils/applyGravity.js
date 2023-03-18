import { setPositions as updateObjectPosition } from "./setPositions.js"
import { stopFalling } from "./stopFalling.js"

function applyGravity() {
    const { game: { gravity, ground }, position, velocity, bottom: bottomOfObject } = this
    velocity.y += gravity
    if (bottomOfObject >= ground) {
        stopFalling.call(this)
    }
    position.y += velocity.y
    updateObjectPosition.call(this)
}
export { applyGravity }