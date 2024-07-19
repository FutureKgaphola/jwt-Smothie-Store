import { Form } from "react-router-dom";
import { UsefetchProfile } from "../hooks/useFetch";

const AddItem = () => {
    const { userEmail, isLoading, emailError } = UsefetchProfile();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (emailError) {
        return <div>Error: {emailError}
            <div className="alert alert-danger" role="alert">
                You are not authorised to access this page.
            </div>
        </div>;
    }

    return (
        <div className="bg-body-secondary d-flex justify-content-center align-content-center">
            <Form method="post" action="/AddItem" className="m-5 bg-light w-50 p-2 gap-1 rounded-1 align-self-center">
                <span className="badge text-bg-dark">{userEmail}</span>
                <h4>Add a Smoothie</h4>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Smoothie Name</label>
                    <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Give us your taste of smoothie.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">Smoothie Quantity</label>
                    <input type="number" min={1} className="form-control" id="quantity" name="quantity" />
                    <div id="emailHelp" className="form-text">How many you like to create.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Smoothie Price</label>
                    <input type="tel" min={1} className="form-control" id="price" name="price" />
                    <div id="emailHelp" className="form-text">Put a price on it</div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
        </div>
    );
}

export default AddItem;
