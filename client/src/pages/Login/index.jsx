import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";

export default function Index() {
    const { handleLogin } = useContext(AuthContext);

    const [email, setEmail] = useState("pedrodruviaro@gmail.com");
    const [password, setPassword] = useState("pedrodruviaro");

    function handleSubmit(e) {
        e.preventDefault();

        handleLogin({ email, password });
    }

    return (
        <div>
            <h1>login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
