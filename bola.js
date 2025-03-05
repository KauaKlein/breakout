export default class Bola 
{
    constructor(larguraTela, alturaTela) 
    {
        this.raio = 10;
        this.x = larguraTela / 2;
        this.y = alturaTela - 30;
        this.dx = 3;
        this.dy = -3;
        this.larguraTela = larguraTela;
        this.alturaTela = alturaTela;
    }

    mover() 
    {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x + this.raio > this.larguraTela || this.x - this.raio < 0) 
        {
            this.dx = -this.dx;
        }

        if (this.y - this.raio < 0) 
        {
            this.dy = -this.dy;
        }
    }

    colisaoComRaquete(raquete) 
    {
        if (this.x > raquete.x && this.x < raquete.x + raquete.largura && this.y + this.raio >= raquete.y) 
        {
            this.dy = -this.dy;
        }
    }

    desenhar(ctx) 
    {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.raio, 0, 6);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
    }
}
