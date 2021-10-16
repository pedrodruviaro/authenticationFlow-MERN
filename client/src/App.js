import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/authContext";
import Routes from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";

export default function App() {
    return (
        <BrowserRouter>
            <AuthContextProvider>
                <Routes />
            </AuthContextProvider>

            <GlobalStyles />
        </BrowserRouter>
    );
}
