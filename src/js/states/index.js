import {
    drawBottom,
    drawCenter,
    drawTop,
    drawRight,
    drawLeft,
    setPositions,
} from "../utils/index.js"

const states = {
    IDLE: 0,
    JUMPING: 1,
    FALLING: 2,
}
class State {
    constructor({ name, fighter }) {
        this.name = name
        this.fighter = fighter
    }
}
class Idle extends State {
    constructor(fighter) {
        super({
            name: 'IDLE',
            fighter
        })
    }
    draw() {
        const { fighter } = this
        const { position: { x, y }, width: w, height: h } = fighter
        const { ctx } = fighter.game
        ctx.fillStyle = fighter.color
        ctx.fillRect(x, y, w, h)

        // draw center
        drawCenter.call(fighter)
        drawTop.call(fighter)
        drawBottom.call(fighter)
        drawRight.call(fighter)
        drawLeft.call(fighter)
    }
    update() {
        this.draw()
    }
}
class Jumping extends State {
    constructor(fighter) {
        super({ name: 'JUMPING', fighter })
    }

    draw() {
        const { fighter } = this
        const { position: { x, y }, width: w, height: h } = fighter
        const { ctx } = fighter.game
        ctx.fillStyle = 'red'
        ctx.fillRect(x, y, w, h)

        // draw center
        drawCenter.call(fighter)
        drawTop.call(fighter)
        drawBottom.call(fighter)
        drawRight.call(fighter)
        drawLeft.call(fighter)
    }
    update() {
        this.draw()
        const { fighter } = this
        // NOTE: don't destructure properties that change while jumping b/c they don't pass by reference
        const { speed, jumpHeight, game: { ground } } = fighter
        const stillJumping = fighter.top > jumpHeight
        if (stillJumping) {
            fighter.position.y -= speed * 2
        } else {
            fighter.setState(states.FALLING)
        }
        setPositions.call(fighter)

        const onTheGround = fighter.bottom >= ground
        if (onTheGround) {
            fighter.setState(states.IDLE)
        }

    }
}
class Falling extends State {
    constructor(fighter) {
        super({ name: 'FALLING', fighter })
    }
    draw() {
        const { fighter } = this
        const { position: { x, y }, width: w, height: h } = fighter
        const { ctx } = fighter.game
        ctx.fillStyle = 'green'
        ctx.fillRect(x, y, w, h)

        // draw center
        drawCenter.call(fighter)
        drawTop.call(fighter)
        drawBottom.call(fighter)
        drawRight.call(fighter)
        drawLeft.call(fighter)
    }
    update() {
        this.draw()
        const { fighter } = this
        const { game: { ground } } = fighter
        if (fighter.bottom >= ground) {
            fighter.setState(states.IDLE)
        }

    }
}
function getInitialStates(fighter) {
    // NOTE: these MUST be in the same order as in the states enum
    return [
        new Idle(fighter),
        new Jumping(fighter),
        new Falling(fighter)
    ]
}

export {
    states,
    getInitialStates
}