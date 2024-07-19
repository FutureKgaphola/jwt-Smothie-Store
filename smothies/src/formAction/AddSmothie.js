import axios from "axios";
import { redirect } from "react-router-dom";

export const AddSmothie= async({request})=>{
    const data=await request.formData();
    const smothieData={
        name:data.get('name').trim(),
        quantity: data.get('quantity').trim(),
        price: data.get('price').trim(),
    }

    const resp=await axios.post("http://localhost:4000/api/addsmothies",smothieData);
    if(resp.status==404){
        
        return redirect('/AddItem');
    }
    return window?.location.replace('/');
}