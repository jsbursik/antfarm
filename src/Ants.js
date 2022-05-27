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
        this.ants.push(new Ant(randString(8), randInt(0,canvas.width), randInt(0,canvas.height)));
    }

    killAnt(id){
        this.ants.forEach((curr, i, arr)=>{
            if(this.ants[i].id == id){
                this.ants.splice(i, 1);
            }
        });
    }

    drawAnts(){
        this.ants.forEach((curr, i, arr)=>{
            this.ants[i].move(this.canvas, this.ctx);
        });
    }

    getIds(){
        this.ants.forEach((curr, i, arr)=>{
            console.log(this.ants[i].id);
        });
    }

}

//////////////////////////////////////////////////////////////////////////
//          The Individual Ant
//////////////////////////////////////////////////////////////////////////

class Ant {
    h=5; w=5; color="#000000"; angle=0; speed=1;
    constructor(id, posX, posY){
        this.id = id;
        this.posX = posX;
        this.posY = posY;
        this.angle = (Math.PI / 4) * randInt(0,7); // There are 8 directions an ant can go
    };

    drawAnt(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.posX, this.posY, this.w, this.h);
    }

    move(canvas, ctx) {
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
        
        this.posX < 0 ? this.posX = 0 : this.posX;
        this.posX > canvas.width + this.w ? this.posX = canvas.width - this.w : this.posX;

        this.posY < 0 ? this.posY = 0 : this.posY;
        this.posY > canvas.height + this.h ? this.posY = canvas.height - this.h : this.posY;

        this.drawAnt(ctx);
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