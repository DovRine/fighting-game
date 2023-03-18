function stopFalling() {
    this.position.y = this.game.ground - this.height
    this.velocity.y = 0
}
export { stopFalling }