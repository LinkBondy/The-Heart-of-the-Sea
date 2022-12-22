const { gameStates } = require('./gameStates');

export function Keydown (event) {
    gameStates.gameController.boat.Keydown(event)
}