const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const contacts = require('./routes/contacts.js');

app.use(contacts);


app.listen(port, ()=>{
    console.log('Server on port', port);
})