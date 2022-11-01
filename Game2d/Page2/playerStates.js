export const states = {
    Sitting: 0,
    Running: 1,
    Jumping: 2,
    Falling: 3,
}

class State {
    constructor(state){
        this.state = state;
    }
}

export class Sitting extends State {
    constructor(player){
        super("Sitting");
        this.player = player;
    }
    enter(){
        this.player.frameY = 5;
    }
    handleInput(input){
        if(input.includes('ArrowLeft') || input.includes('ArrowRight')){
            this.player.setState(states.Running);
        }
    }
}

export class Running extends State {
    constructor(player){
        super("Running");
        this.player = player;
    }
    enter(){
        this.player.frameY = 3;
    }
    handleInput(input){
        if(input.includes('ArrowDown')){
            this.player.setState(states.Sitting);
        } else if (input.includes('ArrowUp')){
            this.player.setState(states.Jumping);
        }
    }
}

export class Jumping extends State {
    constructor(player){
        super("Jumping");
        this.player = player;
    }
    enter(){
        if(this.onGround()) this.player.vy -= 30;
        this.player.frameY = 1;
    }
    handleInput(input){
        if(this.player.vy > this.player.weight){
            this.player.setState(states.Falling);
        }
    }
}

export class Falling extends State {
    constructor(player){
        super("Falling");
        this.player = player;
    }
    enter(){
        this.player.frameY = 2;
    }
    handleInput(input){
        if(this.player.onGround()){
            this.player.setState(states.Running);
        }
    }
}