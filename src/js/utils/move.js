function stop() {
    this.velocity.x = 0
    move.call(this)
}
function move() {
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
}

export { move, stop }