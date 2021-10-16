import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

export default function Idex() {
    const { user, loading, handleLogout } = useContext(AuthContext);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1>home page</h1>
            <h2>username: {user.username}</h2>
            <h2>email: {user.email}</h2>
            <h2>token {user.token}</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
