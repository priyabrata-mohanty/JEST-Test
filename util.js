const { fetchData } = require('./http');
const { postData } = require('./http');

const loadTitle = () => {
    return fetchData().then(extractedData => {
        const title = extractedData.title;
        const transformedTitle = title.toUpperCase();
        return transformedTitle;
    });
};

const loadPost = () => {
    return postData().then(extractedData => {
        return extractedData;
    });
}

exports.loadTitle = loadTitle;
exports.loadPost = loadPost;