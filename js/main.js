const btnVideo = document.querySelector(".trailer-video");
const trailerVideo = document.querySelector(".trailer-movies");


function onClick(e){
    trailerVideo.style.display = 'flex';
}


function init(){
    btnVideo.addEventListener('click', onClick);
}

init();