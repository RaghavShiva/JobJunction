import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'

dotenv.config()
const app = express()

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to Job Portal</h1>")
})

const port=process.env.PORT

app.listen(8000,()=>{
    console.log(`Node server running in ${process.env.DEV_MODE} mode on port ${port}`.bgCyan.white)
})