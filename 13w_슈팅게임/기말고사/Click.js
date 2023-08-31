const canvas = document.getElementById('main_canvas');
var context = canvas.getContext('2d');

canvas.onclick = function(event){
    const x = event.clientX - ctx.canvas.offsetLeft;
    const y = event.clientY - ctx.canvas.offsetTop;
}

