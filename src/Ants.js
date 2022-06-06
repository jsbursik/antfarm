//////////////////////////////////////////////////////////////////////////
//          Collection Class of Ants
//////////////////////////////////////////////////////////////////////////
export class Ants {
    constructor(total, canvas, ctx){
        this.ants = [];
        this.canvas = canvas;
        this.ctx = ctx;
        for(let i=0;i<total;i++){
            this.newAnt();
        }
    }

    newAnt(){
        this.ants.push(new Ant(randString(8), randInt(0,this.canvas.width), randInt(0,this.canvas.height)));
    }

    killAnt(id){
        for(let i = 0; i < this.ants.length; i++){
            if(this.ants[i].id == id){
                this.ants.splice(i, 1);
            }
        }
    }

    drawAnts(){
        for(let i = 0; i < this.ants.length; i++){
            this.ants[i].move(this.canvas, this.ctx);
        }
    }

    getIds(){
        for(let i = 0; i < this.ants.length; i++){
            console.log(this.ants[i].id);
        }
    }

}

//////////////////////////////////////////////////////////////////////////
//          The Individual Ant
//////////////////////////////////////////////////////////////////////////

class Ant {
    id; posX; posY; color; angle; speed; size;
    minSize = 5; maxSize = 10;
    constructor(id, posX, posY){
        this.id = id;
        this.posX = posX;
        this.posY = posY;
        this.angle = (Math.PI / 4) * randInt(0,7); // There are 8 directions an ant can go
        this.color = `rgb(${randInt(75,255)},${randInt(75,255)},${randInt(75,255)})`;
        this.speed = 1;
        this.size = randInt(this.minSize,this.maxSize);
    };

    move(canvas, ctx){
        let dirChange = randInt(-1,1);

        dirChange == 0 ? this.dirChange : this.angle += ((Math.PI / 4) * dirChange);

        let cos = Math.cos(this.angle);
        let sin = Math.sin(this.angle);

        if(cos > 0){
            this.posX = this.posX + 1; //this.w;
        } else if(cos < 0){
            this.posX = this.posX - 1; //this.w;
        }

        if(sin > 0){
            this.posY = this.posY - 1; //this.h;
        } else if(sin < 0) {
            this.posY = this.posY + 1; //this.h;
        }

        ctx.fillStyle = this.color;
        ctx.fillRect(this.posX, this.posY, this.size, this.size);
    }

}

//////////////////////////////////////////////////////////////////////////
//          Useful Functions To Have
//////////////////////////////////////////////////////////////////////////

function randInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randString(len){
    let randString = '';
    let alphaNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i=0; i<len; i++){
        randString += alphaNum.charAt(randInt(0,alphaNum.length));
    }
    return randString;
}