import React from "react";

import "./CardEmpresa.css"
import CardColaborador from "./CardColaborador.js"

export default function CardEmpresa({ dataEmpresa }){
    const finalData = dataEmpresa[1];

    return(
        <div className="cardEmpresa">
            <div className="row empresa">
                <div className="col-md-12">
                    <h4>Dados da Empresa:</h4>
                    <span>Nome:</span> {finalData.nome}
                    <br/>
                    <span>CNPJ:</span> {finalData.cnpj}
                    <br/>
                    <span>Código:</span> {finalData.codigo}
                    <br/>
                    <span>Email:</span> {finalData.email}
                    <br/>
                    <span>Endereço:</span> {finalData.endereco}
                    <br/>
                    <span>Telefone:</span> {finalData.telefone}
                </div>
            </div>
            <div className="row colaboradores">
                <div className="col-md-12">
                    <h4>Dados dos Colaboradores:</h4>
                    <CardColaborador codigoEmpresa = {finalData.codigo}/>
                </div>
            </div>
        </div>
    );
}