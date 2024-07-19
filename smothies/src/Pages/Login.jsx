import { Form } from "react-router-dom";
import { UsefetchProfile } from "../hooks/useFetch";

const Login = () => {
    const { userEmail } = UsefetchProfile();
    if(userEmail!=null || userEmail!=undefined){
        return window?.location.replace('/');
    }
    return (
        <div className="bg-body-secondary d-flex justify-content-center align-content-center">
            <Form method="post" action="/Login" className="m-5 bg-light w-50 p-2 gap-1 rounded-1 align-self-center">
                <h4>Login</h4>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" />
                    <div id="email" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" />
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </Form>
        </div>
    );
}

export default Login;