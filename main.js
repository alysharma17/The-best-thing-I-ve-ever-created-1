var canvas=new fabric.Canvas("mycanvas");
var player_x=10;
var player_y=10;
var player_object="";
block_image_width=30;
block_image_height=30;
block_image_object="";

function player_update() {
fabric.Image.fromURL("player.png", function(Img){
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(150);
player_object.set({
    top:player_y, left:player_x
});
canvas.add(player_object);
});

}
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
block_image_object=Img;
block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_height);
block_image_object.set({
    top:player_y, left:player_x
}); 
canvas.add(block_image_object);
} 
);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    var keypress=e.keyCode;
    console.log(keypress);
    if (keypress=='38') {
       up();
       console.log("up");
    }
    if (keypress=='40') {
        down();
        console.log("down");
    }
    if (keypress=='37') {
        left();
        console.log("left");
    }
    if (keypress=='39') {
       right();
       console.log("right");
    }
    if (keypress=='87') {
new_image('wall.jpg');
    }
    if (keypress=='71') {
        new_image("ground.png");
        console.log("g");
    }
    if (keypress=='76') {
new_image("light_green.png");
console.log("l");
    }
    if (keypress=='84') {
        new_image("trunk.jpg");
        console.log("t");
    }
    if (keypress=='82') {
        new_image("roof.jpg");
        console.log("r");
    }
    if (keypress=='89') {
        new_image("yellow_wall.png");
    console.log("y");
    }
    if (keypress=='68') {
        new_image("dark_green.png");
        console.log("d");
    }
    if (keypress=='85') {
        new_image("unique.png");
        console.log("u");
    }
    if (keypress=='67') {
        new_image("cloud.jpg"); //this and the one above it are the only things that even come 
        console.log("c");
    }
    if (e.shiftKey==true && keypress=="80") {
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
        console.log("shift+p")
    }
    if (e.shiftKey==true && keypress=="77") {
        block_image_height=block_image_height+10;
        block_image_width=block_image_width+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
        console.log("shift+m");
    }
}
function up() {
    if (player_y>=0) {
        player_y=player_y-block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}
function down() {
    if (player_y<=500) {
        player_y=player_y+block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}
function left() {
    if (player_x>=0) {
        player_x=player_x-block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}
function right() {
    if (player_x<=0) {
        player_x=player_x+block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}