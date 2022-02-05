import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import {BrowserRouter as Browser} from "react-router-dom"
const root=document.getElementById("root");
ReactDOM.render(
    <Browser>
    <App/>
    </Browser>
    ,
    root
)