import { Request, Response } from "express";

import { MoovieModel as movieModel } from "../models/movie";

import Logger from "../../config/logger";

import {ImovieUpdate} from '../interfaces/ImovieUpdate' 

export async function createMovie(req : Request, res : Response) {
    const info = req.body
    let data : object;
    try {
        data = await movieModel.create(info)
        Logger.info(data)
    } catch (e : any) {
        return Logger.error(e.message)
    }
    
    return res.status(200).json({
        message : "ok",
        movie : data
    })
}

export async function getFilmById(req : Request, res : Response){
    const id = req.params.id
    try {
        const movie = await movieModel.findById(id)
        
        if(!movie)return res.status(404).json({message : "nao encontrado"})
         
        return res.status(200).json(movie)
    } catch (e : any) {
        Logger.error(e.message)
    }
}

export async function deleteFilmById(req : Request, res : Response) {
    const id = req.params.id
    try {   
        //search of film in mongodb atlas 
        const movie = await movieModel.findByIdAndDelete(id)
        Logger.info(movie)
        if(!movie)return res.status(404).json({message : "film not found"})
        //its an async function obviously
        //await movie.delete()
        
        return res.status(200).json({message : "ok"})
        /**
         * i can pass an method to movieModel for findByIdAndDelete()
         */
    } catch (e : any) {
        Logger.error(e)
        return res.status(500).send("tente novamente mais tarde")
    }
}
export const udateFilmById = async (req : Request<ImovieUpdate>, res : Response) => {
    const {id} = req.params
    const {
        newTitle,
        newDescription,
        newRating,
        
    } = <ImovieUpdate>req.body//o que pode vir do frontend para atualizar
    try {
         const movieExists = await movieModel.findById(id)
        if(!movieExists)return res.status(404).json({message : "not found"})
        newTitle && await movieModel.updateOne({_id : id}, {title : newTitle} )
        newDescription && await movieModel.updateOne({_id : id}, {description : newDescription})
        newRating && await movieModel.updateOne({_id : id}, {rating : newRating})

        return res.status(200).json({message : "updated with success"})
    } catch (e) {
        Logger.error(e)
        return res.status(500).send("tente novamente mais tarde")
    }
   

}