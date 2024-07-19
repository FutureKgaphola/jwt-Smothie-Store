import axios from "axios";
import { useEffect, useState } from "react";

export const UsefetchProfile = () => {
    const [userEmail, setUserEmail] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [emailError, setEmailError] = useState("");

    useEffect(() => {
        const getProfile = async () => {
            try {
                setIsLoading(true);
                const user = await axios.get('http://localhost:4000/api/profile', { withCredentials: true });
                if (user.status === 200) {
                    setUserEmail(user?.data?.user?.email);
                    setEmailError("");
                } else {
                    setUserEmail(null);
                    setEmailError("Could not return the resource: " + user.status);
                }
            } catch (error) {
                setUserEmail(null);
                setEmailError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        getProfile();
    }, []);

    return { userEmail, isLoading, emailError };
};
