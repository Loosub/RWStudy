class player{
    constructor(pos_x, pos_y, radius, color, hp, damage, isDead){
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.radius = radius;
        this.color = color;

        this.hp = hp;
        this.damage = damage;
        this.isDead = isDead;
    }

    draw(){
        context.beginPath();
        context.arc(this.pos_x, this.pos_y, this.radius, 0, 2*Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }
}