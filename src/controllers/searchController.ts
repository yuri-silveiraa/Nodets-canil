import { Request, Response } from "express";
import { Pet } from "../models/pets";

export const search = (req: Request, res: Response) => {
    let name: string = req.query.q as string
    let list = Pet.getFromName(name)

    res.render('pages/page',{
        list,
        name
    })
}