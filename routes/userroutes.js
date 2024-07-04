import express from 'express'
import { getUserCont, updateUserCont } from '../controllers/usercont.js'
import userAuth from '../middlewares/authmiddleware.js'
const router = express.Router()

//get
router.post('/getUser', userAuth, getUserCont)

router.put('/update-user', userAuth, updateUserCont)

export default router