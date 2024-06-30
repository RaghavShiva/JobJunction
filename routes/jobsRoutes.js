import express from 'express'
import userAuth from '../middlewares/authmiddleware.js'
import { createJobCont, deleteJobCont, getJobs, statsJobCont, updateJobs } from '../controllers/jobcont.js'

const router = express.Router()

router.post('/create-job', userAuth, createJobCont)

router.get('/get-job', userAuth, getJobs)

router.patch('/update-job/:id', userAuth, updateJobs)

router.delete('/delete-job/:id', userAuth, deleteJobCont)

router.get('/job-stats', userAuth, statsJobCont)

export default router