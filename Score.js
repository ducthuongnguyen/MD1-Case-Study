class Score {
    constructor(x) {
    this.x = x;
    this.y = canvas.height - 20;
    }

    displayScore(score){
        ctx.font ='20px Georgia';
        ctx.fillText(score,this.x,this.y);

    }
}