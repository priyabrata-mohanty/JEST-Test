const get = (url)=>{
    return Promise.resolve( {data:{title:"delectus aut autem"}})
}

const post = (url,params)=>{
    return Promise.resolve( {data:params})
}

exports.get = get;
exports.post = post;
