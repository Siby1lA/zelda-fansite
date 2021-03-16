const btnVideo = document.querySelector(".trailer-video");
const trailerVideo = document.querySelector(".trailer-movies");
const delBtn = trailerVideo.querySelector(".delBtn");



function onClickVideo(e){
    trailerVideo.style.display = 'flex';
}
function onClickDelBtn(e){
    trailerVideo.style.display = 'none';
}


function init(){
    btnVideo.addEventListener('click', onClickVideo);
    delBtn.addEventListener('click', onClickDelBtn);
}

init();