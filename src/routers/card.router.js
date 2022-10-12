import express from 'express';
import * as cardUseCase from '../useCase/card.use.js'

const router = express.Router();

router.get('/', async (request,response) => {
    try{
        const allPosts = await cardUseCase.getAll()
        

        response.json({
            success: true,
            data: {
                posts: allPosts
            }
        })
    } catch (error) {
        response.status(400).json({
            success: false,
            message: error.message
        })
    }
})


export default router