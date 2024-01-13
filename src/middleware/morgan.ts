import morgan, {StreamOptions} from 'morgan'    

import config from 'config'
import Logger from '../../config/logger'

const stream : StreamOptions = {
    write : (message) => {
        return Logger.http(message)
    }
}
const skip = () => {
    const env = config.get<string>("env") || "development"
    return env !== "development"
}
const morganMiddlware = morgan(":method :url :status :res[content-length] - :response-time ms", {stream, skip})
//construction of logs for http requests with morgan...
export default morganMiddlware

/**
 *  function morgan is passed for middleware to exports for app.ts
 *  i can access :method :url :status :res[content-length]
 * :response time <in time>
 * 
*/