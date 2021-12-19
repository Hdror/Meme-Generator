'use strict'

var gIsGalleryShown = true

function onImgSelect(imgId) {
    setImg(imgId)
    renderMeme()
    document.querySelector('.gallery-container').classList.toggle("active")
    document.querySelector('.editor-container').classList.toggle("active")
    document.querySelector('.about').classList.toggle("active")
    gIsGalleryShown = false
    // drawImgFromlocal(img, 0, 0, gCanvas.width, gCanvas.height)
}

function onGallery() {
    if (gIsGalleryShown) return
    document.querySelector('.gallery-container').classList.toggle("active")
    document.querySelector('.editor-container').classList.toggle("active")
    document.querySelector('.about').classList.toggle("active")
    gIsGalleryShown = true
}