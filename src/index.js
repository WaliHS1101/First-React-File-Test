import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppB } from "./AppB";
import {AppC,AppD} from "./AppC"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        <App />
        <AppB />
        {AppC()}
        {AppD()}
    </>
)