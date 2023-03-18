function setupCanvas({ width, height }) {
    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')
    canvas.height = height
    canvas.width = width
    return [canvas, ctx]
}
export { setupCanvas }