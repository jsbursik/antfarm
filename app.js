const canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

var height = window.innerHeight - 4;
var width = window.innerWidth;

canvas.height = height;
canvas.width = width;

class Ant {
    h=10; w=10; color="#000000"; angle=0;
    constructor(posX, posY){
        this.posX = posX;
        this.posY = posY;
        this.drawAnt();
    };

    drawAnt() {
        c.fillStyle = this.color;
        c.fillRect(this.posX, this.posY, this.h, this.w);
    }

    move() {
        this.angle = 45 * Math.floor((Math.random() * 9));
        console.log(this.angle);
        switch(this.angle) {
            case 0:
                this.posX += 10;
                break;
            case 45:
                this.posX += 10;
                this.posY -= 10;
                break;
            case 90:
                this.posY -= 10;
                break;
            case 135:
                this.posX -= 10;
                this.posY -= 10;
                break;
            case 180:
                this.posX -= 10;
                break;
            case 225:
                this.posX -= 10;
                this.posY += 10;
                break;
            case 270:
                this.posY += 10;
                break;
            case 315:
                this.posX += 10;
                this.posY += 10;
                break;
        }
        this.posX > width ? this.posX = 0 : this.posX;
        this.posY > height ? this.posY = 0 : this.posY;
    }
}

const firstAnt = new Ant(20,25);

setInterval(Draw(),1000);

function Draw() {
    c.clearRect(0, 0, height, width);
    firstAnt.move();
    firstAnt.drawAnt();
    console.log("drawing!");
}
    
