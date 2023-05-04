const {createPool} = require('mysql2/promise')

require('dotenv').config();

const pool = createPool({
    user: process.env.MYSQLUSER,
    password:process.env.MYSQLPASSWORD,
    host:process.env.MYSQLHOST,
    port:process.env.MYSQLPORT,
    database:process.env.MYSQLDATABASE
})

module.exports=pool;