function loadGame() {
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    context.fillStyle = "rgb(0, 150, 255)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    console.log("LoadGame Works");
}

document.addEventListener('DOMContentLoaded', loadGame)