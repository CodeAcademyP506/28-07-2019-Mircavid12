var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.rect(5,25,420,305)
ctx.globalAlpha = 0.6;
ctx.fillStyle = "white";
ctx.fillRect(5,25,420,305);





$("#pause").hide();

var mahni = document.getElementById("musiqi");
var play = document.getElementById("play");
var pause = document.getElementById("pause");
var volume = document.getElementById("myvolume")
var playing = document.getElementById("playing");

play.addEventListener("click",function(){
    mahni.play();
    $("#pause").show();
    $("#play").hide();

})

pause.addEventListener("click",function(){
    mahni.pause(); 
    $("#pause").hide();
    $("#play").show();
})


music_photo();

function music_photo()
{
  base_image = new Image();
  base_image.src = 'img.jpg';
  base_image.onload = function(){
    ctx.drawImage(base_image, 50,50,120,120);

  }
}

volume.addEventListener("change",function(){
    mahni.volume = this.value / 100
})