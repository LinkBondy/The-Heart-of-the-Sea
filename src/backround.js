"use strict";
const { canvas } = require('./canvas')

export class Backround {
    constructor() {}

    Draw() {
        canvas.context.fillStyle = "rgb(0, 150, 255)";
        canvas.context.fillRect(0, 0, canvas.width, canvas.height);
        console.log("drawBackround");
    }
}