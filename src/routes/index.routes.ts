import {Router, Request, Response} from 'express'

import {createMovie, deleteFilmById, getFilmById, udateFilmById} from '../controllers/movieController'

import { validate } from '../middleware/handleValidation'

import { ensureMovie } from '../middleware/movieValitation'
const router = Router()

router.get('/testing', (req : Request, res : Response) => {
    return res.status(200).json({msg : "working"})
})

router.post('/test', (req : Request, res : Response) => {
    const data = req.body
    return res.status(200).json(data)
})

router.get('/movie/:id', getFilmById)

router.delete('/movie/:id', deleteFilmById)

router.patch('/movie/:id',udateFilmById)

router.post('/movie/create', ensureMovie() ,validate ,createMovie)
export default router