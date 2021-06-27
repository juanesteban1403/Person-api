import { Router } from "express";
const router = Router();


import {createPerson,getPersons,getOnePerson, deleteOnePerson} from '../controllers/person.controller'

// /api/person/
router.post('/',createPerson )
router.get('/',getPersons)
// /api/person/:id
router.get('/:id',getOnePerson)
router.delete('/:id',deleteOnePerson)

export default router;