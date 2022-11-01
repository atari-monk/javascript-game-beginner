import { Sitting, Running, Jumping, Falling, states } from "./playerStates.js";

export class Player {
    constructor(game){
        this.game = game;
        this.width = 100;
        this.heigth = 91.3;
        this.x = 0;
        //console.log(this.game.height);
        this.y = this.game.height - this.heigth - this.game.groundMargin;
        this.vy = 0;
        this.weight = 1;
        this.image = player;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame;
        this.fps = 20;
        this.frameInterval = 1000/this.fps;
        this.frameTimer = 0;
        this.speed = 0;
        this.maxSpeed = 10;
        this.states = [new Sitting(this), new Running(this)
            , new Jumping(this), new Falling(this) ];
        this.currentState = this.states[states.Sitting];
        this.currentState.enter();
    }
    update(input, deltaTime){
        this.currentState.handleInput(input);
        //horizontal movement
        this.x += this.speed;
        if (input.includes('ArrowRight')) this.speed = this.maxSpeed;
        else if(input.includes('ArrowLeft')) this.speed = -this.maxSpeed;
        else this.speed = 0;
        if (this.x < 0) this.x = 0;
        if (this.x > this.game.width - this.width) this.x = this.game.width - this.width;
        //vertical movement
        this.y += this.vy;
        if(this.onGround() === false) this.vy += this.weight;
        else this.vy = 0;
        //sprite animations
        if(this.frameTimer > this.frameInterval) {
            this.frameTimer = 0;
            if(this.frameX < this.maxFrame) this.frameX++;
                else this.frameX = 0;
        } else {
            this.frameTimer += deltaTime;
        }
    }
    draw(ctx){
        // ctx.fillStyle = 'red';
        // ctx.fillRect( this.x, this.y, this.width, this.heigth);
        ctx.drawImage(this.image
            , this.frameX * this.width, this.frameY * this.heigth
            , this.width, this.heigth
            , this.x, this.y
            , this.width, this.heigth);
    }
    onGround(){
        return this.y >= this.game.height - this.game.groundMargin - this.heigth ;
    }
    setState(state){
        this.currentState = this.states[state];
        this.currentState.enter();
    }
}