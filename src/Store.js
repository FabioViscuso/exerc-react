import { createStore } from "@reduxjs/toolkit";
import { counterReducer } from "./CounterReducer";

export const store = createStore(counterReducer);