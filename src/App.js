import React from "react";
import { createRoot } from 'react-dom/client';
import Nav from './components/Navbar';
import Main from "./components/Main";

export default function App () {
    return (<> <Nav/> <Main/> </>);
}