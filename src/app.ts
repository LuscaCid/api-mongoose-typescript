
require('dotenv').config()
import express from 'express'
//data from engine
import config  from 'config'
//rotas
import router from './routes/index.routes'
//db connection to mongoDB
import db from '../config/db'
//logger
import Logger from '../config/logger'
//morgan middlware
import morganMiddlware from './middleware/morgan'

const app = express()
app.use(express.json())
app.use(morganMiddlware)
app.use("/tester",router)

const PORT = config.get<number>('PORT')


app.listen(PORT, async ()=> {
    await db() 
    Logger.info(`Server is running on port ${PORT}`)
})
 
//config resgata valores advindos da raiz do projeto 
