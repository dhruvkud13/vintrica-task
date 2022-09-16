import mongoose from 'mongoose';
// const { Schema } = mongoose;

const DeatilsSchema= new mongoose.Schema({
    country:{
        type:String,
        required:true,
    },
    vehicle:{
        type:String,
        required:true,
    },
    duration:{
        type:String,
        required:true
    },   
},{timestamps:true}
);

export default mongoose.model('Details',DeatilsSchema)