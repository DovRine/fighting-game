function drawBottom() {
    const { game: { ctx }, left, right, bottom } = this
    ctx.strokeStyle = 'white'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(left, bottom)
    ctx.lineTo(right, bottom)
    ctx.stroke()
}
export { drawBottom }