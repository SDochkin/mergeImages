const sharp = require('sharp');

const cropImageForMockup = require('./cropImageForMockup');
const {isImageHorizontal, getResizeDirection, downloadImageByUrl} = require('./utils');

const main = async (img) => {
    const picture = await downloadImageByUrl(img);
    const image = sharp(picture);
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
