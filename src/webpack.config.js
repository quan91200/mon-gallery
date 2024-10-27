const path = require('path');

module.exports = {
    entry: './src/index.js', // Điểm vào chính của ứng dụng
    output: {
        path: path.resolve(__dirname, 'dist'), // Thư mục đầu ra
        filename: 'bundle.js', // Tên file đầu ra
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[hash].[ext]', // Cấu hình tên file
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    mode: 'development', // Chế độ phát triển
};
