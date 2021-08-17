const sharp = require('sharp');

const {getImagePosition, getMockupOrientation} = require('./utils');

const mergeImages = (data, info) => sharp(getMockupOrientation(info))
        .composite([{ input: data, ...getImagePosition(info) }])
        .toFile(`./images/bird${info.size}.jpg`)
        .catch(err => {console.log(err)});

module.exports = mergeImages;


