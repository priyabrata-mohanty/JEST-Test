const axios = require('axios');

const fetchData = ()=>{
    console.log('Fetching Data....');
    return axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(res=>res.data)
    .catch(err=>'error')

}

const postData = ()=>{
    console.log('Posting Data....');
    return axios
    .post('https://jsonplaceholder.typicode.com/todos/1',{"name":"priyabrata"})
    .then(res=>res.data)
    .catch(err=>'error')

}

exports.fetchData = fetchData;
exports.postData = postData;