class State {
    constructor({ name, fighter, fps }) {
        this.name = name
        this.fighter = fighter
        this.fps = fps
        this.frameInterval = 1000 / this.fps
        this.frameTimer = 0
        this.frames = 0
    }

    draw() {
        const { fighter } = this

        const {
            sprites: {
                image,
                frame,
                states: { [this.name.toLowerCase()]: { row } }
            },
            scale,
            position,
            center,
            game: { ctx }
        } = fighter

        const crop = {
            x: frame.current * frame.width,
            y: row * frame.height,
            w: frame.width,
            h: frame.height,
        }
        const destination = {
            x: center.x - frame.width / 2 * scale,
            y: position.y - frame.height * scale + frame.height,
            w: frame.width * scale,
            h: frame.height * scale
        }

        ctx.drawImage(
            image,
            crop.x,
            crop.y,
            crop.w,
            crop.h,
            destination.x,
            destination.y,
            destination.w,
            destination.h
        )
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