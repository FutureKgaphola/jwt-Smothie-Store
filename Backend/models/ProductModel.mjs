import mongoose from 'mongoose';
const productSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Please enter a product Name"]
        },
        quantity:{
            type:Number,
            required:[true,"Please enter a product Quantity"]
        },
        price:{
            type:Number,
            required:[true,"Please enter a product price"]
        },       
    },
    {
        timestamps:true
    }
)

const Product_Mdl=mongoose.model('Smothie',productSchema );

export default Product_Mdl;