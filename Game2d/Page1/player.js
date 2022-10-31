export class Player {
    constructor(game){
        this.game = game;
        this.width = 100;
        this.heigth = 91.3;
        this.x = 0;
        //console.log(this.game.height);
        this.y = this.game.height - this.heigth;
        this.image = player;
    }
    update(){
        //this.x++;
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
}