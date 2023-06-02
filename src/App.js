import React from "react";
import "./App.css";
import useStyles from "./appStyles";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Income from "./components/Income/Income";
import GridComp from "./components/GridComp/GridComp";
import Expense from "./components/Expense/Expense";

function App() {
    const classes = useStyles();
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" exact element={<GridComp />}></Route>
                    <Route path="/income" exact element={<Income />}></Route>
                    <Route path="/expense" exact element={<Expense />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
