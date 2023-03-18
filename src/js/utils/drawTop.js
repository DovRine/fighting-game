function drawTop() {
    const { game: { ctx }, left, right, top } = this
    ctx.strokeStyle = 'white'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(left, top)
    ctx.lineTo(right, top)
    ctx.stroke()
}
export { drawTop }