import React from "react";
import Details from "../Details/Details";
import { Grid } from "@material-ui/core";
import Main from "../Main/Main";
import {
    PushToTalkButton,
    PushToTalkButtonContainer,
} from "@speechly/react-ui";
import useStyles from "../../appStyles";

const GridComp = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid
                className={classes.grid}
                container
                spacing={2}
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
            </PushToTalkButtonContainer>
        </div>
    );
};

export default GridComp;
