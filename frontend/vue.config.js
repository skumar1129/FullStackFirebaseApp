const API_URL = require('./config');

module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: API_URL,
                pathRewrite: {'^/api' : ''},
                changeOrigin: true
            }
        }
    }
}