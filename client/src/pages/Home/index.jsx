import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../contexts/authContext";
import { Container } from "../../styles/Container";
import { Button } from "../../styles/Button";

const Infos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: min(40rem, 100%);
    word-wrap: break-word;
    background-color: #fff;
    padding: 1rem;

    > h2 {
        font-size: 2rem;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-align: center;
    }

    > p {
        font-weight: 600;
        line-height: 1.5;
        font-size: 1.1rem;

        > span {
            margin-left: 0.25rem;
            font-weight: 400;
            font-size: 1rem;
        }
    }
`;

export default function Idex() {
    const { user, loading, handleLogout } = useContext(AuthContext);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <Container>
            <Infos>
                <h2>Your Informations</h2>
                <p>
                    Username:
                    <span>{user.username}</span>
                </p>
                <p>
                    Email:
                    <span>{user.email}</span>
                </p>
                <p>
                    Token:
                    <span>{user.token}</span>
                </p>
                <Button onClick={handleLogout}>Logout</Button>
            </Infos>
        </Container>
    );
}
