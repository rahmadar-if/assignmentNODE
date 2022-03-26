// npm init -y : default install package json
// npm i express : install node_modules
// git ignore
// untuk run node express "node ." secara manual. untuk kill nya ctrl+c
// npm i -g nodemon : install nodemon secara automatic sehingga gak perlu kill saat edit sytax
// untuk run : "nodemon 'nama file' "
// npm i dotenv : untuk menaruh port pada file lain (.env) sehingga lebih secure "require('dotenv').config()"


require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT //untuk  memanggilnya : process.env."value pada .env"
const pet = require('./routes/pet')
app.use('/pet', pet) //membuat semua yang menggunakan API ".../pet" menjadi dalam 1 file saja pada folder routes
// const fs = require('fs') //require untuk update file JSON
// var bodyParser = require('body-parser')// parse application/json untuk run/menjalakan method PUT dan POST tidak perlu install npm
// app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
