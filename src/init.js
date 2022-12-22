"use strict";
const { images } = require('./images')
const { canvas } = require('./canvas')
const { GameController } = require('./gameController')

const game = {
    mainLoop: function() {
        this.gameController.Draw()
        this.gameController.Update()
        window.requestAnimationFrame(game.mainLoop.bind(game))
    },
    init: function() {
      this.gameController = new GameController()
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
    game.init()
    ImageLoadingLoop()
    console.log("loadGame");

};

document.addEventListener('DOMContentLoaded', loadGame)