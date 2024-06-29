import express from 'express'
import { updateUserCont } from '../controllers/usercont.js'
import userAuth from '../middlewares/authmiddleware.js'
const router = express.Router()

router.put('/update-user', userAuth, updateUserCont)

export default router