'use strict'

var gImgNextId = 1
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
    const meme = getMeme()
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