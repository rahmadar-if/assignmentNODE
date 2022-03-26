const fs = require('fs')

class Pet {
    static getPet() {
        const data = JSON.parse(fs.readFileSync('pet.json'))
        return data
    }


    // walau mendapat alert namun data tetap ter-create
    static create(data) {
        const allData = JSON.parse(fs.readFileSync('pet.json'))
        allData.push(data)
        fs.writeFileSync('pet.json', JSON.stringify(allData, null, 2))
    }
    
    static findById(id) {
        const allData = JSON.parse(fs.readFileSync('pet.json'))
        return allData.find(val => val.id == id )
    }

    // // static create(data) {
    // //     const query = `INSERT into members (id, name) VALUES(?,?)`

    // //     db.run(query, [data.id, data.name], function(err) {
    // //         if (err) {
    // //             console.log(err)
    // //         }
    // //     })
    // // }

}

module.exports = Pet