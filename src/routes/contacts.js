const express = require('express');
const router = express.Router();
const contacts = require('../models/contacts');

// const contactos=[
//     {id:1,
//     nombre: 'Jose Luis Manon',
//     correo:'manon@gmail.com',
//     telefono:'809-929-2993'
// },
// {
//     id:2,
//     nombre: 'Angel Martinez',
//     correo:'angel@gmail.com',
//     telefono:'809-923-2922'
// }
// ];

router.get('/', async (req, res)=>{
    const contactos = await contacts.findAll();
        res.json(contactos);
});

router.get('/:id', (req, res)=>{
    const {id}=req.params;
    res.json(contactos.find(item=>item.id==id));
});

router.post('/', (req, res)=>{
    const {id, nombre, correo, telefono}=req.body;
    contactos.push({id, nombre, correo, telefono})
    res.json(contactos);
});

router.put('/:id', (req, res)=>{
    const {id}=req.params;
    const {nombre, correo, telefono}=req.body;
    console.log(nombre);
    const index=contactos.findIndex(item=>item.id==id)
    contactos[index].nombre=nombre;
    contactos[index].correo=correo;
    contactos[index].telefono=telefono;
    res.json(contactos);
})

module.exports= router;