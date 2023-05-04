const express = require('express');
const app = express();
const cors=require('cors');

const db = require('./db/database');
//const {pool} = require('./db/db');
// const { Sequelize } = require('sequelize');

// require('dotenv').config();

// const db=new Sequelize('mysql://gzkivzjeikdcl5gly5ln:pscale_pw_GwqZCLN8XDnRwk16DPHmSRblHDf6Jegy9ytpXqitLq5@aws.connect.psdb.cloud/airsences?ssl={"rejectUnauthorized":true}')

const pool=async()=>{

    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

pool()


const port = process.env.PORT || 4000;
const contacts = require('./routes/contacts.js');

app.use(express.json());
app.use(cors());

app.use('/contacts',contacts);

app.get('/ping', async (req,res)=>{
 const result = await pool.query('SELECT "Hello World" as RESULT' )
 console.log(result);
 res.send("Base de DAtos Corriendo");
})

app.listen(port, ()=>{
    console.log('Server on port', port);
})