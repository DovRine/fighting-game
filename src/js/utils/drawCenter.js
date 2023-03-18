function drawCenter() {
    const { game: { ctx }, center: { x, y } } = this
    const radius = 5
    const startAngle = 0
    const endAngle = Math.PI * 2
    ctx.fillStyle = 'white'
    ctx.beginPath()
    ctx.arc(x, y, radius, startAngle, endAngle)
    ctx.fill()
}
export { drawCenter }