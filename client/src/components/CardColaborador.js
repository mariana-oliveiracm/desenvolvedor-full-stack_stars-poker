import React,{ useState, useEffect } from "react";
import axios from "axios"

import "./CardColaborador.css"
import Spinner from "./Spinner.js"

export default function Colaborador({ codigoEmpresa }){
    const [colaboradores, setColaboradores] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(async() => {
        const request = await getColaboradores();
        setColaboradores(request.data);
        setIsLoading(false);
    }, []);
    
    const getColaboradores = async() => {
        try {
            const response = await axios.get(`/empresas/${codigoEmpresa}/colaboradores`);
            return response;
        } catch (error) {
            alert(JSON.stringify(error.response.data));
        }
    };

    return(
        <div>
            {isLoading && 
                <div>
                    <br></br>
                    <div className="col-md-4 offset-md-2">
                        <Spinner />
                    </div>
                </div>
            }
            {!isLoading && colaboradores == "" &&
                <div>
                    <br></br>
                    Sem dados
                </div>
            }
            <div className="row">
                {colaboradores != "" &&
                    Object.entries(colaboradores).map((colaborador) => {
                        return <div className="col-md-4 col-lg-3 cardColaborador" key={colaborador[1].codigo}>
                            <span>Nome:</span> {colaborador[1].nome}
                            <br/>
                            <span>CPF:</span> {colaborador[1].cpf}
                            <br/>
                            <span>Código:</span> {colaborador[1].codigo}
                            <br/>
                            <span>Email:</span> {colaborador[1].email}
                            <br/>
                            <span>Endereço:</span> {colaborador[1].endereco}
                            <br/>
                            <span>Telefone:</span> {colaborador[1].telefone}
                        </div>
                    })
                }
            </div>
        </div>
    );
}