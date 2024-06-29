import express from 'express'
import { loginController, registercont } from '../controllers/authcont.js'

const router = express.Router()

//register
router.post('/register', registercont)

// login
router.post('/login', loginController)

export default router 