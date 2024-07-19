import axios from "axios"

export const LoadSmothies=async()=>{
    const smothies= await axios.get("http://localhost:4000/api/smothies/",{withCredentials:true});
    return smothies?.data;
}