

const request = require('supertest')
const app =require ('../app')



const api= supertest(app)

//testing get all Person

it('respond with json cotaining a list of all person', done =>{
    request(app)
        .get('/')
        .set('application/json')
        .expept('Content-Type', /json/)
        .expept(200, done)
})