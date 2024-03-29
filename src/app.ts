
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

import bodyParser from 'body-parser';


const app = express()
app.use(bodyParser.json());
app.use(express.json())
app.use(morganMiddlware)
app.use("/api",router)

const PORT = config.get<number>('PORT')


app.listen(PORT, async ()=> {
    await db() 
    Logger.info(`Server is running on port ${PORT}`)
})
 
//config resgata valores advindos da raiz do projeto 
