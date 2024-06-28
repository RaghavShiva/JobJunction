import usermodel from "../models/usermodel.js"

const registercont = async (req, res, next) => {
    try {
        const { name, email, password } = req.body
        if (!name)
            next('Name is required, please provide it')
           
        if (!email)
            next('Email is required, please provide it')
           
        if (!password)
            next('Password is required, please provide it')
           
        const existUser = await usermodel.findOne({ email })
        if (existUser) 
            next('Email already registered, please login')
        
        const user = await usermodel.create({ name, email, password })
        res.status(201).send({
            success: true,
            message: 'user created successfully',
            user
        })

    } catch (error) {
        next(error)
    }
}
export default registercont

