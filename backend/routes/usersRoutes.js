const express = require('express')
const router = express.Router()
const protect = require('../middleware/authMiddleware')

const { crearUser, loginUser, datosUser } = require('../controllers/usersController')

//endpoints publicos
router.post('/', crearUser)
router.post('/login', loginUser)
router.post('/register', crearUser)

//endpoint privado
router.get('/datos', protect, datosUser)

module.exports = router