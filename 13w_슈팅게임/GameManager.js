const canvas = document.getElementById('main_canvas');
var context = canvas.getContext('2d');

class GameManager {
    constructor() {
        this.score = 0;
        this.fps = 60;
        this.gamePlay = true;
        this.isTitle = true;
        this.timerId1 = 0;
        this.timerId2 = 0;
    }

    Run(){
        console.log("게임시작");
        this.timerId1 = setInterval(rend, 1000/gm.fps);
        this.timerId2 = setInterval(SpawnMonsterTimer, 1000);
    }

    Stop(){
        console.log("게임종료");
        clearInterval(this.timerId1);
        clearInterval(this.timerId2);
    }
}

function rend(){
    gom.Render();
}

function SpawnMonsterTimer(){
    if(!gm.isTitle){
        gom.SpawnMonster();
    }
}

canvas.onclick = function(event){
    if(!gm.isTitle){
        gom.SpawnBullet(event);
    }
}

window.onkeydown = function(event){
    if(event.keyCode == 32 && gm.isTitle){
        canvas.style.backgroundImage = null;
        canvas.style.backgroundColor = 'black';
        gm.isTitle = false;
        console.log("타이틀 종료");
    }
}