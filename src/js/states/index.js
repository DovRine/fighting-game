import { Idle } from "./Idle.js"
import { Jumping } from "./Jumping.js"
import { Falling } from "./Falling.js"
import { Attacking1 } from './Attacking1.js'
import { Running } from './Running.js'

const states = {
    IDLE: 0,
    JUMPING: 1,
    FALLING: 2,
    ATTACKING1: 3,
    RUNNING: 4,
}

function getInitialStates(fighter) {
    // NOTE: these MUST be in the same order as in the states enum
    return [
        new Idle(fighter),
        new Jumping(fighter),
        new Falling(fighter),
        new Attacking1(fighter),
        new Running(fighter),
    ]
}

export {
    states,
    getInitialStates
}