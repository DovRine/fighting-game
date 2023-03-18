function clearScreen() {
    this.ctx.fillStyle = 'black'
    this.ctx.clearRect(0, 0, this.width, this.height)
}

export { clearScreen }