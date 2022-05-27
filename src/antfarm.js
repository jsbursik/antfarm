import { Ants } from "./Ants.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const h = 600;
const w = 600;

canvas.height = h;
canvas.width = w;

const numAnts = 20;
const ants = new Ants(numAnts, canvas, ctx);

function init() {
    // This is kind of empty now, the Ants class now does 99% of the setup in the constructor.
    // Might use it later? Keeping for now.
    ants.getIds();

    window.requestAnimationFrame(Draw);
}

function Draw() {
    //c.globalCompositeOperation = 'destination-over'; // Still don't know what this does exactly.
    ctx.clearRect(0, 0, w, h);

    ctx.save();

    ants.drawAnts();
    
    window.requestAnimationFrame(Draw);
}

init();
    
