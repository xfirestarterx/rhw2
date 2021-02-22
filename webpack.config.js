const merge = require('webpack-merge');

const commonConf = require('./webpack.config.common');
const devConf = require('./webpack.config.dev');
const prodConf = require('./webpack.config.prod');
const mode = process.env.NODE_ENV;

module.exports = () => {
    if (mode === 'production') {
        return merge.smart(commonConf, prodConf, { mode });
    }

    return merge.smart(commonConf, devConf, { mode })
}
