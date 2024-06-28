import express from 'express'
import {registercont} from '../controllers/authcont.js'

const router= express.Router()

router.post('/register',registercont)

export default router 