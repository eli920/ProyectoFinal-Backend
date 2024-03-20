const express= require('express');
const axios = require('axios');


const externalApiController =async (req, res) => {
    try {
        const response = await axios.get('https://api.opentopodata.org/v1/test-dataset?locations=37.7749,-122.4194');
        res.json(response.data);
    } catch (error) {
        console.error('Error al obtener datos de la API externa:', error);
        res.status(400).json({ error: 'Error al obtener datos de la API externa' });
    }
};

module.exports= externalApiController;
