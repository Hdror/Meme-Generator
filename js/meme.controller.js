'use strict'

let gCanvas
let gCtx


function onInit() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    console.log('ctx', gCtx);
    createMeme()
    createImgs()
    addEventListener()
   
    // clearCanvas()s
    // resizeCanvas()
    // addListeners()
    renderGallery()
    renderMeme()
    
}

function addEventListener(){
    const canvas = document.querySelector('.canvas-container')
    canvas.addEventListener('resize',resizeCanvas())
    //     var width  = 300
    //     var height = 300
    //     gCtx.canvas.width  = width;
    //     gCtx.canvas.height = height;
    //     gCtx.translate(width/2,height/2); // now 0,0 is the center of the canvas.
    //   },false)
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container');

    // Note: changing the canvas dimension this way clears the canvas
    gCanvas.width = elContainer.offsetWidth;
    // Unless needed, better keep height fixed.
      gCanvas.height = elContainer.offsetHeight
  }

function toggleMenu() {
    document.body.classList.toggle('menu-open');
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
    // gCtx.textBaseline = 'middle'
    gCtx.textAlign = meme.lines[lineIdx].align
    gCtx.lineWidth = 4
    gCtx.lineJoin = 'round'
    gCtx.font = `${meme.lines[lineIdx].size}px ${meme.lines[lineIdx].font}`
    gCtx.fillStyle = meme.lines[lineIdx].color
    gCtx.strokeStyle = meme.lines[lineIdx].stroke
    gCtx.fillText(txt, x, y)
    gCtx.strokeText(txt, x, y)
}

function drawImgFromlocal(meme) {
    const currImg = getImgById(meme.selectedImgId)
    var img = new Image()
    img.src = currImg.url
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
        meme.lines.map((line, idx) => {
            return drawText(line.txt, line.posX, line.posY, idx)
        })
    }
}

function drawRectLine(idx) {
    let line = getLineById(idx);
    let lineSize = getLineSizeById(line);
    let lineXStart = line.x - lineSize.width / 2 - 10;
    let lineYStart = line.y - line.size - 5;
    let lineXEnd = lineSize.width + 20;
    let lineYEnd = line.size + 20;
    if (line.align === 'left') {
        lineXStart += lineSize.width / 2;
        lineXEnd += lineSize.width / 2;
    }
    if (line.align === 'right') {
        lineXStart -= lineSize.width / 2;
        lineXEnd -= lineSize.width / 2;
    }
    gCtx.beginPath()
    gCtx.rect(lineXStart, lineYStart, lineXEnd, lineYEnd)
    gCtx.strokeStyle = '#799ff7'
    gCtx.stroke()
    gCtx.closePath();
}

function onDownloadCanvas(elLink) {
    elLink.href = gCanvas.toDataURL();
    elLink.download = 'my-img.png';
}

function getCanvas() {
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

function onChangeFont(font) {
    setFont(font)
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