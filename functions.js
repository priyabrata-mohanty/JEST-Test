const axios = require('axios');
const http = require('./http');
const functions = {
    add:(a,b)=>{
        return a+b;
    },
    fetchUser:()=> axios.get('https://jsonplaceholder.typicode.com/users/2')
    .then(res=>res.data)
    .catch(err=>'error')
}

module.exports = functions;