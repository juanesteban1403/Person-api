import Person from '../models/Person'

export async function createPerson(req, res) {
    const { fullname, birthdate, father, mother } = req.body;

    try {
        let fatherCount = await Person.count({ where: {id: father} })
        let motherCount = await Person.count({ where: {id: mother} })
        if (fatherCount == 0){
            return res.status(404).json({
                message: "father does not exist"
            })}
        if (motherCount== 0){
            console.log(motherCount)
            return res.status(404).json({
                message: "mother does not exist"
            })}
        let [newPerson, created] = await Person.findOrCreate({
            where: {
                fullname,
                birthdate,
                father,
                mother
            },
            fields : ["fullname", "birthdate", "father", "mother"]
        }
        );
        if (created) {
            return res.status(200).json({
                message: "Person created successfully",
                data: newPerson
            })
        }
        else{
            return res.status(200).json({
                message: "Person already exist",
                data:{}
            })
        }
    } catch (error) {
        res.status(400).json({
            message: "Please check fields",
            data: {}
        })
    }
}

export async function getPersons(req, res) {
    try {
        const Persons = await Person.findAll();
        res.status(200).json({
            data: Persons
        })
    } catch (error) {
        console.log(error);
    }
    const Persons = await Person.findAll();
    res.status(200).json({
        data: Persons
    })
}

export async function getOnePerson(req, res) {
    const { id } = req.params
    try {
        const person = await Person.findOne({
            where: {
                id
            }
        });
        res.status(200).json({
            data: person
        })
    } catch (error) {
        res.status(400)
    }
    const Persons = await Person.findAll();
    res.status(200).json({
        data: Persons
    })
}

export async function deleteOnePerson(req,res){
    const{id}=req.params
    try {
        let  deletedRowCount= await Person.destroy({
            where:{
                id
            }
        })
        res.status(200).json({
            message: "Person deleted succesfully",
            count: deletedRowCount
        })
    } catch (error) {
        res.status(400).json({
            message:"Person not found"
        })
    }

}
