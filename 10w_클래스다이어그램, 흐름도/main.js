

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

class player{
    constructor(x,y,radius,color)
    {
        this.pos_x = x;
        this.pos_y = y;
        this.radius = radius;
        this.color = color;
    }

    draw()
    {
        context.beginPath();

        context.arc(this.pos_x,this.pos_y,this.radius,0,2*Math.PI);
        context.fillStyle = this.color;
        context.fill();

        context.closePath();
    }
}

var fps = 60;
setInterval(render,1000/fps);
var p = new player(canvas.width/2, canvas.height/2, 20, 'skyblue');

function render()
{
    context.clearRect(0, 0, canvas.width, canvas.heigth); //(0,0)에서 canvas 사이즈까지
    p.draw();
}

// class player{
//     constructor(x,y,radius,color)
//     {
//         this.pos_x = x;
//         this.pos_y = y;
//         this.radius = radius;
//         this.color = color;
//     }

//     draw()
//     {
//         context.beginPath();
//         context.arc(this.pos_x,this.pos_y,this.radius,0,2*Math.PI);
//         context.fillStyle = this.color;
//         context.fill();
//         context.closePath();
//     }
// }

// var p = new player(100,100,30,'pink');
// p.draw();

// class Bullet{
//     constructor(x,y,color)
//     {
//         this.pos_x = x;
//         this.pos_y = y;
//         this.color = color;
//     }

//     draw_bullet()
//     {
//         context.beginPath();
//         context.arc(this.pos_x,this.pos_y,5,0,2*Math.PI);
//         context.fillStyle = this.color;
//         context.fill();
//         context.closePath();
//     }
// }

// canvas.onclick = function(event){

//     const x = event.clientX - context.canvas.offsetLeft;
//     const y = event.clientY - context.canvas.offsetTop;
    
//     var bullet = new Bullet(x,y,'yellow');
//     bullet.draw_bullet();
//  } 



// // game.addEventListener('mousedown', (event) => {
    
// //     var q = event.clientX;
// //     var w = event.clientY;
// //     console.log(q,w);

// //     var bullet = new Bullet(q,w,'yellow');
    
// //     bullet.draw_bullet();

// // });

// // context.beginPath(); //그리기 시작
// // context.arc(100, 100, 20, 0, 2*Math.PI); //호..(100,100)에서 20만큼 2파이(360도)
// // context.fillStyle = 'green';
// // context.fill();

// // context.fillRect(225, 225, 100, 100); //사각형
// // context.fillStyle = 'skyblue';
// // context.closePath();

// // context.beginPath();
// // context.moveTo(100,100);
// // context.lineTo(0,100);
// // context.lineTo(100,0);
// // context.closePath();

// // context.fillStyle = 'pink';
// // context.fill();