import { Idle } from "./Idle.js"
import { Jumping } from "./Jumping.js"
import { Falling } from "./Falling.js"

const states = {
    IDLE: 0,
    JUMPING: 1,
    FALLING: 2,
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