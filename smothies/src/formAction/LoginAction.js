import axios from "axios";
import { redirect } from "react-router-dom";

export const LoginAction=async({request})=>{
    const data=await request.formData();
    const userDetails={
        email:data.get('email').trim(),
        password: data.get('password'),
    }
    const resp=await axios.post("http://localhost:4000/api/login",userDetails,{withCredentials:true});
    if(resp.status==404){
        return redirect('/Login');
    }
    return window?.location.replace('/');
}