let canvas = document.querySelector("canvas")
let c = canvas.getContext("2d")

canvas.width = innerWidth * devicePixelRatio
canvas.height = innerHeight * devicePixelRatio

draw()

function draw() {

    c.clearRect(0, 0, canvas.width, canvas.height)
    requestAnimationFrame(draw)

}
