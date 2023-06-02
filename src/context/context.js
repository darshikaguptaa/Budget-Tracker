import React, { useReducer, createContext } from "react";

import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem("transactions")) || [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    //Actions
    const deleteTransaction = (id) => {
        dispatch({ type: "DELETE_TRANSACTION", payload: id });
    };

    const addTransaction = (transaction) => {
        dispatch({ type: "ADD_TRANSACTION", payload: transaction });
    };

    const balance = transactions.reduce((acc, currVal) => {
        return currVal.type === "Expense"
            ? acc - currVal.amount
            : acc + currVal.amount;
    }, 0);

    const spent = transactions.filter((t) => {
        if (t.type === "Expense") {
            return t;
        }
    });
    const recieved = transactions.filter((t) => {
        if (t.type === "Income") {
            return t;
        }
    });

    console.log({ spent, recieved });

    return (
        <ExpenseTrackerContext.Provider
            value={{
                deleteTransaction,
                addTransaction,
                transactions,
                balance,
                spent,
                recieved,
            }}
        >
            {children}
        </ExpenseTrackerContext.Provider>
    );
};
