const sharp = require('sharp');

const mergeImages = require("./mergeImages");
const {calculatePadding, getExtractParams} = require("./utils");

const extractCenter = (data, info, isHorizontal) => {
    const padding = calculatePadding(info, isHorizontal);
    const extractParams = getExtractParams(padding, isHorizontal);

    return sharp(data)
        .extract(extractParams)
        .toBuffer({resolveWithObject: true})
        .then(({data, info}) => {
            mergeImages(data, info);
        })
        .catch(err => {
            console.log(err)
        });
}

module.exports = extractCenter;
