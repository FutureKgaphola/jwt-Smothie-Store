import { redirect, useNavigate, useRouteError } from "react-router-dom";
import Carousel from "../components/Carousel";

const LoadingSmothieError = () => {
    let error = useRouteError();
    const navigate = useNavigate();
    return (
        <>

            {
                error?.response.data.auth == false ? (
                    <div className="alert alert-warning" role="alert">
                        {"Please login again to see smothies. Your Session has expired or user logged Out "}
                        <button type="button" className="btn btn-secondary btn-sm" onClick={() => navigate('/Login')}>Ok, Login</button>
                    </div>
                ) :
                    (
                        <div className="alert alert-danger" role="alert">

                            {error?.message + " " + ":("}
                        </div>
                    )
            }

            <Carousel />
        </>
    );
}

export default LoadingSmothieError;