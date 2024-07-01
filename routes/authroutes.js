import express from 'express'
import { loginController, registercont } from '../controllers/authcont.js'
import ratelimit from 'express-rate-limit'

//ip limiter
const limiter = ratelimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    // store: ... , // Redis, Memcached, etc. See below.
})


const router = express.Router()

//register
router.post('/register', limiter, registercont)

// login
router.post('/login', limiter, loginController)

export default router 