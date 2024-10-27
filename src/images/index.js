const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
};

const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/)); // Thay thế `./` bằng thư mục ảnh của bạn
export default images;
