
function animate(timestamp) {
    window.requestAnimationFrame(this.animate.bind(this))
    // const deltaTime = this.lastTime - timestamp
    this.lastTime = timestamp
    this.clearScreen()

    for (const fighter of this.fighters) {
        fighter.update()
    }
}

export { animate }