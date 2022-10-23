import Player from './player.js';
import InputHandler from './InputHandler.js';

window.addEventListener('load', function(){
    const loading = this.document.getElementById('loading');
    loading.style.display = 'none';
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const player = new Player(canvas.width, canvas.height);
    const input = new InputHandler();

    player.draw(ctx);

    function animate(){
        requestAnimationFrame(animate);
    };
    animate();
})
