const db = require('./db')

const createPet = `
    CREATE TABLE pet (
    id INT NOT NULL,
    name VARCHAR(45) NOT NULL,
    category VARCHAR(45) NULL,
    status VARCHAR(45) NULL,
    PRIMARY KEY (id)
  );
  `

db.serialize(() => {
    db.run(createPet, (err) => {
        if (!err) {
            console.log('table created')
        } else {
            console.log(err)
        }
    })
})