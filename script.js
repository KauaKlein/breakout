import Jogo from './jogo.js';

const canvas = document.getElementById('breakout');
const ctx = canvas.getContext('2d');
const jogo = new Jogo(canvas, ctx);

jogo.iniciar();

