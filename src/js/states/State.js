class State {
    constructor({ name, fighter, fps }) {
        this.name = name
        this.fighter = fighter
        this.fps = fps
        this.frameInterval = 1000 / this.fps
        this.frameTimer = 0
        this.frames = 0
    }

    update(deltaTime) {
        // NOTE: it takes a second for the sprites to load
        const { fighter } = this
        if (!fighter.sprites) return

        const frames = fighter.sprites.states[this.name.toLowerCase()].frames

        this.frameTimer += deltaTime
        if (this.frameTimer >= this.frameInterval) {
            fighter.sprites.frame.current++
            if (fighter.sprites.frame.current >= frames) {
                fighter.sprites.frame.current = 0
            }
            this.frameTimer = 0
        }
    }
}
export { State }