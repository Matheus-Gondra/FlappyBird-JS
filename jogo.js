console.log("[Matheus-Gondra] Flappy Bird");

const sprites = new Image();
sprites.src = "./sprites.png";

const canvas = document.querySelector("#game-canvas");
const contexto = canvas.getContext("2d");

// [Chao]
const chao = {
    spriteX: 0,
    spriteY: 618,
    largura: 224,
    altura: 112,
    x: 0,
    y: canvas.height - 112,
    desenha() {
        contexto.drawImage(
            sprites, 
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura,
            chao.x, chao.y,
            chao.largura, chao.altura
        );
    }
}

const flappyBird = {
    spriteX: 0,
    spriteY: 0,
    largura: 33,
    altura: 24,
    x: 18,
    y: 58,
    desenha() {
        contexto.drawImage(
            sprites, 
            flappyBird.spriteX, flappyBird.spriteY,
            flappyBird.largura, flappyBird.altura,
            flappyBird.x, flappyBird.y,
            flappyBird.largura, flappyBird.altura
        );
    }
}

function loop() {

    flappyBird.desenha();
    requestAnimationFrame(loop);
}

loop();