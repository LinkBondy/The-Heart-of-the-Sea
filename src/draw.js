"use strict";
const { canvas } = require('./canvas')
const { images } = require('./images')

export const draw = {
    drawGame: function() {
        this.drawBackround()
        this.drawBoat()
    },

    drawBackround: function() {
        //for(var i = 50; i < canvas.width; i++) {
            canvas.context.fillStyle = "rgb(0, 150, 255)";
            canvas.context.fillRect(0, 0, canvas.width, canvas.height);
            console.log("drawBackround");
        //}
    },

    drawBoat: function() {
        canvas.context.drawImage(images.Boat, 0, 0, images.Boat.width, images.Boat.height, (canvas.width - images.Boat.width) / 2, (canvas.height - images.Boat.height) / 2, images.Boat.width, images.Boat.height)
    }
}