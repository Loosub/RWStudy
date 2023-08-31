class Circle {
    constructor(centerX, centerY, halfWidth) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.halfWidth = halfWidth;
    }
}

circle1 = new Circle(canvas.width/2, canvas.width/2, 10);
circle2 = new Circle(canvas.width/2, canvas.width/2, 5);

function HitCircle(circle1, circle2){
    var vx = circle1.centerX() - circle2.centerX();
    var vy = circle1.centerY() - circle2.centerY();

    var d = Math.sqrt(vx * vx + vy * vy);
    var totalRadii = circle1.halfWidth() + circle2.halfWidth();
    var hit = d <= totalRadii;

    return hit;
}

