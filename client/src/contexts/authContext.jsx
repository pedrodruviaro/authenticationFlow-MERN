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

    // mantendo usuario
    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("user"));
        if (!user) {
            history.push("/login");
            return;
        }

        setUser(user);
        setAuthorized(true);
        setLoading(false);
        api.defaults.headers.authorization = user.token;
        history.push(location.pathname);
    }, [history, location.pathname]);

    // login
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

    // logout
    async function handleLogout() {
        // eslint-disable-next-line no-restricted-globals
        const confirmLogout = confirm("You sure u want logou?");
        if (!confirmLogout) {
            return;
        }

        sessionStorage.removeItem("user");
        api.defaults.headers.authorization = undefined;
        setUser(null);
        setAuthorized(false);
        history.push("/login");
    }

    return (
        <AuthContext.Provider
            value={{ user, loading, authorized, handleLogin, handleLogout }}
        >
            {children}
        </AuthContext.Provider>
    );
}
