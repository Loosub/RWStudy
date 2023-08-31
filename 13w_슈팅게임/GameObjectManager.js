class GameObjectManager{
    constructor() {
        this.bulletArr = [];
        this.MonsterArr = [];
        this.Player = new player(canvas.width/2, canvas.width/2, 10, 'maroon', 100, 5, false); //x, y, radius, color, hp, damage, isDead
    }
    
    Render() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        this.Player.draw();

        for (let bullet of this.bulletArr) {
            bullet.update();
            bullet.draw();
        }

        for (let Monster of this.MonsterArr){
            Monster.update();
            Monster.draw();
        }
        
        BulletColliderCheck(this.MonsterArr, this.bulletArr, this.Player);
        PlayerColliderCheck(this.MonsterArr, this.Player);
        OutZone(this.bulletArr);
    }

    SpawnBullet(event) { //플레이어 총알 최대 5개 발사
        let clickpos_x = event.clientX - context.canvas.offsetLeft;
        let clickpos_y = event.clientY - context.canvas.offsetTop;
        let des_x = clickpos_x - this.Player.pos_x;
        let des_y = clickpos_y - this.Player.pos_y;

        if(this.bulletArr.length < 4){
            this.bulletArr.push(new bullet(this.Player.pos_x, this.Player.pos_y, des_x, des_y, 3, 'white', 5)); //pos_x, pos_y, des_x, des_y, radius, color, speed
            console.log("총알발사");
        }
        console.log(this.bulletArr.length);
    }

    SpawnMonster(){
        let pos_x;
        let pos_y;
        let rect = rand(0, 3);
        switch(rect) {
            case 0: //상
                pos_x = rand(1,600);
                pos_y = rand(-20,0);
                break;
            case 1: //우
                pos_x = rand(601,620);
                pos_y = rand(-20,620);
                break;
            case 2: //하
                pos_x = rand(1,600);
                pos_y = rand(601,620);
                break;
            case 3: //좌
                pos_x = rand(-20,0);
                pos_y = rand(-20,620);
                break;
        }
        let des_x = this.Player.pos_x - pos_x;
        let des_y = this.Player.pos_y - pos_y;
        let radius = rand(6, 20);
        let color = ['red', 'orange', 'yellow', 'green', 'sky', 'fuchsia', 'blue', 'purple', 'lime', 'olive', 'teal', 'aqua', 
                        'Mint', 'Teal', 'Straw', 'Sunflower', 'Grass', 'Pink Rose', 'Grizzly Bear'];
        let moveSpeed = rand(1,5);
        let hp;
        let damage;
        if(radius >= 6 && radius <= 10){
            damage = 1; hp = 5;
        }else if(radius >= 11 && radius <= 15){
            damage = 2; hp = 10;
        }else if(radius >= 16 && radius <= 20){
            damage = 3; hp = 15;
        }

        this.MonsterArr.push(new monster(pos_x, pos_y, des_x, des_y, radius, color[rand(0, 18)], hp, damage, moveSpeed)); //pos_x, pos_y, des_x, des_y, radius, color, hp, damage, moveSpeed
    }
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function BulletColliderCheck(MonsterArr, bulletArr, Player) { //몬스터와 총알 충돌
    for(var num1 = 0; num1 <= MonsterArr.length; num1++){
        for(var num2 = 0; num2 <= bulletArr.length; num2++){
            if(MonsterArr[num1] != null && bulletArr[num2] != null) {                
                let dx = MonsterArr[num1].pos_x - bulletArr[num2].pos_x;
                let dy = MonsterArr[num1].pos_y - bulletArr[num2].pos_y;                
                let distance = Math.sqrt(dx * dx + dy * dy);
                let sumOfRadii = MonsterArr[num1].radius + bulletArr[num2].radius;

                //충돌시: 몬스터에게 플레이어 공격 데미지 적용, 총알 삭제
                if(distance <= sumOfRadii){
                    bulletArr.splice(num2,1);
                    num2--;
                    if(MonsterArr[num1].radius >= 11 && MonsterArr[num1].radius <= 15){
                        MonsterArr[num1].radius -= 5; 
                    } else if(MonsterArr[num1].radius >= 16 && MonsterArr[num1].radius <= 20){
                        MonsterArr[num1].radius -= 5;
                    }
                    MonsterArr[num1].damage -= 1;
                    MonsterArr[num1].hp -= Player.damage;
                    if(MonsterArr[num1].hp <= 0){
                        //몬스터 삭제
                        MonsterArr.splice(num1,1);
                        num1--;
                    }
                }
            }
        }
    }
}

function PlayerColliderCheck(MonsterArr, Player){
    for(var num1 = 0; num1 <= MonsterArr.length; num1++){
        if(MonsterArr[num1] != null){
            let dx = MonsterArr[num1].pos_x - Player.pos_x;
            let dy = MonsterArr[num1].pos_y - Player.pos_y;                
            let distance = Math.sqrt(dx * dx + dy * dy);
            let sumOfRadii = MonsterArr[num1].radius + Player.radius;

            if(distance <= sumOfRadii){
                //충돌시: 플레이어에게 몬스터 공격 데미지 적용
                Player.hp -= MonsterArr[num1].damage;
                console.log(Player.hp);
                if(Player.hp <= 0){
                    //게임오버
                    gm.gamePlay = false;
                    gm.Stop();
                    alert('Game over');
                    document.location.reload();
                }
            }
        }
    }
}

//총알이 화면 영역을 벗어날 경우 삭제
function OutZone(bulletArr){
    for(var num2 = 0; num2 <= bulletArr.length; num2++){
        if(bulletArr[num2] != null){
            if((bulletArr[num2].pos_x <= 0 || bulletArr[num2].pos_x >= 600)){
                if((bulletArr[num2].pos_y <= 0 || bulletArr[num2].pos_y >= 600)){
                    bulletArr.splice(num2,1);
                    num2--;
                }
            }
        }
    }
}