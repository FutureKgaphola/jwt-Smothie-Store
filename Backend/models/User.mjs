import mongoose from "mongoose";
import v from "validator";
import bcrypt from "bcrypt";

const {isEmail}=v;
const userSchema=new mongoose.Schema(
    {
        email:{
            type:String,
            required:[true,"Email is required"],
            unique:true,
            lowercase:true,
            validate:[(e)=>isEmail(e),"Invalid Email format"]
        },
        password:{
            type:String,
            required:[true,"password of 6 characters is required"],
            minlength:6
        }
    },
    {
        timestamps:true
    }
);
userSchema.pre("save",async function (params) {
    const salt=await bcrypt.genSalt();
    this.password=await bcrypt.hash(this.password,salt);
    params();
});

userSchema.statics.login=async function(email,password){
    const user=await this.findOne({email});
    if(user){
        const result = await bcrypt.compare(password,user.password);
        if(result){
            return user;
        }
        throw Error("Incorrect password");
    }
    throw Error("Incorrect email or not registered")
}



const User=mongoose.model('User',userSchema);

export default User;