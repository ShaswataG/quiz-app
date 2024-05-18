import React from "react";
import { createRoot } from 'react-dom/client'
import App from "./App";
import './styles/intro.css'
import './styles/main.css'

createRoot(document.querySelector("#root")).render(<App />)