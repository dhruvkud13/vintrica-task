import Registration from "../models/Registration.js";
import { createError } from "../utils/error.js";
export const registration=(req,res,next)=>{
    try{
        const newRegistration= new Registration({
            registrationCountry:req.body.country,
            registrationNo:req.body.number,
            date:req.body.date,
        });
        console.log(newRegistration);
        newRegistration.save();

        res.status(200).send(newRegistration);
    }catch(err){
        next(createError(404, "issue while posting!"));
    }
}