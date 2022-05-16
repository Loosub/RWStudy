var startSize=6; //limit 6

var firstArr = [];
var secondArr = [];
var thirdArr = [];

var save;
var savePosition;
var bisSaved = false;
var bisInit = false;
var bisClear = false;
var bclickOnce = false;
var startLength;

function OnClickDiv(Arr,Position)
{
    // console.log(savePosition,Position);
    if(!bisClear)
    {
        if(save)
        {
            if(Arr[Arr.length - 1] < save)
            {
                alert("더 작은 원반 위에 큰 원반을 올릴 수 없습니다.");
                savePosition.push(save);
                DrawScreen();
                save = null;
            }
            else
            {
                Arr.push(save);
                DrawScreen();
                save = null;
                ClearCheck();
            }
        }
        else if(bisInit==false)
        {
            alert("초기화를 하지 않았습니다.");
        }
        else
        {
            savePosition = Arr;
            save=Arr.pop();
            DrawScreen();
        }
    }
}

 function ClearCheck()
 {
    if(thirdArr.length == startLength)
    {
        bisClear = true;
        const clearTextelement = document.getElementById("clearText");
        clearTextelement.innerHTML = "클리어!";
    }
 }
 function FirstArrInit(value)
 {
    for(var i=value;i>=1;i--)
    {
        console.log(value);
        firstArr.push(i);
        startLength += 1;
    }
 }
 function Init()
{
    bisInit = true;
    save = null;
    savePosition = null;
    bisSaved = false;
    bisClear = false;
    startLength = 0;
    const clearTextelement = document.getElementById("clearText");
    clearTextelement.innerHTML = "　";
    
    firstArr = [];
    secondArr = [];
    thirdArr = [];
    FirstArrInit(startSize);

    const element = document.querySelector(".first");
    DrawScreen();
 }

 function DrawScreen()
 {
    const firstElement = document.getElementById("first");
    const secondElement = document.getElementById("second");
    const thirdElement = document.getElementById("third");

    firstElement.innerHTML="first";
    firstArr.forEach(function(i){
        firstElement.innerHTML += FindMatchInnerHTML(i);
    });

    secondElement.innerHTML="second";
    secondArr.forEach(function(i){
        secondElement.innerHTML += FindMatchInnerHTML(i);
    });

    thirdElement.innerHTML="third";
    thirdArr.forEach(function(i){
         thirdElement.innerHTML += FindMatchInnerHTML(i);
    });
 }

 function FindMatchInnerHTML(i)
 {
    switch(i){
        case 1:
            return "<p>⬛</p>";
        case 2:
            return "<p>🟪🟪🟪</p>";
        case 3:
            return "<p>🟦🟦🟦🟦🟦</p>";
        case 4:
            return "<p>🟩🟩🟩🟩🟩🟩🟩</p>";
        case 5:
            return "<p>🟨🟨🟨🟨🟨🟨🟨🟨🟨</p>";
        case 6:
            return "<p>🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥</p>";
    }
    return;
 }