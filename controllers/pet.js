const Pet = require('../model/pet')
const db = require('../config/db')
const fs = require('fs');

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
    

    // ADD PET
    static addPet(req, res) {
        let values=[req.body.id,
            req.body.name,
            req.body.category,
            req.body.status];
        

        db.query(Pet.addPet(),[values],(err)=>{
            if(err){
                res.status(400).json(err)
                return
            }
            const data = req.body
                res.status(201)
                res.send(data)
        })
        
    }

}

module.exports = controllerPet