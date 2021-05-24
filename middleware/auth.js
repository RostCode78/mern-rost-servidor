const jwt = require('jsonwebtoken');
/*
    Tenemos que enviar el token y validar si en verdad pertenece al proyecto
*/

module.exports = function(req, res, next) {
    // Leer el token del header
    const token = req.header('x-auth-token');

    // Revisar si no hay token
    if (!token) {
        return res.status(401).json({msg : 'No hay token, permiso no valido'});
    }

    // Validar el token

    try {
        const cifrado = jwt.verify(token, process.env.KEYWORD);
        req.usuario = cifrado.usuario;
        next();
    } catch (error) {
        res.status(401).json({msg: 'Token no valido'});
    }
}