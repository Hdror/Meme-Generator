'use strict'

var gCanvas
var gCtx


function onInit() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    console.log('ctx', gCtx);
    createMeme()
    createImgs()
    // clearCanvas()
    // resizeCanvas()
    // addListeners()
    renderGallery()
    renderMeme()

}

function renderMeme() {
    const meme = getMeme()
    drawImgFromlocal(meme)
}

function renderGallery() {
    const imgs = getImgs()
    const strHtml = imgs.map(img => {
        return `<img onclick="onImgSelect(${img.id})" src="meme-imgs(square)/${img.id}.jpg" alt="">`
    })
    document.querySelector('.gallery-container').innerHTML = strHtml.join('')
}

function drawText(txt, x, y, lineIdx) {
    const meme = getMeme()
    gCtx.textBaseline = 'middle'
    gCtx.textAlign = meme.lines[lineIdx].align
    gCtx.lineWidth = 1
    gCtx.font = `${meme.lines[lineIdx].size}px impact`
    gCtx.fillStyle = meme.lines[lineIdx].color
    gCtx.strokeStyle = meme.lines[lineIdx].stroke
    gCtx.fillText(txt, x, y)
    gCtx.strokeText(txt, x, y)
}

function drawImgFromlocal(meme) {
    // const txt = meme.lines[meme.selectedLineIdx].txt
    const currImg = getImgById(meme.selectedImgId)
    console.log(currImg);
    var img = new Image()
    img.src = currImg.url
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
        meme.lines.map((line, idx) => {
            return drawText(line.txt, line.posX, line.posY, idx)
        })
    }
}

function getCanvas(){
    return gCanvas
}

function onChangeTxt(txt) {
    setLineText(txt)
    renderMeme()
}

function onTxtColorChange(color) {
    setTextColor(color)
    renderMeme()
}

function onStrokeColorChange(color) {
    setStrokeColor(color)
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

function onAlignLeft() {
    setAlignLeft()
    renderMeme()
}

function onAlignCenter() {
    setAlignCenter()
    renderMeme()
}

function onAlignRight() {
    setAlignRight()
    renderMeme()
}

function onAddLine() {
    addLine()
    renderMeme()
}

function onDeleteLine() {
    deleteLine()
    renderMeme()
}

function onMoveLine(isUp) {
    setLinePos(isUp)
    renderMeme()
}