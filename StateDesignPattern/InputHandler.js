export default class InputHandler {
    constructor() {
        this.lastkey = '';
        this.keys = [];
        //arrow function inherites scope of class (otherwise this.lastkey would be function scope)
        window.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                    this.lastkey = "PRESS left";
                    break
                case 'ArrowRight':
                    this.lastkey = "PRESS right";
                    break
            }
        });
        window.addEventListener('keyup', (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                    this.lastkey = "RELEASE left";
                    break
                case 'ArrowRight':
                    this.lastkey = "RELEASE right";
                    break
            }
        });
    }
}