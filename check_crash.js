function checkCrash(obj1, obj2) {
    let left1 = obj1.x - obj1.radius;
    let right1 = obj1.x + obj1.radius;
    let top1 = obj1.y - obj1.radius;
    let bottom1 = obj1.y + obj1.radius;

    let left2 = obj2.x - obj2;
    let right2 = obj2.x + obj2.width;
    let top2 = obj2.y - obj2;
    let bottom2 = obj2.y + obj2.height;

    if (left1 > right2 || right1 < left2 || bottom1 < top2 || top1 > bottom2) {
        return false;
    }
    return true;
}

for (let i=0;i<allDebris.length;i++){
    if (checkCrash(allDebris[i],rightShip)){
        rightShip.x = 350;
        rightShip.y = 350;
    }else {
        rightShip.hasPlayerScoredAPoint();
    }

}

console.log('co an k',allDebris.length)
