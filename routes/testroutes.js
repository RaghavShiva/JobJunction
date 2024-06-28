import express from 'express'
import testPost from '../controllers/testcont.js'

const router = express.Router()

router.post('/test-post',testPost)

export default router