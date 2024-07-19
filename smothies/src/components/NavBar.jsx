import axios from "axios";
import { Link } from "react-router-dom";
import { failureMessage, successMessage } from "../notifications/successError";
import { UsefetchProfile } from "../hooks/useFetch";

const NavBar = () => {
    const { userEmail } = UsefetchProfile();
    const LoginOut = async () => {

        try {
            const resp = await axios.get("http://localhost:4000/api/logout", { withCredentials: true });
            if (resp.status === 200) {
                successMessage("Logged out succesful");
                window?.location.replace('/');
            } else {
                failureMessage(resp?.message);
            }
        } catch (error) {
            failureMessage(error?.message);
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={'/'}>Smothies Store</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to={'/'}>Home</Link>
                            </li>
                            {
                                userEmail !== null ?
                                    (
                                        <>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={'/AddItem'}>Add Smoothie</Link>
                                            </li>
                                            <li className="nav-item">
                                                <button onClick={() => LoginOut()} className="btn btn-warning btn-sm align-self-center">Log Out</button>
                                            </li>
                                        </>

                                    ) :
                                    (
                                        <>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={'/Login'}>Login</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={'/SignUp'}>SignUp</Link>
                                            </li>
                                        </>
                                    )
                            }

                        </ul>
                    </div>

                </div>
            </nav>
        </>
    );
}

export default NavBar;