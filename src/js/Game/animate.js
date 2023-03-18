
function animate(timestamp) {
    window.requestAnimationFrame(this.animate.bind(this))
    const deltaTime = timestamp - this.lastTime
    this.lastTime = timestamp
    this.clearScreen()

    for (const fighter of this.fighters) {
        fighter.update(deltaTime)
    }
}

export { animate }