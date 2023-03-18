function drawRight() {
    const { game: { ctx }, bottom, right, top } = this
    ctx.strokeStyle = 'white'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(right, top)
    ctx.lineTo(right, bottom)
    ctx.stroke()
}
export { drawRight }