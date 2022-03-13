class Timer {
    constructor() {
        this.x = canvas.width / 2 +2.5;
        this.y = canvas.height - this.x;
        this.color = '#fff';
    }

    displayTimer() {
        ctx.beginPath();
        ctx.rect(this.x, this.y,5,300 );
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 5;
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    countDown(){
        this.y += 5;
    }
}