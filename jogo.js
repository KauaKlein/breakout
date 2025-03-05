import Raquete from './raquete.js';
import Bola from './bola.js';
import Bloco from './blocos.js';

export default class Jogo 
{
    constructor(canvas, ctx) 
    {
        this.canvas = canvas;
        this.ctx = ctx;
        this.raquete = new Raquete(canvas.width, canvas.height);
        this.bola = new Bola(canvas.width, canvas.height);
        this.blocos = this.criarBlocos();
        this.pontuacao = 0;
    }

    criarBlocos() 
    {
        const blocos = [];
        const largura = 75;
        const altura = 20;
        const linhas = 5;
        const colunas = 7;

        for (let linha = 0; linha < linhas; linha++) 
        {
            for (let coluna = 0; coluna < colunas; coluna++) 
            {
                blocos.push(new Bloco(coluna * 
                    (largura + 5) + 35, linha * 
                    (altura + 5) + 30, largura, altura)
                );
            }
        }
        return blocos;
    }
    teclaPressionada(event) 
    {
        if (event.key === 'ArrowLeft') 
        {
            this.raquete.mover('esquerda');
        } else if (event.key === 'ArrowRight') 
        {
            this.raquete.mover('direita');
        }
    }
    atualizar() {
        this.bola.mover();
        this.bola.colisaoComRaquete(this.raquete);
        
        for (let bloco of this.blocos) {
            if (bloco.colisaoComBola(this.bola)) 
            {
                this.pontuacao++;
            }
        }
    }
    desenhar() 
    {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); 
        this.raquete.desenhar(this.ctx);
        this.bola.desenhar(this.ctx);

        for (let bloco of this.blocos) 
        {
            bloco.desenhar(this.ctx);
        }

        this.ctx.fillStyle = 'white';
        this.ctx.font = '14px Arial';
        this.ctx.fillText('Pontuação : ' + this.pontuacao, 5, 20);
    }
    iniciar() 
    {
        document.addEventListener('keydown', (event) => this.teclaPressionada(event));
        const loopDoJogo = () => 
        {
            this.atualizar();
            this.desenhar();
            requestAnimationFrame(loopDoJogo);
        };
        loopDoJogo();
    }
}
