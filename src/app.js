const express = require('express');
const app = express();
const cors=require('cors');

const port = process.env.PORT || 4000;
const contacts = require('./routes/contacts.js');

app.use(express.json());
app.use(cors());
app.use('/contacts',contacts);


app.listen(port, ()=>{
    console.log('Server on port', port);
})