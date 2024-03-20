const express= require('express');
const { addFormController, getFormByEmailController, updateFormController, getAllFormController, deleteFormController} = require('../controllers/formController');
const {check} = require('express-validator');
const validationMiddleware = require('../utils/validator');
const formRouter= express.Router();

//Rutas para que interactúe el usuario (que haga consultas y las edite en caso que sea necesario, usando su email 
//para las búsquedas)

formRouter.post('/form', 
    check("name").isString(),
    check("last_name").isString(),
    check("email")
        .isEmail()
        .withMessage("Debe ser una direccion de correo válida con formato: nombredeusuario@dominio"),
    check("phone")
        .isInt()
        .withMessage("El número debe ser correspondiente a un número de celular")
        .isLength({min:10})
        .withMessage("No debe tener menos de 10 caracteres. Colocar código de área sin 0 y sin 15"),
    check("querie")
        .isLength({max:300})
        .withMessage("Párrafo aceptado: 300 caracteres como máximo"),
    validationMiddleware,
    addFormController);

formRouter.get('/form/:email', getFormByEmailController);

formRouter.put('/form/:email',
    check("name").isString(),
    check("last_name").isString(),
    check("email")
        .isEmail()
        .withMessage("Debe ser una direccion de correo válida"),
    check("phone")
        .isInt()
        .withMessage("El número debe ser correspondiente a un número de celular")
        .isLength({min:10})
        .withMessage("No debe tener menos de 10 caracteres. Colocar código de área sin 0 y sin 15"),
    check("querie")
        .isLength({max:300})
        .withMessage("Párrafo aceptado: 300 caracteres como máximo"),
    validationMiddleware,
    updateFormController);

    //Rutas para que interactúe el administrador de la página (que revise consultas  y elimine las resueltas por ID)

    formRouter.get('/form', getAllFormController);

    formRouter.delete('/form/:id', deleteFormController);



module.exports= formRouter;
