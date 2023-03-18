class Fighter {
    constructor({
        game,
        position = { x: 0, y: 0 },
        color = 'red'
    }) {
        this.game = game
        this.position = position
        this.width = 100
        this.height = 100
        this.color = color
    }

    draw() {
        const { position: { x, y }, width: w, height: h } = this
        const { ctx } = this.game
        ctx.fillStyle = this.color
        ctx.fillRect(x, y, w, h)
    }
    update() {
        this.draw()
        this.position.x += 1
    }
}
export { Fighter }