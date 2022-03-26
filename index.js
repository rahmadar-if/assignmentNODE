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
const fs = require('fs') //require untuk update file JSON


// parse application/json untuk run/menjalakan method PUT dan POST tidak perlu install npm
var bodyParser = require('body-parser')
app.use(bodyParser.json())

const members = require('./routes/member')
app.use('/members', members) //membuat semua yang menggunakan API ".../members" menjadi dalam 1 file saja pada folder routes 


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello', (req, res) => {
  res.send('Assalamualaikum Brother!!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
