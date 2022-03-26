const Pet = require('../model/pet')
const fs = require('fs')

class controllerPet {
    static getPet(req, res) {
        res.status(200).json(pet.getPet())
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

    // static login(req, res) {
    //     const dataUser = req.body
    //     // user input email dan password
    //     // email sama gak kayak di db? password sama gak kayak di db?
    //     if (dataUser.password == 'dibimbing') {
    //         // password benar, bakal dikasih token
    //         const token = jwt.sign({
    //             name: dataUser.name
    //         }, 'BelajarNodeJs')

    //         res.status(200).json( { token })

    //     } else {
    //         res.status(401).json({ message: 'Unauthorized!'})
    //     }
    // }

}

module.exports = controllerPet