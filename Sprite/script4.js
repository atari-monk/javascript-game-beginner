const canvas = document.getElementById('canvas1');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const ctx = canvas.getContext('2d');

const playerImage = new Image();
playerImage.src = "Assets/shadow_dog.png";
const spriteWidth = 575;
const spriteHeight = 523; 

let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 5; //0 to 30 to show anim speed change

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(playerImage
        , frameX * spriteWidth, frameY * spriteHeight
        , spriteWidth, spriteHeight
        , 0, 0
        , spriteWidth, spriteHeight);
    if(gameFrame % staggerFrames == 0)
    {
        if(frameX < 6) frameX++;
        else frameX = 0;
    }
    gameFrame++;
    requestAnimationFrame(animate);
};

animate();