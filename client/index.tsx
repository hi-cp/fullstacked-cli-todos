// Client Entrypoint
import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";

let div = document.querySelector("div");
if(!div){
    div = document.createElement("div");
    document.body.append(div);
}

createRoot(div).render(<App />)