'use strict'

var gImgNextId = 0
var gImgs = []

function getImgs() {
    return gImgs
}

function getImgById(imgId) {
    const img = gImgs.find(function (img) {
        return imgId === img.id
    })
    return img
}

function setImg(imgId) {
    var meme = getMeme()
    meme.selectedImgId = imgId
}

function createImgs() {
    gImgs = [
        createImg('political', 'trump'),
        createImg('political', 'trump'),
        createImg('political', 'trump'),
        createImg('political', 'trump'),
        createImg('political', 'trump'),
        createImg('political', 'trump'),
        createImg('political', 'trump'),
        createImg('political', 'trump'),
        createImg('political', 'trump'),
        createImg('political', 'trump'),
        createImg('political', 'trump'),
        createImg('political', 'trump'),
        createImg('political', 'trump'),
        createImg('political', 'trump'),
        createImg('political', 'trump'),
        createImg('political', 'trump'),
        createImg('political', 'trump'),
        createImg('political', 'trump')
    ]
}

function createImg(...keys) {
    return {
        id: gImgNextId++,
        url: `./meme-imgs(square)/${gImgNextId}.jpg`,
        keywords: keys
    }
}