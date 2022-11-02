import {Dust, Fire} from './particles.js'

export const states = {
    Sitting: 0,
    Running: 1,
    Jumping: 2,
    Falling: 3,
    Rolling: 4,
    diving: 5,
    hit: 6
}

class State {
    constructor(state, game){
        this.state = state;
        this.game = game;
    }
}

export class Sitting extends State {
    constructor(game){
        super("Sitting", game);
    }
    enter(){
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 4;
        this.game.player.frameY = 5;
    }
    handleInput(input){
        if(input.includes('ArrowLeft') || input.includes('ArrowRight')){
            this.game.player.setState(states.Running, 1);
        } else if (input.includes('Enter')){
            this.game.player.setState(states.Rolling, 2);
        } 
    }
}

export class Running extends State {
    constructor(game){
        super("Running", game);
    }
    enter(){
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 8;
        this.game.player.frameY = 3;
    }
    handleInput(input){
        this.game.particles.unshift(
            new Dust(this.game
                , this.game.player.x + this.game.player.width * .5
                , this.game.player.y + this.game.player.heigth));
        if(input.includes('ArrowDown')){
            this.game.player.setState(states.Sitting, 0);
        } else if (input.includes('ArrowUp')){
            this.game.player.setState(states.Jumping, 1);
        } else if (input.includes('Enter')){
            this.game.player.setState(states.Rolling, 2);
        } 
    }
}

export class Jumping extends State {
    constructor(game){
        super("Jumping", game);
    }
    enter(){
        if(this.game.player.onGround()) this.game.player.vy -= 30;
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 6;
        this.game.player.frameY = 1;
    }
    handleInput(input){
        if(this.game.player.vy > this.game.player.weight){
            this.game.player.setState(states.Falling, 1);
        } else if (input.includes('Enter')){
            this.game.player.setState(states.Rolling, 2);
        } 
    }
}

export class Falling extends State {
    constructor(game){
        super("Falling", game);
    }
    enter(){
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 6;
        this.game.player.frameY = 2;
    }
    handleInput(input){
        if(this.game.player.onGround()){
            this.game.player.setState(states.Running, 1);
        }
    }
}
export class Rolling extends State {
    constructor(game){
        super("Rolling", game);
    }
    enter(){
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 6;
        this.game.player.frameY = 6;
    }
    handleInput(input){
        this.game.particles.unshift(
            new Fire(this.game
                , this.game.player.x + this.game.player.width * .5
                , this.game.player.y + this.game.player.heigth * .5));
        if(input.includes('Enter') === false && this.game.player.onGround()){
            this.game.player.setState(states.Running, 1);
        } else if(input.includes('Enter') === false && this.game.player.onGround() === false){
            this.game.player.setState(states.Falling, 1);
        } else if (input.includes('Enter') && input.includes('ArrowUp') && this.game.player.onGround()){
            this.game.player.vy -= 27;
        }
    }
}