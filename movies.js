const axios = require('axios');
const mymovies = {
    api: () => axios.get('https://reactnative.dev/movies.json')
        .then(response => {
            return response.data;
        })

}

module.exports = mymovies;