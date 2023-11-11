const reqSvgs = require.context('./assets/', true, /\.svg$/, 'sync');

const icons = reqSvgs.keys().reduce((svgs, path) => {
  const key = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'));
  svgs[key] = reqSvgs(path).default;
  return svgs;
}, {});

exports.icons = icons;
