import usermodel from "../models/usermodel.js"

export const registercont = async (req, res, next) => {
    const { name, email, password, lastName } = req.body
    if (!name)
        next('Name is required, please provide it')

    if (!email)
        next('Email is required, please provide it')

    if (!password)
        next('Password is required, please provide it')

    const existUser = await usermodel.findOne({ email })
    if (existUser)
        next('Email already registered, please login')

    const user = await usermodel.create({ name, email, password, lastName })

    const token = user.createJWT()

    res.status(201).send({
        success: true,
        message: 'user created successfully',
        user: {
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            location: user.location
        },
        token
    })
}

export const loginController = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password)
        next('Please provide the required fields')

    const user = await usermodel.findOne({ email }).select('+password')
    if (!user) {
        next('Invalid Username or password')
    }

    //compare
    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
        next('Invalid Username or password')
    }
    user.password = undefined
    const token = user.createJWT()
    res.status(200).json({
        success: true,
        message: 'Login Successfully',
        user,
        token
    })
}

