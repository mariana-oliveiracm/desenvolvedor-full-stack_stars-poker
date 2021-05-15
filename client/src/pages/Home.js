import React, { useEffect }  from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css"

export default function Home(){

    useEffect( async () =>{
        const request = await axios.get("/api")
        console.log(request);
    }, [])

    return(
        <div>
            <div className="row logo col-md-6">
            </div>
            <div className="row">
                <div className="col-md-6">
                    <Link to={{pathname: "/empresas"}}>
                        <button type="button" className="btn btn-outline-light">Ver empresas</button>
                    </Link>
                    <Link to={{pathname: "/empresas/cadastrar"}}>
                        <button type="button" className="btn btn-outline-light">Cadastrar empresa</button>
                    </Link>
                    <Link to={{pathname: "/colaborador/cadastrar"}}>
                        <button type="button" className="btn btn-outline-light">Cadastrar colaborador</button>
                    </Link> 
                </div>
            </div>
        </div>
    );
}