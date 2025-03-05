
export default class Bloco 
{
    constructor(x, y, largura, altura) 
    {
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
        this.destruido = false;
    }

    desenhar(ctx) 
    {
        if (!this.destruido) 
        {
            ctx.fillStyle = 'red';
            ctx.fillRect(this.x, this.y, this.largura, this.altura);
        }
    }

    colisaoComBola(bola) 
    {
        if (!this.destruido &&
            bola.x > this.x && bola.x < this.x + this.largura &&
            bola.y - bola.raio < this.y + this.altura && bola.y + bola.raio > this.y) {
            this.destruido = true;
            bola.dy = -bola.dy; 
            return true;
        }
        return false;
    }
}
