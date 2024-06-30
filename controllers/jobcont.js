import jobsModel from "../models/jobsModel.js"

//create fn
export const createJobCont = async (req, res, next) => {
    const { company, position } = req.body
    if (!company || !position)
        next('please provide all fields')
    req.body.createdBy = req.user.userId
    const job = await jobsModel.create(req.body)
    res.status(201).json({ job })
}

//get fn
export const getJobs = async (req, res, next) => {
    const jobs = await jobsModel.find({ createdBy: req.user.userId })
    res.status(200).json({
        totalJobs: jobs.length,
        jobs
    })
}