'use strict'

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 35,
            align: 'left',
            color: 'white',
            stroke: 'black',
            posX: 40,
            posY: 40,
        },
        {
            txt: '',
            size: 35,
            align: 'left',
            color: 'white',
            stroke: 'black',
            posX: 40,
            posY: 350,
        },
    ]

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
    if (lineIdx > gMeme.lines.length - 1 && !(lineIdx - 1 < 0)) gMeme.selectedLineIdx = 0
    else gMeme.selectedLineIdx++


}


function setAlignLeft() {
    gMeme.lines[gMeme.selectedLineIdx].align = 'end'
}

function setAlignCenter() {
    gMeme.lines[gMeme.selectedLineIdx].align = 'center'
}

function setAlignRight() {
    gMeme.lines[gMeme.selectedLineIdx].align = 'start'
}

function addLine() {
    // if (gMeme.lines[gMeme.selectedLineIdx].txt === '') return
    // if (gMeme.lines.length > 2) return
    var linesLength = gMeme.lines.length
    var posY = (gMeme.lines.length <= 2) ? 80 : gMeme.lines[linesLength - 2].posY + 40
    gMeme.lines.splice(linesLength - 1, 0, {
        txt: 'text line',
        size: 35,
        align: 'center',
        color: 'white',
        posX: gCanvas.width / 2,
        posY,
    })
    gMeme.selectedLineIdx = gMeme.lines.length - 2
}

function deleteLine() {
    gMeme.lines.splice([gMeme.selectedLineIdx], 1)
    gMeme.selectedLineIdx--
}

function setLinePos(isUp) {
    if (isUp) gMeme.lines[gMeme.selectedLineIdx].posY -= 5
    else gMeme.lines[gMeme.selectedLineIdx].posY += 5
}

