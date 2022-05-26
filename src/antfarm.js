import { Ant } from "./ant.js";

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

const h = 600;
const w = 600;

canvas.height = h;
canvas.width = w;

const numAnts = 20;
var ants = [];

function init() {
    for(let i=0;i<numAnts;i++){
        ants.push(new Ant(randInt(0,w-10),randInt(0,h-10)));
    }

    window.requestAnimationFrame(Draw);
}

function Draw() {
    c.globalCompositeOperation = 'destination-over'; // Still don't know what this does exactly.
    c.clearRect(0, 0, w, h);

    c.fillStyle = "#000000";
    c.strokeStyle = "#000000";

    c.save();

    ants.forEach((curr, i, arr) => {
        ants[i].move(canvas, c);
    });

    window.requestAnimationFrame(Draw);
}

function randInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

init();
    
