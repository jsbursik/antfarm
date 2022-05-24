const canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

var height = window.innerHeight - 4;
var width = window.innerWidth;

canvas.height = height;
canvas.width = width;

class Ant {
    h=10; w=10; color="#FF0000";
    constructor(posX, posY){
        this.posX = posX;
        this.posY = posY;
    };

    drawAnt() {
        c.fillStyle = this.color;
        c.fillRect(this.posX, this.posY, this.h, this.w);
    }
}

const firstAnt = new Ant(20,25);
firstAnt.drawAnt();
