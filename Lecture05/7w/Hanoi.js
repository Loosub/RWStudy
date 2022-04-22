var point = 0;
var isHold = false;
var isStart = false;

var a;

// 초기화 버튼 클릭시
function Init() {
    if(isStart == false) isStart = true;

    firstAreaArray = [];
    secondAreaArray = [];
    thirdAreaArray = [];

    firstArea = document.getElementById('firstArea');
    secondArea = document.getElementById('secondArea');
    thirdArea = document.getElementById('thirdArea');

    var first_f1 = document.getElementById('first_f1');
    var first_f2 = document.getElementById('first_f2');
    var first_f3 = document.getElementById('first_f3');
    var first_f4 = document.getElementById('first_f4');
    var first_f5 = document.getElementById('first_f5');
    var first_f6 = document.getElementById('first_f6');

    var second_f1 = document.getElementById('second_f1');
    var second_f2 = document.getElementById('second_f2');
    var second_f3 = document.getElementById('second_f3');
    var second_f4 = document.getElementById('second_f4');
    var second_f5 = document.getElementById('second_f5');
    var second_f6 = document.getElementById('second_f6');

    var third_f1 = document.getElementById('third_f1');
    var third_f2 = document.getElementById('third_f2');
    var third_f3 = document.getElementById('third_f3');
    var third_f4 = document.getElementById('third_f4');
    var third_f5 = document.getElementById('third_f5');
    var third_f6 = document.getElementById('third_f6');

    if(first_f1.firstChild != null) first_f1.removeChild(first_f1.firstChild);
    if(first_f2.firstChild != null) first_f2.removeChild(first_f2.firstChild);
    if(first_f3.firstChild != null) first_f3.removeChild(first_f3.firstChild);
    if(first_f4.firstChild != null) first_f4.removeChild(first_f4.firstChild);
    if(first_f5.firstChild != null) first_f5.removeChild(first_f5.firstChild);
    if(first_f6.firstChild != null) first_f6.removeChild(first_f6.firstChild);

    if(second_f1.firstChild != null) second_f1.removeChild(second_f1.firstChild);
    if(second_f2.firstChild != null) second_f2.removeChild(second_f2.firstChild);
    if(second_f3.firstChild != null) second_f3.removeChild(second_f3.firstChild);
    if(second_f4.firstChild != null) second_f4.removeChild(second_f4.firstChild);
    if(second_f5.firstChild != null) second_f5.removeChild(second_f5.firstChild);
    if(second_f6.firstChild != null) second_f6.removeChild(second_f6.firstChild);

    if(third_f1.firstChild != null) third_f1.removeChild(third_f1.firstChild);
    if(third_f2.firstChild != null) third_f2.removeChild(third_f2.firstChild);
    if(third_f3.firstChild != null) third_f3.removeChild(third_f3.firstChild);
    if(third_f4.firstChild != null) third_f4.removeChild(third_f4.firstChild);
    if(third_f5.firstChild != null) third_f5.removeChild(third_f5.firstChild);
    if(third_f6.firstChild != null) third_f6.removeChild(third_f6.firstChild);

    firstAreaArray.push("🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥");
    firstAreaArray.push("🟨🟨🟨🟨🟨🟨🟨🟨🟨");
    firstAreaArray.push("🟩🟩🟩🟩🟩🟩🟩");
    firstAreaArray.push("🟦🟦🟦🟦🟦");
    firstAreaArray.push("🟪🟪🟪");
    firstAreaArray.push("⬛️");

    first_f1.append(firstAreaArray[0]);
    first_f2.append(firstAreaArray[1]);
    first_f3.append(firstAreaArray[2]);
    first_f4.append(firstAreaArray[3]);
    first_f5.append(firstAreaArray[4]);
    first_f6.append(firstAreaArray[5]);

    console.log(firstAreaArray);
    console.log(secondAreaArray);
    console.log(thirdAreaArray);
}

// 첫번째 영역(빨간색 큰 네모 박스) 클릭시
function firstAreaClick() {
    if(isStart){
        if(isHold == true)
        {   
            if(point == 1){
                firstAreaArray.push(firstAreaArray.pop());
            } else if(point == 2){
                firstAreaArray.push(secondAreaArray.pop());
            } else if(point == 3){
                firstAreaArray.push(thirdAreaArray.pop());
            }
            isHold = false;
            console.log("첫번째 영역에서 내려놓기");
            putDown();
        } else if(isHold == false && firstAreaArray != null)
        {
            isHold = true;
            point = 1;
            console.log("첫번째 영역에서 들기");
        }
    }
}

// 두번째 영역(초록색 큰 네모 박스) 클릭시
function secondAreaClick() {
    if(isStart){
        if(isHold == true)
        {   
            if(point == 1){
                secondAreaArray.push(firstAreaArray.pop());
            } else if(point == 2){
                secondAreaArray.push(secondAreaArray.pop());
            } else if(point == 3){
                secondAreaArray.push(thirdAreaArray.pop());
            }
            isHold = false;
            console.log("두번째 영역에서 내려놓기");
            putDown();
        } else if(isHold == false && secondAreaArray != null)
        {
            isHold = true;
            console.log("두번째 영역에서 들기");
            point = 2;
        }
    }
}

// 세번째 영역(파란색 큰 네모 박스) 클릭시
function thirdAreaClick() {
    if(isStart){
        if(isHold == true)
        {   
            if(point == 1){
                thirdAreaArray.push(firstAreaArray.pop());
            } else if(point == 2){
                thirdAreaArray.push(secondAreaArray.pop());
            } else if(point == 3){
                thirdAreaArray.push(thirdAreaArray.pop());
            }
            isHold = false;
            console.log("세번째 영역에서 내려놓기");
            putDown();
        } else if(isHold == false && thirdAreaArray != null)
        {
            isHold = true;
            console.log("세번째 영역에서 들기");
            point = 3;
        }
    }
}

function putDown() {
    var first_f1 = document.getElementById('first_f1');
    var first_f2 = document.getElementById('first_f2');
    var first_f3 = document.getElementById('first_f3');
    var first_f4 = document.getElementById('first_f4');
    var first_f5 = document.getElementById('first_f5');
    var first_f6 = document.getElementById('first_f6');

    var second_f1 = document.getElementById('second_f1');
    var second_f2 = document.getElementById('second_f2');
    var second_f3 = document.getElementById('second_f3');
    var second_f4 = document.getElementById('second_f4');
    var second_f5 = document.getElementById('second_f5');
    var second_f6 = document.getElementById('second_f6');

    var third_f1 = document.getElementById('third_f1');
    var third_f2 = document.getElementById('third_f2');
    var third_f3 = document.getElementById('third_f3');
    var third_f4 = document.getElementById('third_f4');
    var third_f5 = document.getElementById('third_f5');
    var third_f6 = document.getElementById('third_f6');

    if(first_f1.firstChild != null) first_f1.removeChild(first_f1.firstChild);
    if(first_f2.firstChild != null) first_f2.removeChild(first_f2.firstChild);
    if(first_f3.firstChild != null) first_f3.removeChild(first_f3.firstChild);
    if(first_f4.firstChild != null) first_f4.removeChild(first_f4.firstChild);
    if(first_f5.firstChild != null) first_f5.removeChild(first_f5.firstChild);
    if(first_f6.firstChild != null) first_f6.removeChild(first_f6.firstChild);

    if(second_f1.firstChild != null) second_f1.removeChild(second_f1.firstChild);
    if(second_f2.firstChild != null) second_f2.removeChild(second_f2.firstChild);
    if(second_f3.firstChild != null) second_f3.removeChild(second_f3.firstChild);
    if(second_f4.firstChild != null) second_f4.removeChild(second_f4.firstChild);
    if(second_f5.firstChild != null) second_f5.removeChild(second_f5.firstChild);
    if(second_f6.firstChild != null) second_f6.removeChild(second_f6.firstChild);

    if(third_f1.firstChild != null) third_f1.removeChild(third_f1.firstChild);
    if(third_f2.firstChild != null) third_f2.removeChild(third_f2.firstChild);
    if(third_f3.firstChild != null) third_f3.removeChild(third_f3.firstChild);
    if(third_f4.firstChild != null) third_f4.removeChild(third_f4.firstChild);
    if(third_f5.firstChild != null) third_f5.removeChild(third_f5.firstChild);
    if(third_f6.firstChild != null) third_f6.removeChild(third_f6.firstChild);

    if(firstAreaArray[0] != null) first_f1.append(firstAreaArray[0]);
    if(firstAreaArray[1] != null) first_f2.append(firstAreaArray[1]);
    if(firstAreaArray[2] != null) first_f3.append(firstAreaArray[2]);
    if(firstAreaArray[3] != null) first_f4.append(firstAreaArray[3]);
    if(firstAreaArray[4] != null) first_f5.append(firstAreaArray[4]);
    if(firstAreaArray[5] != null) first_f6.append(firstAreaArray[5]);

    if(secondAreaArray[0] != null) second_f1.append(secondAreaArray[0]);
    if(secondAreaArray[1] != null) second_f2.append(secondAreaArray[1]);
    if(secondAreaArray[2] != null) second_f3.append(secondAreaArray[2]);
    if(secondAreaArray[3] != null) second_f4.append(secondAreaArray[3]);
    if(secondAreaArray[4] != null) second_f5.append(secondAreaArray[4]);
    if(secondAreaArray[5] != null) second_f6.append(secondAreaArray[5]);

    if(thirdAreaArray[0] != null) third_f1.append(thirdAreaArray[0]);
    if(thirdAreaArray[1] != null) third_f2.append(thirdAreaArray[1]);
    if(thirdAreaArray[2] != null) third_f2.append(thirdAreaArray[2]);
    if(thirdAreaArray[3] != null) third_f4.append(thirdAreaArray[3]);
    if(thirdAreaArray[4] != null) third_f5.append(thirdAreaArray[4]);
    if(thirdAreaArray[5] != null) third_f5.append(thirdAreaArray[5]);

    console.log("첫번째!");
    console.log(firstAreaArray);

    console.log("두번째!");
    console.log(secondAreaArray);

    console.log("세번째!");
    console.log(thirdAreaArray);
}