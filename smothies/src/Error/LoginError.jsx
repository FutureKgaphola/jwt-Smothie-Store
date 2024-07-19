import { useRouteError } from "react-router-dom";

const LoginError = () => {
    let error = useRouteError();
    return (
        <>
            {
                error?.message + " "
            }  ):

            <div className="alert alert-danger" role="alert">
                {error?.response?.data?.message}
                <button type="button" className="btn btn-secondary btn-sm" onClick={()=>window.location.reload(false)}>Ok, try again</button>
            </div>
            
        </>
    );
}
 
export default LoginError;