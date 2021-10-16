import { Route, Switch, Redirect } from "react-router-dom";

// components
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { useContext } from "react";
import { AuthContext } from "./contexts/authContext";

function PrivateRoute({ component: Component, ...rest }) {
    const { authorized } = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={(props) => {
                if (authorized) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {
                                    from: props.location,
                                },
                            }}
                        />
                    );
                }
            }}
        />
    );
}

export default function Routes() {
    return (
        <Switch>
            <PrivateRoute exact path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Switch>
    );
}
