const mysql = require('mysql')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'manager',
    database: 'notesdb',
    port:3306
})

module.exports={
    pool,
}