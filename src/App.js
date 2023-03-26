import React from "react";
import "./App.css";
import Details from "./components/Details/Details";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import Main from "./components/Main/Main";
import {
    PushToTalkButton,
    PushToTalkButtonContainer,
    ErrorPanel,
} from "@speechly/react-ui";

function App() {
    const classes = useStyles();
    return (
        <div className="App">
            <Grid
                className={classes.grid}
                container
                spacing={0}
                alignItems="center"
                justifyContent="center"
                style={{ height: "100vh" }}
            >
                <Grid item xs={12} sm={4} className={classes.mobile}>
                    <Details title="Income"></Details>
                </Grid>
                <Grid item xs={12} sm={3} className={classes.main}>
                    <Main />
                </Grid>
                <Grid item xs={12} sm={4} className={classes.desktop}>
                    <Details title="Income"></Details>
                </Grid>
                <Grid item xs={12} sm={4} className={classes.last}>
                    <Details title="Expense"></Details>
                </Grid>
            </Grid>
            <PushToTalkButtonContainer>
                <PushToTalkButton />
                {/* <ErrorPanel /> */}
            </PushToTalkButtonContainer>
        </div>
    );
}

export default App;
