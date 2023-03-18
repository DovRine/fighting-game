function drawAttackbox() {
    const { game: { ctx }, right, center: { y: centerY }, attackbox: { width: attackRange, height, color } } = this
    ctx.fillStyle = color
    ctx.fillRect(right, centerY - height * 0.5, attackRange, height)
}
export { drawAttackbox }