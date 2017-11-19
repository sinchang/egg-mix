const manifest = require('../public/mix-manifest.json');

exports.mix = (resource) => {
  return `${manifest[resource]}`;
};
