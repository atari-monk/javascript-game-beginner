export class UI {
    constructor(game){
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = 'Helvetica';
    }
    draw(ctx){
        ctx.save();
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowColor = 'white';
        ctx.shadowBlur = 0;
        ctx.font = this.fontSize + 'px ' + this.fontFamily;
        ctx.textAlign = 'left';
        ctx.fillStyle = this.game.fontColor;
        //score
        ctx.fillText('Score: ' + this.game.score, 20, 50);
        //timer
        ctx.font = this.fontSize * .8 + 'px ' + this.fontFamily;
        ctx.fillText('Time: ' + (this.game.time * .001).toFixed(1), 20, 80);
        //game over messagas
        if (this.game.gameOver){
            ctx.textAlign = 'center';
            ctx.font = this.fontSize * 2 + 'px ' + this.fontFamily;
            if (this.game.score > 5){
                ctx.fillText('Boo-yah', this.game.width * .5, this.game.height * .5 - 20);
                ctx.font = this.fontSize * .7 + 'px ' + this.fontFamily;
                ctx.fillText('What are creatures of the night afraid of? YOU!!!'
                    , this.game.width * .5, this.game.height * .5 + 20);
            } else {
                ctx.fillText('Love at first bite?', this.game.width * .5, this.game.height * .5 - 20);
                ctx.font = this.fontSize * .7 + 'px ' + this.fontFamily;
                ctx.fillText('Nope. Better luck next time!'
                    , this.game.width * .5, this.game.height * .5 + 20);
            }
        }
        ctx.restore();
    }
}