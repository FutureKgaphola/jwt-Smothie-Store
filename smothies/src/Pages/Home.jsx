import { useLoaderData } from "react-router-dom";
import CardComponent from "../components/CardComponent";
import { UsefetchProfile } from "../hooks/useFetch";
import { useState } from "react";

const Home = () => {
    const {userEmail}=UsefetchProfile();
    const smothies = useLoaderData();
    return (
        <div className="container text-center">
            <span className="badge text-bg-dark">{userEmail}</span>
            <div className="row">
                {
                    smothies?.length>0 ? smothies?.map((sm,index) => (

                        <div className="col-lg-4 col-md-4  col-sm-12" key={sm._id}>
                            <CardComponent item={sm} />
                        </div>

                    ))

                    : <h3>No Smothies found ):</h3>

                }
            </div>
        </div>
    );
}

export default Home;