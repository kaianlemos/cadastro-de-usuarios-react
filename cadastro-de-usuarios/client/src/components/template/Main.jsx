import React from "react";

import './Main.css'
import Header from './Header'

export default (props) => {
    return (
        <React.Fragment>
            <Header></Header>
            <main className="content">
                Conteúdo
            </main>
        </React.Fragment>
    )
}