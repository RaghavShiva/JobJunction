import express from 'express'
import { testPost } from '../controllers/testcont.js'
import userAuth from '../middlewares/authmiddleware.js'

const router = express.Router()

router.post('/testpost', userAuth, testPost)

export default router