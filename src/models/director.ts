import {Model, Schema} from 'mongoose'

const DirectorSchema : Schema = new Schema({
    name : String,
    age : Number,
    FilmsMade : Number
    
})