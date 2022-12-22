"use strict";
const { images } = require('./images')
const { canvas } = require('./canvas')
const { GameController } = require('./gameController')
const { Keydown } = require('./keydown');
const { gameStates } = require('./gameStates');

const game = {
    mainLoop: function() {
        gameStates.gameController.Draw()
        gameStates.gameController.Update()
        window.requestAnimationFrame(game.mainLoop.bind(game))
    },
    init: function() {
      gameStates.gameController = new GameController()
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
document.addEventListener('keydown', Keydown/*Keydown.bind(undefined, game)*/)