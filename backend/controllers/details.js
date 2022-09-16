import Details from "../models/Details.js";
import { createError } from "../utils/error.js";
export const details=(req,res,next)=>{
    try{
        const newDetail= new Details({
            country:req.body.country,
            vehicle:req.body.vehicle,
            duration:req.body.duration,
        });
        console.log(newDetail);
        newDetail.save();
        res.status(200).send("detail posted");
    }catch(err){
        next(createError(404, "issue while posting!"));
    }
}