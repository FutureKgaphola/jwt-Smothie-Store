import axios from "axios";
import smth from "../assets/green-tea.png"
import { failureMessage } from "../notifications/successError";

const CardComponent = ({ item }) => {
    const DeleteItem=async(id)=>{
        try {
            const resp= await axios.delete(`http://localhost:4000/api/smothies/${id}`);
        if (resp.status===200) {
            window.location.reload(false);
        }
        } catch (error) {
            failureMessage(error.message+id);
        }
    }
    return (
        <div className="card m-1 gap-1" >
            <img height={200} src={smth} className="card-img-top object-fit-contain" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p>Items left : {item.quantity}</p>
                <div className="flex gap-2">
                <button type="button" class="btn btn-danger btn-sm m-1" onClick={()=>DeleteItem(item._id)}>Delete</button>
                <button type="button" className="btn btn-primary btn-sm m-1">Buy for R{item.price.toFixed(2)}</button>
                </div>
            </div>
        </div>
    );
}

export default CardComponent;