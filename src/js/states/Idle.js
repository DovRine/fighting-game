import {
    drawBottom,
    drawCenter,
    drawTop,
    drawRight,
    drawLeft,
} from "../utils/index.js"
import { State } from './State.js'

class Idle extends State {
    constructor(fighter) {
        super({
            name: 'IDLE',
            fighter
        })
        this.fps = 15
        this.frameInterval = 1000 / this.fps
        this.frameTimer = 0
    }
    draw() {
        const { fighter } = this

        const {
            sprites: {
                image,
                frame,
                states: { idle: { row } }
            },
            position,
            center,
            game: { ctx }
        } = fighter

        const crop = {
            x: frame.current * frame.width,
            y: frame.height + row * frame.height,
            w: frame.width,
            h: frame.height,
        }
        const scale = 2
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

        this.draw()
        this.frameTimer += deltaTime

        if (this.frameTimer >= this.frameInterval) {
            const { sprites: { states: { idle: { frames } } } } = fighter
            fighter.sprites.frame.current++
            if (fighter.sprites.frame.current >= frames) {
                fighter.sprites.frame.current = 0
            }
            this.frameTimer = 0
        }
    }
}
export { Idle }