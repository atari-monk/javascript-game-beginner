export default class InputHandler {
    constructor() {
        this.lastKey = '';
        this.keys = [];
        //arrow function inherites scope of class
        //(otherwise this.lastkey would be function scope)
        window.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                    this.lastKey = "PRESS left";
                    break
                case 'ArrowRight':
                    this.lastKey = "PRESS right";
                    break
            }
        });
        window.addEventListener('keyup', (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                    this.lastKey = "RELEASE left";
                    break
                case 'ArrowRight':
                    this.lastKey = "RELEASE right";
                    break
            }
        });
    }
}