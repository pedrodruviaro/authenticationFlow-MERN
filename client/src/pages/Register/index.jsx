import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { Form } from "../../styles/Form";
import { Button } from "../../styles/Button";
import { Container } from "../../styles/Container";
import { ErrorMsg } from "../../styles/ErrorMsg";

export default function Index() {
    const { handleRegister, validationError, setValidationError } =
        useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [passwordType, setPasswordType] = useState("password");

    function handleSubmit(e) {
        e.preventDefault();

        if (password !== confirmPassword) {
            setValidationError("Passwords must match!");
            return;
        }

        handleRegister({ username, email, password });
    }

    function showPassword() {
        if (passwordType === "text") {
            setPasswordType("password");
        } else {
            setPasswordType("text");
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit} className="pop">
                <h2>Register</h2>
                {validationError && (
                    <ErrorMsg style={{ color: "lightcoral" }}>
                        {validationError}
                    </ErrorMsg>
                )}
                <label htmlFor="email" className="sr-only">
                    Email
                </label>
                <input
                    type="text"
                    id="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="username" className="sr-only">
                    Username
                </label>
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password" className="sr-only">
                    Password
                </label>
                <input
                    id="password"
                    type={passwordType}
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="confirm-password" className="sr-only">
                    Confirm Password
                </label>
                <input
                    id="confirm-password"
                    type={passwordType}
                    placeholder="confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button type="submit">Register</Button>
                <p>
                    Already have an account? <Link to="/login">Login</Link>.
                </p>
            </Form>
        </Container>
    );
}
