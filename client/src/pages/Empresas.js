import React,{ useState, useEffect } from "react";
import axios from "axios"

import BackButton from "../components/BackButton.js"
import CardEmpresa from "../components/CardEmpresa.js"
import Spinner from "../components/Spinner"

export default function Empresas(){

    const [empresas, setEmpresas] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(async() => {
        const request = await getEmpresas();
        setEmpresas(request.data);
        setIsLoading(false);
    }, []);
    
    const getEmpresas = async() => {
        try {
            const response = await axios.get("/empresas");
            return response;
        } catch (error) {
            alert(JSON.stringify(error.response.data));
        }
    };

    return(
        <div>
            <BackButton />
            <h1>Empresas</h1>
            {empresas == "" && isLoading &&
                <div>
                    <br></br>
                    <div className="col-md-4 offset-md-2">
                        <Spinner />
                    </div>
                </div>
            }
            {empresas == "" && !isLoading &&
                <div>
                    <br></br>
                    <p style={{color: "white"}}>Sem dados</p>
                </div>
            }
            {empresas != "" &&
                Object.entries(empresas).map((empresa) => {
                    return <CardEmpresa dataEmpresa = {empresa} key={empresa[1].codigo}/>
                })
            }
        </div>
    );
}