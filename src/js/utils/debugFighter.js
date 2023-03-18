function debugFighter(marker = '', fighter) {
    const { game: { ground }, top, bottom, position, speed, jumpHeight } = fighter
    // we need to gently increase position.y to jumpHeight
    // then let fighter fall down again with gravity
    console.log(marker, JSON.stringify({
        y: position.y,
        // speed,
        bottom,
        top,
        // jumpHeight,
        // ground,
    }))
}
export { debugFighter }