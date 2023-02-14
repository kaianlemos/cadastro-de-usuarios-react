import React from "react";

import './App.css'

import Logo from "../components/template/Logo";
import Nav from "../components/template/Nav";
import Main from "../components/template/Main";
import Footer from "../components/template/Footer";

export default (props) => {
    return (
        <div className="app">
            <Logo></Logo>
            <Nav></Nav>
            <Main></Main>
            <Footer></Footer>
        </div>
    )
}
