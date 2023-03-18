import { Game } from "./Game/index.js"
import { setupEventHandlers } from './eventHandlers/index.js'

const game = new Game()

setupEventHandlers(game)

game.start()
