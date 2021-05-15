import React from "react";

import BackButton from "../components/BackButton.js"
import FormCadastro from "../components/FormCadastro.js";


export default function CadastrarEmpresa(){

    const dadosEmpresa = [
        "Nome",
        "CNPJ",
        "Código",
        "Email",
        "Endereço",
        "Telefone"
    ];

    return(
        <div>
            <BackButton />
            <h1>Cadastrar Empresa</h1>
            <FormCadastro>{dadosEmpresa}</FormCadastro>
        </div>
    );
}