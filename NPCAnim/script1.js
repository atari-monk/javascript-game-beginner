/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 1000;
const ctx = canvas.getContext('2d');

enemy1 = {
    x: 0,
    y: 0,
    width: 200,
    height: 200,
}

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    enemy1.x++;
    enemy1.y++;
    ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);
    requestAnimationFrame(animate);
}
animate();