import mongoose from 'mongoose'
import colors from 'colors'
const connect = async ()=>{
    try{
        const con = await mongoose.connect(process.env.mongodb_url)
        console.log(`connected to database ${mongoose.connection.host}`)
    }
    catch(error){
        console.log(`MOngoDb error: ${error}`.bgRed.white)
    }
}
export default connect