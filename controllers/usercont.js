import usermodel from "../models/usermodel.js"

export const updateUserCont = async (req, res, next) => {
    const { name, email, lastName, location } = req.body
    if (!name || !email || !lastName || !location)
        next('Please provide all fields')
    const user = await usermodel.findOne({ _id: req.user.userId })
    user.name = name
    user.lastName = lastName
    user.location = location
    user.email = email

    await user.save()
    const token = user.createJWT()
    res.status(200).json({
        user,
        token
    })
}

//get data
export const getUserCont = async (req, res, next) => {
    try {
        const user = await usermodel.findById({ _id: req.body.user.userId })
        user.password = undefined
        if (!user) {
            return res.status(200).send({
                message: 'user not found',
                success: false
            })
        }
        else {
            res.status(200).send(({
                success: true,
                data: user
            }))
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: 'auth error',
            success: false,
            error: error.message
        })
    }
}
