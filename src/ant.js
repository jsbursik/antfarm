export class Ant {
    h=10; w=10; color="#000000"; angle=0;
    constructor(posX, posY){
        this.posX = posX;
        this.posY = posY;
    };

    move(canvas) {
        this.angle = (Math.PI / 4) * Math.floor((Math.random() * 9));

        let cos = Math.cos(this.angle);
        let sin = Math.sin(this.angle);

        if(cos > 0){
            this.posX = this.posX + 10;
        } else if(cos < 0){
            this.posX = this.posX - 10;
        }

        if(sin > 0){
            this.posY = this.posY - 10;
        } else if(sin < 0) {
            this.posY = this.posY + 10;
        }
        
        this.posX < 0 ? this.posX = canvas.width - 10 : this.posX;
        this.posX > canvas.width ? this.posX = 0 : this.posX;

        this.posY < 0 ? this.posY = canvas.height - 10 : this.posY;
        this.posY > canvas.height ? this.posY = 0 : this.posY;

        // console.log(this.posX + ' ' + this.posY); // uncomment for position in console
    }
}