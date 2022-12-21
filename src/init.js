"use strict";
const { draw } = require('./draw')
const { images } = require('./images')
const { canvas } = require('./canvas')

const game = {
    mainLoop: function() {
        draw.drawGame();
        window.requestAnimationFrame(game.mainLoop)
    }
 }

function StartGame () {
    game.mainLoop()
}

function ImageLoadingLoop () {
    if (images.stillLoading > 0) {
      window.setTimeout(ImageLoadingLoop, 1000 / 60)
    } else {
      StartGame()
    }
  }
    
function loadGame() {
    canvas.createCanvasContext()
    images.LoadImages()
    ImageLoadingLoop()
    console.log("loadGame");
};

document.addEventListener('DOMContentLoaded', loadGame)