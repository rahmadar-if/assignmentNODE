const express = require('express')
const fs = require('fs')
const router = express.Router()
const controllerPet = require('../controllers/pet')

// router.get('/', (req, res) => {
    //     res.status(200).json(pet)
    //   })
    
    // READ
    router.get('/', controllerPet.getPet)
    
    // CREATE
    router.post('/', controllerPet.createPet)
    
    // UPDATE
    router.put('/:id', (req, res) => {
        const data = JSON.parse(fs.readFileSync('pet.json'))
        console.log("data pada file member.json :",data)
        
        for (let i = 0; i < data.length; i++){
            // console.log("id param yg diminta:",req.params.id)
            i = ((req.params.id)-1);
            // console.log("index data yg akan diubah :",((req.params.id)-1))
            data[i] = req.body
            // console.log("data yg akan merubah :",data[i])
            fs.writeFileSync('pet.json', JSON.stringify(data, null, 2))
            break;
        }
        res.status(201).json(req.body)
    })
    
    // DELETE
    const pet = JSON.parse(fs.readFileSync('pet.json'))
    
    router.delete('/:id', (req, res) => {
        const id = req.params.id
        
        for (let i = 0; i < pet.length; i++) {
            if (pet[i].id == id) {
                // console.log(i);
            pet.splice(i,1);
            fs.writeFileSync('pet.json', JSON.stringify(pet, null, 2))
            }
        }
        res.status(200).json({message: 'Data Deleted'})
    })

    // CRUD for DB
    router.post('/add-pet', controllerPet.addPet)
        
    
    module.exports = router