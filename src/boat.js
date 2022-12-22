"use strict";
const { images } = require('./images')
const { canvas } = require('./canvas')

export class Boat {
    constructor() {
        this.x = (canvas.width - images.Boat.width) / 2
        this.y = (canvas.height - images.Boat.height) / 2
        this.width = images.Boat.width
        this.height = images.Boat.height
        this.angle = 0
        this.speed = 0
    }

    Draw() {
        canvas.context.drawImage(images.Boat, 0, 0, images.Boat.width, images.Boat.height, this.x, this.y, images.Boat.width, images.Boat.height)
    }

    Update() {
        this.x = this.x + this.speed
        this.y = this.y + this.speed
    }
}
