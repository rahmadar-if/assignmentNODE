const express = require('express')
const fs = require('fs')
const router = express.Router()
const controllerPet = require('../controllers/pet')

const pet = JSON.parse(fs.readFileSync('pet.json'))

router.get('/', (req, res) => {
    res.status(200).json(pet)
  })

// READ
router.get('/by-mvc', controllerPet.getPet)

// CREATE
router.post('/', controllerPet.createPet)

// router.put('/:id', controllerPet.updatePet)

// router.delete('/:id',controllerPet.deletePet)

module.exports = router