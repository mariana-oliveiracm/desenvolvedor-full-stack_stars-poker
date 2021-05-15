import React from "react";

import BackButton from "../components/BackButton.js"
import FormCadastro from "../components/FormCadastro.js"


export default function CadastrarColaborador(){

    const dadosColaborador = [
        "Nome",
        "CPF",
        "Código",
        "Email",
        "Endereço",
        "Telefone",
        "Empresa"
    ];

    return(
        <div>
            <BackButton />
            <h1>Cadastrar Colaborador</h1>
            <FormCadastro>{dadosColaborador}</FormCadastro>
        </div>
    );
}