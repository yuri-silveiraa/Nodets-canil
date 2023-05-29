import { Request, Response } from "express";
import { Pet } from "../models/pets";

export const search = (req: Request, res: Response) => {
    let list = Pet.getFromName(req.params.name)
    res.render('pages/page',{list})
}