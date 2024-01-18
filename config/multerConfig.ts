import path from 'path'
import multer from 'multer'
const TMP_FOLDER = path.resolve(__dirname, "tmp")
const UPLOADS_FOLDER = path.resolve(__dirname, "tmp", "uploads")

const diskSaveStorage = multer.diskStorage({
    destination : UPLOADS_FOLDER
})
