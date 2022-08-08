const canvas = document.getElementById('canvas1');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const ctx = canvas.getContext('2d');

const playerImage = new Image();
playerImage.src = "Assets/shadow_dog.png";

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(playerImage
        , 0, 0
        , CANVAS_WIDTH, CANVAS_HEIGHT);
    requestAnimationFrame(animate);
};

animate();