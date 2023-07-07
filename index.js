
let mySong = new Audio("song/music.mp3");
let icon = document.getElementById("icon");

icon.addEventListener("click", function() {
    if(mySong.paused){
        mySong.play();
        icon.setAttribute("src", "img/pause.png");
    } else{
        mySong.pause();
        icon.setAttribute("src", "img/play.png");
    }
});