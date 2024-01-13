import { Request, Response } from "express";

import { MoovieModel } from "../models/moovie";

import Logger from "../../config/logger";

export async function createMovie(req : Request, res : Response) {
    return res.status(200).json({message : "ok"})
}