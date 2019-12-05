let canvas = document.querySelector("canvas")

let c = canvas.getContext('2d')
// c.fillRect(0,0,100,100);

// c.beginPath()
// c.moveTo(50, 100)
// c.lineTo(200,500)
// c.stroke()

canvas.width = window.innerWidth
canvas.height = window.innerHeight
// for (let i = 0; i < 100; i++) {
//     let x = Math.random() * window.innerWidth
//     let y = Math.random() * window.innerHeight

//     c.beginPath()
//     c.arc(x, y, 30, 0, Math.PI * 2, false)
//     c.strokeStyle = "blue"
//     c.stroke()
//     console.log(x);


// }


let x = 300
let y = 300
let raduis = 30
let dx = 4
let dy = 4

function animate() {
    requestAnimationFrame(animate);


    c.clearRect(0, 0, innerWidth, innerHeight)
    c.beginPath()
    c.arc(x, y, raduis, 0, Math.PI * 2, false)
    c.strokeStyle = "blue"
    c.stroke()
    x += dx
    y += dy

    if (x + raduis > innerWidth || x - raduis < 0)
        dx = -dx
    if (y + raduis > innerHeight || y - raduis < 0)
        dy = -dy
}

animate()

// c.beginPath()
// c.arc(500, 500, 20, 0, Math.PI * 2, false)
// c.strokeStyle = "blue"
// c.stroke()

//  c.fillRect(0,0,100,100);
// console.log(x);