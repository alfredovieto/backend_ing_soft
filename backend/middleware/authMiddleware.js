const jwt = require('jsonwebtoken')
const User = require('../models/usersModel')

const protect = async (req, res, next) => {

    const authHeader = req.headers.authorization

    //sin header "Authorization: Bearer <token>" no se permite el acceso
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401)
        throw new Error('Acceso no autorizado, no se proporciono ningun token')
    }

    try {
        //obtenemos el token
        const token = authHeader.split(' ')[1]

        //verificar el token (si fue alterado o expiró, jwt.verify lanza un error)
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        //obtener toda la info del usuario, sin el password
        req.user = await User.findById(decoded.id_usuario).select('-password')
    } catch (error) {
        res.status(401)
        throw new Error('Acceso no autorizado, token invalido')
    }

    //el token es valido pero el usuario ya no existe
    if (!req.user) {
        res.status(401)
        throw new Error('Acceso no autorizado, usuario no encontrado')
    }

    next()
}

module.exports = protect
