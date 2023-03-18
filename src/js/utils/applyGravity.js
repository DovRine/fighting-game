import { setPositions as updateObjectPosition } from "./setPositions.js"
import { stopFalling } from "./stopFalling.js"

function applyGravity() {
    const {
        game: { gravity, ground },
        position,
        velocity,
        bottom: bottomOfObject
    } = this

    velocity.y += gravity

    // NOTE: this is greater than b/c the ground is at max(y)
    const onTheGround = bottomOfObject >= ground

    if (onTheGround) {
        stopFalling.call(this)
    }

    position.y += velocity.y

    updateObjectPosition.call(this)
}
export { applyGravity }