const express =require('express')
const Router = express.Router();
const createPerson = require ('../controllers/person.controller');
const getPersons = require ('../controllers/person.controller');
const getOnePerson = require ('../controllers/person.controller');
const deleteOnePerson = require ('../controllers/person.controller');




function personAPI(app) {
    const router = Router();
    app.use("/api/person", router);
    // /api/person/
    router.post('/', createPerson)
    router.get('/', getPersons)
    // /api/person/:id
    router.get('/:id', getOnePerson)
    router.delete('/:id', deleteOnePerson)
}
module.export = personAPI;
