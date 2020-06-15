// jest.mock('./http')
const axios = require('axios');
const functions = require('./functions');

const {loadTitle} = require('./util');
const {loadPost} = require('./util');


const movies = require('./movies');
const mymovies = require('./movies');

test('Add two numbers', () => {
    expect(functions.add(2, 3)).toBe(5);
});

test('call get method',()=>{
    
    loadTitle().then(title=>{
        expect(title).toBe("DELECTUS AUT AUTEM");
    })
})

test('call postmethod',()=>{
    
    loadPost().then(body=>{
        console.log('body')
        console.log(body)
        expect(body).toEqual({"name":"priyabrata"});
    })
    
})
