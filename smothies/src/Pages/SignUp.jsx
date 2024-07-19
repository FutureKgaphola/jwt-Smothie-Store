import { Form } from "react-router-dom";
import { UsefetchProfile } from "../hooks/useFetch";

const SignUp = () => {
    const { userEmail } = UsefetchProfile();
    if(userEmail!=null || userEmail!=undefined){
        return window?.location.replace('/');
    }
    return ( 
        <div className="bg-body-secondary d-flex justify-content-center align-content-center">
        <Form method="post" action="/SignUp" className="m-5 bg-light w-50 p-2 gap-1 rounded-1 align-self-center">
            <h4>Sgin Up</h4>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" name="password" className="form-control" id="password" />
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
    </Form>
    </div>
     );
}
 
export default SignUp;