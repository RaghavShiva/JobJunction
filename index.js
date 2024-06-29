import express from 'express'
import 'express-async-errors'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import cors from 'cors'
import morgan from 'morgan'

import testroute from './routes/testroutes.js'
import authRoutes from './routes/authroutes.js'
import errormiddleware from './middlewares/errormiddleware.js'

dotenv.config()
connectDB()
const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use('/api/v1/test', testroute)
app.use('/api/v1/auth', authRoutes)

// validation middleware
app.use(errormiddleware)

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Node server running in ${process.env.DEV_MODE} mode on port ${port}`.bgCyan.white)
})