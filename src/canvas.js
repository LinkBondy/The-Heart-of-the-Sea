'use strict'
class Canvas {
  createCanvasContext () {
    const canvas = document.getElementById('mycanvas')
    this.context = canvas.getContext('2d')
    canvas.setAttribute("width", window.innerWidth)
    canvas.setAttribute("height", window.innerHeight)
    this.width = canvas.width
    this.height = canvas.height
  }
}

export const canvas = new Canvas()
