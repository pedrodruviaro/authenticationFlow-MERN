import { createContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import api from "../services/api";

export const AuthContext = createContext();
AuthContext.displayName = "Auth Context";

export default function AuthContextProvider({ children }) {
    const history = useHistory();
    const location = useLocation();
    const [user, setUser] = useState(null);
    const [authorized, setAuthorized] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("user"));
        if (!user) {
            history.push("/login");
            return;
        }

        console.log("effect");
        console.log(user);
        setUser(user);
        setAuthorized(true);
        setLoading(false);
        api.defaults.headers.authorization = user.token;
        history.push(location.pathname);
    }, [history, location.pathname]);

    async function handleLogin(credentials) {
        try {
            const { data } = await api.post("/login", credentials);

            if (data) {
                setUser(data);
                setAuthorized(true);
                setLoading(false);
                sessionStorage.setItem("user", JSON.stringify(data));
                api.defaults.headers.authorization = data.token;
                history.push("/home");
            }
        } catch (err) {
            console.log(err.response.data.error);
            setLoading(false);
            return;
        }
    }

    return (
        <AuthContext.Provider
            value={{ user, loading, authorized, handleLogin }}
        >
            {children}
        </AuthContext.Provider>
    );
}
