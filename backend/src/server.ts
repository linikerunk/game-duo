// const express = require('express');

// // ECMA SCRIPT MODELS

// console.log("HELLO WORLD")

import express from 'express';

const app = express();

// www.minhaapi.com/

app.get('/ads', (request : any, response: any) => {
    return response.json([
        {id: 1, name: 'anuncio 1'},
        {id: 2, name: 'anuncio 2'},
        {id: 3, name: 'anuncio 3'},
        {id: 4, name: 'anuncio 4'},
    ])
})

app.listen(3333)