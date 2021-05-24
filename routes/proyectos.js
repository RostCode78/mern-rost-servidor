const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

// Crea proyectos
// api/proyectos
router.post('/',
    auth, // Primero se verifica si es correcto todo este middleware
    [
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoController.crearProyecto // Luego se pasa al siguiente middleware.
);
/*
    Siempre que se envia una peticion POST, PUT, GET o DELETE para crear un proyecto se tiene
    que hacer una validacion para saber si el usuario esta registrado o no.
    En lugar de escribir al rededor de 30 lineas de codigo por cada peticion HTTP
    podemos crear un MiddleWare y reutilizarlo.
*/

// Obtener todos los proyectos
router.get('/',
    auth,
    proyectoController.obtenerProyectos
);

// Actualizar proyecto via ID
router.put('/:id',
    auth,
    [
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoController.actualizarProyecto
);

// Eliminar un Proyecto
router.delete('/:id',
    auth,
    proyectoController.eliminarProyecto
);

module.exports = router;