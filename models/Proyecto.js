const mongoose = require('mongoose');

const ProyectoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    creador: {
        type: mongoose.Schema.Types.ObjectId, // De esta manera tomamos el id del usuario que creo el proyecto
        ref: 'Usuario' // Este ref hace coneccion con el schema de usuario, debemos colocar el nombre del model que usamos en el module.exports, de esta manera el codigo sabe a que pertenece el ObjectId que estamos pasando como Type
    },
    creado: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('Proyecto', ProyectoSchema);