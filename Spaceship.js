class SpaceShip {
    constructor(canvas,x, y, width, height, src) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.image = new Image();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image.src = src;
    }

    drawImage() {
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    moveUp() {
        this.y -= 5;
    }

    moveDown() {
        this.y += 5;
    }
}

function moveLeftShip() {
    if (leftShip.y < -30 || leftShip.y > 350) {
        leftShip.x = 100;
        leftShip.y = 350;
    } else {
        switch (event.keyCode) {
            case 87:
                leftShip.moveUp();
                break;
            case 83:
                leftShip.moveDown();
                break;
                clearCanvas();
                leftShip.drawImage();
                rightShip.drawImage();
        }
    }
}


addEventListener('keydown', moveLeftShip);

function moveRightShip() {
    if (rightShip.y < -30 || rightShip.y > 350) {
        rightShip.x = 350;
        rightShip.y = 350;
    } else {
        switch (event.keyCode) {
            case 38:
                rightShip.moveUp();
                break;
            case 40:
                rightShip.moveDown();
                break;
        }
        clearCanvas();
        rightShip.drawImage();
        leftShip.drawImage();
    }
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

addEventListener('keydown', moveRightShip)