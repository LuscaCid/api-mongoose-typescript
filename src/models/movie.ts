import {model, Schema} from 'mongoose'

const MoovieSchema : Schema = new Schema({
    title : {type : String},
    description : {type : String},
    rating : {type : Number},
    durationMins : {type : Number},
    stars : {type : Array}
}, {
    timestamps : true
})

export const MoovieModel = model("Movie",MoovieSchema)

/**
 * futuramente irei criar uma tabela para usuarios da application e para ter acesso aos comentarios sobre os filmes
 * 
 * 
 */