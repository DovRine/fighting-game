import { applyGravity } from "../utils/index.js"

function update() {
    this.draw()
    applyGravity.call(this)

}
export { update }