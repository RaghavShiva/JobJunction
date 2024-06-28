import usermodel from "../models/usermodel.js"

export const registercont = async (req, res, next) => {
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
}


