const path = require('path')

module.exports = {
    entry: './src/index.tsx',
    //webpack-dev-serverのホットリロードを有効にするために追加
    watch: true,
    watchOptions: {
        // 最初の変更からここで設定した期間に行われた変更は1度の変更の中で処理が行われる
        aggregateTimeout: 200,
        // ポーリングの間隔
        poll: 1000
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: 'dist/',
    },
    devServer: {
        publicPath: '/dist/',
        hot: true,
        open: true,
        host: '0.0.0.0',
    }
}