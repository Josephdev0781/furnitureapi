import {Router} from "express"
import { founders } from "../sampledata/founders.js";

const router = Router()

router.get('/founders', (req, res) => {
    
    try {
        if(!founders.length){
            return res.status(404).json({message:"No founders found!"})
        }
        return res.json({message:"Success", founders})
    } catch (error) {
        console.error("Error getting founders ", error)
        return res.status(500).json({message:"Error occurred!"})
    }
})

export default router