canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_position_x;
var last_position_y;
color="red";
width_line=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e) {
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e) {
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e) {
    current_positionOf_mouse_x=e.clientX-canvas.offsetLeft;
    current_positionOf_mouse_y=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_line;
        console.log("Last position of x and y coordinates= ");
        console.log("x= "+last_position_x+"y= "+last_position_y);
        ctx.moveTo(last_position_x,last_position_y);
        console.log("Current position of x and y coordinates= ");
        console.log("x= "+current_positionOf_mouse_x+"y= "+current_positionOf_mouse_y);
        ctx.lineTo(current_positionOf_mouse_x,current_positionOf_mouse_y);
        ctx.stroke();
    }
    last_position_x=current_positionOf_mouse_x;
    last_position_y=current_positionOf_mouse_y;
}
