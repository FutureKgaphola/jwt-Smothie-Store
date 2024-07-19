import { useRouteError } from "react-router-dom";

const SignupError = () => {
    let error = useRouteError();
    return (
        <>
            {
                error?.message + " "
            }  ):

            <div className="alert alert-danger" role="alert">
                {error?.response?.data?.message}
            </div>
        </>
    );
}
 
export default SignupError;