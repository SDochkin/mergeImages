const simpleSizes = {
    hWidth: 1060,
    hHeight: 772,
    vWidth: 503,
    vHeight: 660
}
const params = {
    imageParams: {
        horizontal: {width: null, height: simpleSizes.hHeight, fit: 'outside'},
        vertical: {width: simpleSizes.vWidth, height: null, fit: 'outside'},
    },
    mockupParams: {
        horizontal: {top: 369, left: 697},
        vertical: {top: 130, left: 383}
    },
    mockups: {
        horizontal: './images/horizontalMockup.jpg',
        vertical: './images/verticalMockup.jpg'
    },
    cropParams: {
        horizontal: simpleSizes.hWidth,
        vertical: simpleSizes.vHeight
    }
}

module.exports = {params, simpleSizes}
