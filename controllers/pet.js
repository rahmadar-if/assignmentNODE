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
    

    // ADD PET to DB
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

    // GET PET from DB
    static selectPet(req, res) {
        db.query(Pet.selectPet(),(err,result)=>{
            if(err) throw err;
            res.status(200)
            res.send(result)
        })
    }
    
    // UPDATE PET to DB
    static updatePet(req,res){
        const id = req.params.id;
        const name = req.body.name;
        const category = req.body.category;
        const status = req.body.status;

        db.query(Pet.updatePet(), [name,category,status,id], function (err) {
            if(err){res.status(400).json(err)
                return
            }
            if(req.body.id!=id){
                res.send("update error")
                return
            }
            res.status(201)
            res.send(req.body)
        });
    }

    // DELETE PET from DB
    static deletePet(req,res){
        const id = req.params.id  
        db.query(Pet.deletePet(),[id],(err, result)=> {  
            if(err){res.status(400).json(err)
                return
            }
        result = ("id " + id + " : deleted success")
        res.status(200)
        res.send(result)
        });  
    }


}

module.exports = controllerPet