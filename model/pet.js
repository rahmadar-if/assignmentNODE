const fs = require('fs')
const db = require('../config/db')

class Pet {

    static getPet() {
        const data = JSON.parse(fs.readFileSync('pet.json'))
        return data
    }

    static create(data) {
        const allData = JSON.parse(fs.readFileSync('pet.json'))
        allData.push(data)
        fs.writeFileSync('pet.json', JSON.stringify(allData, null, 2))
    }
    
    static findById(id) {
        const allData = JSON.parse(fs.readFileSync('pet.json'))
        return allData.find(val => val.id == id )
    }

    static delete(data) {
        const allData = JSON.parse(fs.readFileSync('pet.json'))
        allData.splice()
        fs.writeFileSync('pet.json', JSON.stringify(allData, null, 2))
    }

    static addPet() {
        let sql = `INSERT INTO pet (id,name,category,status) VALUES (?)`;
        return sql;
        
    }


}

module.exports = Pet