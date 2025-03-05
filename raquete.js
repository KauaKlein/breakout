export default class Raquete 
{
    constructor(larguraTela, alturaTela) 
    {
        this.largura = 100;
        this.altura = 10;
        this.x = (larguraTela - this.largura) / 2;
        this.y = alturaTela - this.altura - 20;
        this.velocidade = 20;
        this.larguraTela = larguraTela;
    }

    mover(direcao) 
    {
        if (direcao === 'esquerda' && this.x > 0) 
        {
            this.x -= this.velocidade;
        } else if (direcao === 'direita' && this.x + this.largura < this.larguraTela) 
        {
            this.x += this.velocidade;
        }
    }

    desenhar(ctx) 
    {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
}
