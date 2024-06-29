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