const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const pipeId = document.getElementById('pipeId')
const startButton = document.getElementById('startButton');
const cloudsId = document.getElementById('cloudsId')
const reStart = document.getElementById('reStart')
const pularId = document.getElementById('pularId')
const pontos = document.getElementById('pontuacaoId')
const elementoResultado = document.getElementById('resultado');
const campeao = document.getElementById('campeao')
const finish = document.getElementById('gameBoard')
const marioId = document.getElementById('marioId')
const premio = document.getElementById('premio')
const introducao = document.getElementById('introducaoId')

startButton.addEventListener('click', () => {
    pipeId.classList.add('pipeInit')
    mario.classList.add('marioInit')
    cloudsId.classList.add('cloudsInit')
    startButton.classList.add('btnStartRemove')
    pularId.classList.add('btnPular')
    pularId.classList.remove('btnPularRemove')
    introducao.style.display = 'none'

    function multiplicarPorEleMesmo(numeroInicial) {
        let resultado = numeroInicial;

        function atualizarResultado() {
            const numero2 = 100
            resultado += numero2;
            elementoResultado.textContent = resultado;
            console.log(resultado)
            if (resultado === 1000) {
                pipeId.classList.add('pipeInitLevelTwo')
            } else if (resultado === 2000) {
                pipeId.classList.remove('pipeInitLevelTree')
                pipeId.classList.add('pipeInitLevelTree')
            } else if (resultado === 3000) {
                pipeId.classList.remove('pipeInitLevelFour')
                pipeId.classList.add('pipeInitLevelFour')
            } else if (resultado === 4000) {
                pipeId.classList.remove('pipeInitLevelfive')
                pipeId.classList.add('pipeInitLevelFour')
            } else if (resultado === 5000) {
                campeao.classList.add('campeao')
                pipeId.classList.add('finish')
                cloudsId.classList.add('finish')
                marioId.classList.add('finish')
                reStart.classList.add('btnRestartOpen')
                pularId.style.display = 'none'
                elementoResultado.style.display = 'none'
                premio.innerHTML = 'Parabéns 👏👏👏 Você alcançou 5.000 pontos 🏆 !!!'
            }

        }
        timeLoop = setInterval(atualizarResultado, 1395);
    }
    multiplicarPorEleMesmo(0);
});

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 800);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    console.log(pipePosition)
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


    if (window.innerWidth >= 600) {
        if (pipePosition <= 146 && pipePosition > 0 && marioPosition < 110) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './src/images/jessy-power-off.png';
            mario.style.width = '95px'
            mario.style.marginLeft = '50px'

            reStart.classList.add('btnRestartOpen')
            cloudsId.style.animation = 'none'
            pularId.classList.add('btnPularRemove')

            clearInterval(loop);
            clearInterval(timeLoop);
        }
    } else if(window.innerWidth < 600) {
        if (pipePosition <= 40 && pipePosition > 0 && marioPosition < 30) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './src/images/jessy-power-off.png';
            mario.style.width = '30px'
            mario.style.marginLeft = '15px'

            reStart.classList.add('btnRestartOpen')
            cloudsId.style.animation = 'none'
            pularId.classList.add('btnPularRemove')

            clearInterval(loop);
            clearInterval(timeLoop);
        }            

    }

}, 10);

reStart.addEventListener('click', () => {
    location.reload();
})

document.addEventListener('keydown', jump)
pularId.addEventListener('click', jump)