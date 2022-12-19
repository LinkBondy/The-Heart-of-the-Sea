"use strict";
export const images = {
    stillLoading: 0,
    LoadImages: function () {
      images.Water_Medium = LoadImage('images/Water_Medium.png')
    }
  }
  
  function LoadImage (path) {
    const image = new window.Image()
    image.src = path
    images.stillLoading += 1
    image.onload = function () {
      images.stillLoading -= 1
    }
    return image
  }
  