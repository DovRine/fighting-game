import { applyGravity } from "../utils/index.js"

function update() {
    this.currentState.update()
    applyGravity.call(this)

}
export { update }