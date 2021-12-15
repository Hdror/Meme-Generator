'use strict'

var gCanvas
var gCtx
// var gMeme = getMeme()


function onInit() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    console.log('ctx', gCtx);
    // clearCanvas()
    // resizeCanvas()
    // addListeners()
    renderMeme()
    renderGallery()

}

function renderMeme() {
    const meme = getMeme()
    // const gCanvas = document.querySelector('#my-canvas')
    drawImgFromlocal(meme)


}

function renderGallery() {
    const imgs = getImgs()
    const strHtml = imgs.map((img, idx) => {
        return `<img onclick="onImgSelect(${img.id})" src="meme-imgs(square)/${img.id}.jpg" alt="">`
    })
    document.querySelector('.gallery-container').innerHTML = strHtml.join('')
}

function drawText(txt, x, y) {
    const meme = getMeme()
    // gCtx.textBaseline = 'middle';
    // gCtx.textAlign = 'center';
    const lineIdx = meme.selectedLineIdx
    gCtx.lineWidth = 2;
    gCtx.font = `${meme.lines[lineIdx].size}px IMPACT`
    gCtx.fillStyle = meme.lines[lineIdx].color;
    gCtx.fillText(txt, x, y);
}

function drawImgFromlocal(meme) {
    const txt = meme.lines[meme.selectedLineIdx].txt
    const currImg = getImgById(meme.selectedImgId)
    var img = new Image()
    img.src = currImg.url
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
        const line = meme.lines.map(line => {
           return drawText(line.txt, line.posX,line.posY)
        })
    }
}

function onChangeTxt(txt) {
    // console.log(txt);
    setLineText(txt)
    renderMeme()
}

function onTxtColorChange(color) {
    const meme = getMeme()
    const txt = meme.lines[meme.selectedLineIdx].txt
    setTextColor(color)
    gCtx.fillStyle = color
    //    drawText(txt, 20, 60)
    renderMeme()
}

function onChangeTxtSize(value) {
    console.log(value);
    updateTxtSize(value)
    renderMeme()
}

function onChangeLine() {
    setSelectedLineIdx()
}