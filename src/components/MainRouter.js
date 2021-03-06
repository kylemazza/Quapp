import React from "react";
import { Route, Switch } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import BottomNavigation from "@material-ui/core/BottomNavigation";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import MenuBar from "./MenuBar";
import Footer from "./Footer";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Quiz from "./Quiz";
import Settings from "./Settings";
import PrivacyPolicy from "./PrivacyPolicy";
import Terms from "./Terms";
import FourOhFour from "./FourOhFour";

const styles = theme => ({
    root: {
        position: "relative",
        minHeight: "100%"
    }
});

class MainRouter extends React.Component {
    componentDidMount() {
        const jssStyles = document.getElementById("jss-server-side");
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const { classes, authUser } = this.props;
        console.log("User logged in?");
        console.log(authUser);
        return (
            <div className={classes.root}>
                <MenuBar authUser={authUser} />
                <Switch>
                    <PublicRoute
                        exact
                        path="/"
                        component={Home}
                        authUser={authUser}
                    />
                    <PublicRoute
                        path="/signup"
                        component={Signup}
                        authUser={authUser}
                    />
                    <PublicRoute
                        path="/login"
                        component={Login}
                        authUser={authUser}
                    />
                    <PrivateRoute
                        path="/dashboard"
                        component={Dashboard}
                        authUser={authUser}
                    />
                    <PrivateRoute
                        path="/quiz"
                        component={Quiz}
                        authUser={authUser}
                    />
                    <PrivateRoute
                        path="/settings"
                        component={Settings}
                        authUser={authUser}
                    />
                    <Route path="/privacypolicy" component={PrivacyPolicy} />
                    <Route path="/terms" component={Terms} />
                    <Route path="*" component={FourOhFour} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withStyles(styles)(MainRouter);
