function setupEventHandlers(game) {
    function keyDownHandler(e) {
        game.handleInput('keydown', e.key)
    }
    function keyUpHandler(e) {
        game.handleInput('keyup', e.key)
    }
    const handlers = {
        keydown: keyDownHandler,
        keyup: keyUpHandler
    }
    for (const [eventType, handler] of Object.entries(handlers)) {
        window.addEventListener(eventType, handler)
    }
}

export { setupEventHandlers }