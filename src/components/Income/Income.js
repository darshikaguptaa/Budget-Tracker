import React, { useContext } from "react";
import { ExpenseTrackerContext } from "../../context/context";
// import ListItemButton from "@material-ui/material/ListItemButton";
// import ListItemText from "@material-ui/material/ListItemText";

const Income = () => {
    const { recieved } = useContext(ExpenseTrackerContext);
    return (
        <div>
            {/* <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Spam" />
            </ListItemButton> */}

            {recieved.map((t) => (
                <>
                    <p>{t.category}</p>
                    <p>{t.amount}</p>
                </>
            ))}
        </div>
    );
};

export default Income;
