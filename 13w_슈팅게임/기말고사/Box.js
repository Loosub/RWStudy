class Box{
    constructor(centerX, centerY, halfWidth, halfHeigth){
        this.centerX = centerX;
        this.centerY = centerY;
        this.halfWidth = halfWidth;
        this.halfHeigth = halfHeigth;      
    }
}

BoxA = new Box(10, 10, 1, 1);
BoxB = new Box(10, 10, 2, 2);

function HitBox(box1, box2) {
    var collisionSide = "none";
    var vx = box1.centerX() - box2.centerX();
    var vy = box1.centerY() - box2.centerY();
    
    var combinedHalfWidth = box1.halfWidth() + box2.halfWidth();
    var combinedHalfHeigth = box1.halfHeigth() + box2.halfHeigth();

    if(Math.abx(vx) < combinedHalfWidth || Math.abs(vy) < combinedHalfHeight){
        var overlapX = combinedHalfWidth - Math.abs(vx);
        var overlapY = combinedHalfHeigth - Math.abs(vy);
        if(overlapX >= overlapY){
            collisionSide = vy > 0 ? 'top' : 'bottom';
        } else {
            collisionSide = vx > 0 ? 'left' : 'right';
        }
    }
    return collisionSide;
}