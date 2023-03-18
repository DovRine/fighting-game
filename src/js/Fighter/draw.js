import { drawBottom, drawCenter, drawTop, drawRight, drawLeft } from '../utils/index.js'

function draw() {
    const { position: { x, y }, width: w, height: h } = this
    const { ctx } = this.game
    ctx.fillStyle = this.color
    ctx.fillRect(x, y, w, h)

    // draw center
    drawCenter.call(this)
    drawTop.call(this)
    drawBottom.call(this)
    drawRight.call(this)
    drawLeft.call(this)

}
export { draw }