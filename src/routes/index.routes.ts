import {Router, Request, Response} from 'express'

const router = Router()

router.get('/testing', (req : Request, res : Response) => {
    return res.status(200).json({msg : "working"})
})

router.post('/test', (req : Request, res : Response) => {
    const data = req.body
    return res.status(200).json(data)
})
export default router