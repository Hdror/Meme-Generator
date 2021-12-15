'use strict'


var gImgs = [
    { id: 1, url: '/meme-imgs(square)/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: '/meme-imgs(square)/2.jpg', keywords: ['funny', 'cat'] }
]

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            align: 'left',
            color: 'red',
            posX: 40,
            posY: 40,
        },

        {
            txt: 'I never eat Falafel',
            size: 20,
            align: 'left',
            color: 'red',
            posX: 40,
            posY: 380

        },
    ]

}

function getImgs() {
    return gImgs
}

function getImgById(imgId) {
    const img = gImgs.find(function (img) {
        console.log(imgId);
        return imgId === img.id
    })
    console.log(img);
    return img
}

function setLineText(value) {
    const meme = getMeme()
    gMeme.lines[gMeme.selectedLineIdx].txt = value
}

function getMeme() {
    return gMeme
}

function setTextColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function updateTxtSize(value) {
    console.log(value);
    gMeme.lines[gMeme.selectedLineIdx].size += value
}

function setSelectedLineIdx() {
    var selectedLineIdx = gMeme.selectedLineIdx
    if (selectedLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
    else gMeme.selectedLineIdx++
}


