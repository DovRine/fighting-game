function drawAttackbox() {
    const { game: { ctx }, right, center: { x: centerX, y: centerY }, attackbox: { width: attackRange, height, color } } = this
    ctx.fillStyle = color
    // ctx.fillRect(centerX, centerY - height * 0.5 - 20, attackRange, height)
    ctx.beginPath()
    ctx.arc(centerX, centerY, attackRange, 4.712389, Math.PI / 2)
    ctx.fill()
}
export { drawAttackbox }