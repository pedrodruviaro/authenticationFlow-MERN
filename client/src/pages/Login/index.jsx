import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { Button } from "../../styles/Button";
import { Form } from "../../styles/Form";
import { Container } from "../../styles/Container";
import { ErrorMsg } from "../../styles/ErrorMsg";

export default function Index() {
    const { handleLogin, validationError } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        handleLogin({ email, password });
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit} className="pop">
                <h2>login</h2>
                {validationError && <ErrorMsg>{validationError}</ErrorMsg>}
                <label htmlFor="email" className="sr-only">
                    Email
                </label>
                <input
                    id="email"
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password" className="sr-only">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit">Login</Button>
                <p>
                    Don't have an account?{" "}
                    <Link to="/register">Create one</Link>.
                </p>
            </Form>
        </Container>
    );
}
