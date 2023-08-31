class bullet{
    constructor(pos_x, pos_y, des_x, des_y, radius,color, moveSpeed){
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.des_x = des_x / (Math.sqrt(Math.pow(des_x,2) + Math.pow(des_y,2)));
        this.des_y = des_y / (Math.sqrt(Math.pow(des_x,2) + Math.pow(des_y,2)));
        this.radius = radius;
        this.color = color;
        this.moveSpeed = moveSpeed;
    }
    update(){
        this.pos_x += this.des_x * this.moveSpeed;
        this.pos_y += this.des_y * this.moveSpeed;
    }
    draw(){
        context.beginPath();
        context.arc(this.pos_x, this.pos_y, this.radius, 0, 2*Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }
}