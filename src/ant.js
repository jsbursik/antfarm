export class Ant {
    h=10; w=10; color="#000000"; angle=0; speed=1;
    constructor(posX, posY){
        this.posX = posX;
        this.posY = posY;
    };

    move(canvas) {
        this.angle = (Math.PI / 4) * Math.floor((Math.random() * 9));

        let cos = Math.cos(this.angle);
        let sin = Math.sin(this.angle);

        if(cos > 0){
            this.posX = this.posX + 1 //this.w;
        } else if(cos < 0){
            this.posX = this.posX - 1 //this.w;
        }

        if(sin > 0){
            this.posY = this.posY - 1 //this.h;
        } else if(sin < 0) {
            this.posY = this.posY + 1 //this.h;
        }
        
        this.posX < 0 ? this.posX = 0 : this.posX;
        this.posX > canvas.width + this.w ? this.posX = canvas.width - this.w : this.posX;

        this.posY < 0 ? this.posY = 0 : this.posY;
        this.posY > canvas.height + this.h ? this.posY = canvas.height - this.h : this.posY;

        // console.log(this.posX + ' ' + this.posY); // uncomment for position in console
    }

    drawAnt(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.posX, this.posY, this.w, this.h);
    }
}