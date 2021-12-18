'use strict'
var gMeme

function createMeme() {
    var canvas = getCanvas()
    gMeme = {
        selectedImgId: 1,
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'Text Line',
                size: 40,
                align: 'center',
                ftr:'rlt',
                color: 'white',
                stroke: 'black',
                posX: canvas.width / 2,
                posY: 80,
                font: 'Impact'
            },
            {
                txt: 'Text Line',
                size: 40,
                align: 'center',
                color: 'white',
                stroke: 'black',
                posX: canvas.width / 2,
                posY: canvas.height-80,
                font: 'Impact'
            },
        ]

    }

}

function setFont(font){
    gMeme.lines[gMeme.selectedLineIdx].font = font
}


function setLineText(value) {
    if (!gMeme.lines.length) return
    gMeme.lines[gMeme.selectedLineIdx].txt = value
}

function getMeme() {
    return gMeme
}

function setStrokeColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].stroke = color
}

function setTextColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function updateTxtSize(value) {
    console.log(value);
    gMeme.lines[gMeme.selectedLineIdx].size += value
}

function setSelectedLineIdx() {
    var lineIdx = gMeme.selectedLineIdx
    console.log(lineIdx);
    console.log(gMeme.lines.length);
    if (lineIdx >= gMeme.lines.length - 1 || lineIdx < 0) gMeme.selectedLineIdx = 0
    else gMeme.selectedLineIdx++


}


function setAlignLeft() {
    gMeme.lines[gMeme.selectedLineIdx].align = 'right'
}

function setAlignCenter() {
    gMeme.lines[gMeme.selectedLineIdx].align = 'center'
}

function setAlignRight() {
    gMeme.lines[gMeme.selectedLineIdx].align = 'left'
}

function addLine() {
    var linesLength = gMeme.lines.length
    var posY = (gMeme.lines.length <= 2) ? 80 : gMeme.lines[linesLength - 2].posY + 40
    gMeme.lines.splice(linesLength - 1, 0, {
        txt: 'text line',
        size: 40,
        align: 'center',
        color: 'white',
        posX: gCanvas.width / 2,
        posY,
    })
    gMeme.selectedLineIdx = (gMeme.lines.length <= 1) ? 0 : gMeme.lines.length - 2
}

function deleteLine() {
    gMeme.lines.splice([gMeme.selectedLineIdx], 1)
    gMeme.selectedLineIdx = (gMeme.lines.length <= 1) ? 0 : gMeme.selectedLineIdx - 1
}

function setLinePos(isUp) {
    if (isUp) gMeme.lines[gMeme.selectedLineIdx].posY -= 5
    else gMeme.lines[gMeme.selectedLineIdx].posY += 5
}

function getLineSizeById(line){
    let metrics = gCtx.measureText(line.txt);
    let width = metrics.width;
    let height = line.size;
    return {width, height};
}

