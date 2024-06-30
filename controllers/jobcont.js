import jobsModel from "../models/jobsModel.js"
import mongoose from 'mongoose'
import moment from 'moment'
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

//update fn
export const updateJobs = async (req, res, next) => {
    const { id } = req.params
    const { company, position } = req.body
    if (!company || !position)
        next('please provide all fields')
    const job = await jobsModel.findOne({ _id: id })
    if (!job)
        next(`NO jobs found with this id ${id}`)
    if (req.user.userId !== job.createdBy.toString()) {
        next('you are not authorized to update this job')
        return
    }


    const updateJob = await jobsModel.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
        runValidators: true
    })
    res.status(200).json({
        updateJob
    })
}

//delete fn
export const deleteJobCont = async (req, res, next) => {
    const { id } = req.params
    const job = await jobsModel.findOne({ _id: id })
    if (!job)
        next(`NO job found with this id ${id}`)
    if (req.user.userId !== job.createdBy.toString()) {
        next('you are not authorized to delete this job')
        return
    }
    await job.deleteOne()
    res.status(200).json({
        message: "Success, Job Deleted!"
    })

}

export const statsJobCont = async (req, res) => {
    const stats = await jobsModel.aggregate([
        // seach by jobs
        {
            $match: {
                createdBy: new mongoose.Types.ObjectId(req.user.userId)
            }
        },
        {
            $group: {
                _id: '$status',
                count: { $sum: 1 }
            }
        }
    ])
    // default stats
    const defstats = {
        pending: stats.pending || 0,
        reject: stats.reject || 0,
        interview: stats.interview || 0
    }

    //monthly/yearly
    let monthlyApp = await jobsModel.aggregate([
        {
            $match: {
                createdBy: new mongoose.Types.ObjectId(req.user.userId)
            }
        },
        {
            $group: {
                _id: {
                    year: { $year: '$createdAt' },
                    month: { $month: '$createdAt' }
                },
                count: {
                    $sum: 1
                }
            }
        }
    ])
    // formatting using moment library
    monthlyApp = monthlyApp.map(item => {
        const { _id: { year, month }, count } = item
        const date = moment().month(month - 1).year(year).format('MMM Y')
        return { date, count }
    }).reverse()
    res.status(200).json({
        totalJob: stats.length,
        defstats,
        monthlyApp
    })
}