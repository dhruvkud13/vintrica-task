import mongoose from 'mongoose';
// const { Schema } = mongoose;

const RegistrationSchema= new mongoose.Schema({
    registrationCountry:{
        type:String,
        required:true,
    },
    registrationNo:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true
    },   
},{timestamps:true}
);

export default mongoose.model('Registration',RegistrationSchema)