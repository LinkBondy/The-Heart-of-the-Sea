const { Boat } = require('./boat')
const { Backround } = require('./backround')

export class GameController {
    constructor() {
        this.boat = new Boat();
        this.backround = new Backround();
    }

    Draw() {
        this.backround.Draw()
        this.boat.Draw()
    }

    Update() {
        this.boat.Update()
    }
}