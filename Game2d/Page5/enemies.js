class Enemy {
    constructor(){
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame;
        this.fps = 20;
        this.frameInterval = 1000/this.fps;
        this.frameTimer = 0;
        this.markedForDeletion = false;
    }
    update(deltaTime){
        //movement
        this.x -= this.speedX;
        this.y += this.speedY;
        //sprite animations
        if(this.frameTimer > this.frameInterval) {
            this.frameTimer = 0;
            if(this.frameX < this.maxFrame) this.frameX++;
                else this.frameX = 0;
        } else {
            this.frameTimer += deltaTime;
        }
        //off screen
        if (this.x + this.width < 0) this.markedForDeletion = true;
    }
    draw(ctx){
        ctx.drawImage(this.image
            , this.frameX * this.width, 0
            , this.width, this.height
            , this.x, this.y
            , this.width, this.height);
    }
}

export class FlyingEnemy extends Enemy {
    constructor(game){
        super();
        this.game = game;
        this.width = 60;
        this.height = 44;
        this.x = this.game.width;
        this.y = Math.random() * this.game.height * .5;
        this.speedX = 2;
        this.speedY = 0;
        this.maxFrame = 5;
        this.image = enemy_fly;
    }
    update(deltaTime){
        super.update(deltaTime);
    }
}

export class GroundEnemy extends Enemy {

}

export class ClimbingEnemy extends Enemy {

}