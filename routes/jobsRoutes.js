import express from 'express'
import userAuth from '../middlewares/authmiddleware.js'
import { createJobCont, getJobs } from '../controllers/jobcont.js'

const router = express.Router()

router.post('/create-job', userAuth, createJobCont)
router.get('/get-job', userAuth, getJobs)
export default router