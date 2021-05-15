import React,{ useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios"

import "./FormCadastro.css"


export default function FormCadastro({ children }){

    const [success, setSuccess] = useState("");

    const isEmpresa = children.includes("CNPJ");
    const isColaborador = children.includes("CPF");

    let objectEmpresa = {
        codigo: "",
        cnpj: "",
        nome: "",
        email: "",
        telefone: "",
        endereco: ""
    };

    let objectColaborador = {
        codigo: "",
        cpf: "",
        nome: "",
        email: "",
        telefone: "",
        endereco: "",
        empresa: ""
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        const whichInput = event.target.name;
        if(isEmpresa){
            switch (whichInput) {
                case "Nome":
                    objectEmpresa.nome = value;
                    break;
                case "CNPJ":
                    objectEmpresa.cnpj = value;
                    break;
                case "Código":
                    objectEmpresa.codigo = value;
                    break;
                case "Email":
                    objectEmpresa.email = value;
                    break;
                case "Endereço":
                    objectEmpresa.endereco = value;
                    break;
                case "Telefone":
                    objectEmpresa.telefone = value;
                    break;
            
                default:
                    break;
            }
        } else if (isColaborador){
            switch (whichInput) {
                case "Nome":
                    objectColaborador.nome = value;
                    break;
                case "CPF":
                    objectColaborador.cpf = value;
                    break;
                case "Código":
                    objectColaborador.codigo = value;
                    break;
                case "Email":
                    objectColaborador.email = value;
                    break;
                case "Endereço":
                    objectColaborador.endereco = value;
                    break;
                case "Telefone":
                    objectColaborador.telefone = value;
                    break;
                case "Empresa":
                    objectColaborador.empresa = value;
                    break;
                default:
                    break;
            }
        }
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        if(isEmpresa){
            const request = await setEmpresa();
            if (request && request.status == "200"){
                setSuccess(request.status);
                alert("Cadastro realizado com sucesso");
            }
        } else if(isColaborador){
            const request = await setColaborador();
            if (request && request.status == "200"){
                setSuccess(request.status);
                alert("Cadastro realizado com sucesso");
            }
        }
    };

    const setEmpresa = async() =>{
        try {
            const response = await axios.post("/empresas/cadastrar", objectEmpresa);
            return response
        } catch (error) {
            alert(JSON.stringify(error.response.data));
        }
    };

    const setColaborador = async() =>{
        try {
            const response = await axios.post("/colaborador/cadastrar", objectColaborador);
            return response
        } catch (error) {
            alert(JSON.stringify(error.response.data));
        }
    };

    return(
        <div>
            {success == "200" && (
                <Redirect to="/"  />
            )}
            <form onSubmit={handleSubmit}>
                {Object.entries(children).map((child) => {
                        return <div className="input">
                            <label>{child[1]}: </label>
                            <br />
                                <input name={child[1]} type="text" onBlur={handleInputChange}></input>
                            <br />
                        </div>
                    })
                }
                <br />
                <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>
        </div>
    );
}