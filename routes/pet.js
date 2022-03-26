const express = require('express')
const fs = require('fs')
const router = express.Router()
// const controllerPet = require('../controller/pet')

const pet = JSON.parse(fs.readFileSync('pet.json'))

router.get('/', (req, res) => {
    res.status(200).json(pet)
  })

module.exports = router