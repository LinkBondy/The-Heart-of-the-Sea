"use strict";
const { canvas } = require('./canvas')
//const { images } = require('./images')

export const draw = {
    drawBackround: function() {
        //for(var i = 50; i >= canvas.width; i++) {
            canvas.context.fillStyle = "rgb(0, 150, 255)";
            canvas.context.fillRect(0, 0, canvas.width, canvas.height);
            console.log("drawBackround");
        //}
    }
}