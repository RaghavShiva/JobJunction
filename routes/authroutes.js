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

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - lastName
 *         - email  
 *         - password  
 *         - location  
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user collection
 *         name:
 *           type: string
 *           description: User name   
 *         lastName:
 *           type: string
 *           description: User last name      
 *         email:
 *           type: string
 *           description: User email address      
 *         password:
 *           type: string
 *           description: User password  
 *         location:
 *           type: string
 *           description: User location  
 *       example:
 *         id: JVBWuobvcuebc
 *         name: Hello
 *         lastName: Forces
 *         email: helloforces@gmail.com
 *         password: test@123
 *         location: Delhi
 */
/**
 * @swagger
 *   tags:
 *     name: auth
 *     description: authentication apis
 */

/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: register new user
 *     tags: [auth]
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: user created successfully
 *         content:
 *           application/json:
 *             schema:
 *             $ref: '#/components/schemas/User'
 *       500:
 *         description: internal server error
 *         
 */

//register
router.post('/register', limiter, registercont)

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Login page
 *     tags: [auth]
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema: 
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Login successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Internal server error
 */



// login
router.post('/login', limiter, loginController)

export default router 