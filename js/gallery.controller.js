'use strict'

function onImgSelect(imgId) {
    setImg(imgId)
    renderMeme()
    document.querySelector('.gallery-container').classList.toggle("active")
    document.querySelector('.editor-container').classList.toggle("active")
    document.querySelector('.about').classList.toggle("active")
    // drawImgFromlocal(img, 0, 0, gCanvas.width, gCanvas.height)
}

function onGallery(){
     document.querySelector('.gallery-container').classList.toggle("active")
     document.querySelector('.about').classList.toggle("active")
    document.querySelector('.editor-container').classList.toggle("active")
}