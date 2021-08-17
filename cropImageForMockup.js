const sharp = require('sharp');

const extractCenter = require("./extractCenter");
const {getHResizeParameters, getVResizeParameters} = require('./utils');

const cropImageForMockup = (data, image, isHorizontal, direction) => sharp(data)
    .resize(isHorizontal ? getHResizeParameters(direction) : getVResizeParameters(direction))
    .toBuffer({resolveWithObject: true})
    .then(({data, info}) => {
        extractCenter(data, info, isHorizontal)
    })
    .catch(err => {
        console.log(err)
    });

module.exports = cropImageForMockup;
