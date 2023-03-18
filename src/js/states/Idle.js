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
            fighter,
            fps: 15,
        })
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
            y: row * frame.height,
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
        if (!this.fighter.sprites) return
        this.draw()
        super.update(deltaTime)
    }
}
export { Idle }