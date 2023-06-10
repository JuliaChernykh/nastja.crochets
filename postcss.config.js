module.exports = {
    plugins: {
        'postcss-nested': {},
        'postcss-preset-env': {
            stage: 3,
            features: {
                'custom-media-queries': {
                    importFrom: './src/styles/media.css',
                },
                'gap-properties': true
            }
        }
    },
}
