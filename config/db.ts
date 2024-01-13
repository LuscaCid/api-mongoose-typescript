import mongoose from 'mongoose'
import config from 'config'
import Logger from './logger'
async function connect (){
    const dbUri = config.get<string>("dbUri")
    try {
        await mongoose.connect(dbUri)
        Logger.info('Connected at database')
    } catch(e) {
        Logger.error('Was not possible to connect')
        Logger.error(`error : ${e}`)
    }
}

export default connect