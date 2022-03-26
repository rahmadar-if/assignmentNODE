const Pet = require('../model/pet')

class controllerPet {

    static getPet(req, res) {
        res.status(200).json(Pet.getPet())
    }
    
    static createPet(req, res) {
        const data = req.body
        if (!data.id) {
            res.status(400).json({ message: 'Id is required!'})
            return false; // XXX false supaya data tidak tercreate walau tidak tervalidasi
        }
        
        const existingId = Pet.findById(data.id)
        if (existingId) {
            res.status(400).json({ message: 'Id is already exist!'})
            return false; // XXX false supaya data tidak tercreate walau tidak tervalidasi
        }
        
        Pet.create(data)
        res.status(201).json(data)
    }
    

}

module.exports = controllerPet