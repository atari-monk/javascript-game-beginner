export class Player {
    constructor(game){
        this.game = game;
        this.width = 100;
        this.heigth = 91.3;
        this.x = 0;
        //console.log(this.game.height);
        this.y = this.game.height - this.heigth;
        this.vy = 0;
        this.weight = 1;
        this.image = player;
        this.speed = 0;
        this.maxSpeed = 10;
    }
    update(input){
        //horizontal movement
        this.x += this.speed;
        if (input.includes('ArrowRight')) this.speed = this.maxSpeed;
        else if(input.includes('ArrowLeft')) this.speed = -this.maxSpeed;
        else this.speed = 0;
        if (this.x < 0) this.x = 0;
        if (this.x > this.game.width - this.width) this.x = this.game.width - this.width;
        //vertical movement
        if(input.includes('ArrowUp') && this.onGround()) this.vy -= 30;
        this.y += this.vy;
        if(this.onGround() === false) this.vy += this.weight;
        else this.vy = 0;
    }
    draw(ctx){
        ctx.fillStyle = 'red';
        ctx.fillRect( this.x, this.y, this.width, this.heigth);
        ctx.drawImage(this.image
            , 0, 0
            , this.width, this.heigth
            , this.x, this.y
            , this.width, this.heigth);
    }
    onGround(){
        return this.y >= this.game.height - this.heigth;
    }
}