import React from "react";
import Main from "../template/Main";

export default (props) => {
    return (
        <Main icon="home" title="Início" subtitle="Segundo projeto do capítulo de React.">
            <div className="display-4">Bem-vindo!</div>
            <hr></hr>
            <p className="mb-0">Sistema para exemplificar a construção de um cadastro de clientes desenvolvido em React!</p>
        </Main>
    )
}