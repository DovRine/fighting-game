function drawAttackbox() {
    const { game: { ctx }, right, center: { x: centerX, y: centerY }, attackbox: { width: attackRange, height, color } } = this
    const _270DegreesInRadians = 4.712389
    const _90DegreesInRadians = Math.PI / 2
    ctx.fillStyle = color
    // ctx.fillRect(centerX, centerY - height * 0.5 - 20, attackRange, height)
    ctx.beginPath()
    ctx.arc(centerX, centerY, attackRange, _270DegreesInRadians, _90DegreesInRadians)
    ctx.fill()
}
export { drawAttackbox }