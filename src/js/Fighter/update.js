import { applyGravity } from "../utils/index.js"

function update(deltaTime) {
    this.currentState.update(deltaTime)
    applyGravity.call(this)

}
export { update }