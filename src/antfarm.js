import { Ant } from "./ant.js";

const canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

// const h = window.innerHeight - 4;
// const w = window.innerWidth;

const h = 600;
const w = 600;

canvas.height = h;
canvas.width = w;

const firstAnt = new Ant(0,0);

function drawAnt(ant) {
    c.fillStyle = ant.color;
    c.fillRect(ant.posX, ant.posY, 10, 10);
}

function Draw(){
    //c.clearRect(0,0, w, h); // Comment this out to see the path it follows.
    drawAnt(firstAnt);
    firstAnt.move(canvas);
}

setInterval(Draw, 100);
    
