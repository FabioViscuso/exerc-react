import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import {store} from './Store'
import {counterIncrement} from './CounterReducer'

/* const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />); */

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(counterIncrement());