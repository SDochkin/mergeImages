const sharp = require('sharp');

const cropImageForMockup = require('./cropImageForMockup');
const {isImageHorizontal, getResizeDirection} = require('./utils');

const main = async (img) => {
    const image = sharp(img);
    const isHorizontal = await isImageHorizontal(image);

    return image
        .toBuffer({resolveWithObject: true})
        .then(({data, info}) => {
            const direction = getResizeDirection(isHorizontal, info);
            cropImageForMockup(data, image, isHorizontal, direction);
        })
        .catch(err => {
            console.log(err);
        });
};

module.exports = main;
