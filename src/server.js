import express from 'express'
// import authRouter from './routers/auth.router.js'

const server = express()

// apartir de aqui irian los middlewares
server.use(express.json())

// apartir de aqui irian los Routers
// server.use('/auth', authRouter)

// middleware - handleErrors 


//se exporta para usarlo en el index.js
export {server}