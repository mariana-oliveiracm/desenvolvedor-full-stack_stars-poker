import React from "react";
import { BrowserRouter, Route } from "react-router-dom"

import Home from "./pages/Home.js"
import Empresas from "./pages/Empresas.js"
import CadastrarEmpresa from "./pages/CadastrarEmpresa.js"
import CadastrarColaborador from "./pages/CadastrarColaborador.js"

function Routes() {
    return (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/empresas" component={Empresas} />
        <Route exact path="/empresas/cadastrar" component={CadastrarEmpresa} />
        <Route exact path="/colaborador/cadastrar" component={CadastrarColaborador} />
    </BrowserRouter>
    );
}

export default Routes;