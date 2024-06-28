import mongoose from "mongoose"
import validator from "validator"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validate: validator.isEmail
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password length should be greater than 6 characters']
    },
    locations: {
        type: String,
        default: 'India'
    }
}, { timestamps: true })
export default mongoose.model('User', userSchema)