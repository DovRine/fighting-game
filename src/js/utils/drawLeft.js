function drawLeft() {
    const { game: { ctx }, bottom, left, top } = this
    ctx.strokeStyle = 'white'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(left, top)
    ctx.lineTo(left, bottom)
    ctx.stroke()
}
export { drawLeft }