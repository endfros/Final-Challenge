import express from 'express'
import postsRouter from './routers/card.router.js'
import writersRouter from './routers/user.router.js'
// import authRouter from './routers/auth.router.js'

const server = express()

// apartir de aqui irian los middlewares
server.use(express.json())

server.use('/post', postsRouter)
server.use('/writer', writersRouter)

// apartir de aqui irian los Routers
// server.use('/auth', authRouter)

// middleware - handleErrors 


//se exporta para usarlo en el index.js
export {server}