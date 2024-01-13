import {Router, Request, Response} from 'express'

import {createMovie} from '../controllers/movieController'
const router = Router()

router.get('/testing', (req : Request, res : Response) => {
    return res.status(200).json({msg : "working"})
})

router.post('/test', (req : Request, res : Response) => {
    const data = req.body
    return res.status(200).json(data)
})

router.post('/movie/create', createMovie)
export default router