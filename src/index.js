import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./context/context";
import "./index.css";
import App from "./App";
import { SpeechProvider } from "@speechly/react-client";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );
ReactDOM.render(
    <SpeechProvider
        appId="59edfab9-6c5d-48c8-bb57-2f670fd3920b"
        language="en-US"
    >
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById("root")
);
