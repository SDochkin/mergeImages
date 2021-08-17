const {params, simpleSizes} = require("./constants");

const getImagePosition = (info) => info.width > info.height
    ? params.mockupParams.horizontal
    : params.mockupParams.vertical;

const getMockupOrientation = (info) => info.width > info.height
    ? params.mockups.horizontal
    : params.mockups.vertical;

const getHResizeParameters = (direction) => direction
    ? {width: simpleSizes.hWidth, height: null}
    : {width: null, height: simpleSizes.hHeight};

const getVResizeParameters = (direction) => direction
    ? {width: simpleSizes.vWidth, height: null}
    : {width: null, height: simpleSizes.vHeight};

const isImageHorizontal = async (image) => await image.metadata()
    .then((metadata) => metadata.width > metadata.height)
    .catch((err) => console.log(err));

const calculatePadding = (info, isHorizontal) => isHorizontal
    ? Math.floor((info.width - params.cropParams.horizontal) / 2)
    : Math.floor((info.height - params.cropParams.vertical) / 2);

const getExtractParams = (padding, isHorizontal) => isHorizontal
    ? {left: padding, top: 0, width: simpleSizes.hWidth, height: simpleSizes.hHeight}
    : {left: 0, top: padding, width: simpleSizes.vWidth, height: simpleSizes.vHeight};

const getResizeDirection = (isHorizontal, {width, height}) => {
    const hMockupRatio = simpleSizes.hWidth / simpleSizes.hHeight;
    const vMockupRatio = simpleSizes.vWidth / simpleSizes.vHeight;
    const imageRatio = width / height;
    return isHorizontal ? hMockupRatio > imageRatio : vMockupRatio > imageRatio;
}

module.exports = {
    getImagePosition,
    getMockupOrientation,
    getHResizeParameters,
    getVResizeParameters,
    isImageHorizontal,
    calculatePadding,
    getExtractParams,
    getResizeDirection
}
