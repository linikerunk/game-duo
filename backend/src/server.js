"use strict";
// const express = require('express');
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// // ECMA SCRIPT MODELS
// console.log("HELLO WORLD")
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// www.minhaapi.com/
app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, name: 'anuncio 1' },
        { id: 2, name: 'anuncio 2' },
        { id: 3, name: 'anuncio 3' },
        { id: 4, name: 'anuncio 4' },
    ]);
});
app.listen(3333);
