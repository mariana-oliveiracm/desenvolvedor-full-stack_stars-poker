const { getEmpresas, getEmpresaById, getColaboradores, getColaboradorById, setEmpresa, setColaborador } = require("../db/banco.js");

exports.getEmpresas = (req, res) => {
    try {
        const empresas = getEmpresas();
        res.json(empresas);       
    } catch (error) {
        res.status(400).send(error.message);
    };
};

exports.getEmpresaId = (req, res) => {
    try {
        const idEmpresa = req.params.id;
        const empresa = getEmpresaById(idEmpresa);
        res.json(empresa);     
    } catch (error) {
        res.status(400).send(error.message);
    }; 
};

exports.getColaboradoresEmpresa = (req, res) => {
    try {
        const idEmpresa = req.params.id;
        const colaboradores = getColaboradores();
        let colaboradoresEmpresa = colaboradores.filter((colaborador) => {
            return colaborador.empresa == idEmpresa
        })
        res.json(colaboradoresEmpresa);     
    } catch (error) {
        res.status(400).send(error.message);
    };  
};

exports.setEmpresa = (req, res) => {
    try {
        const codigo = req.body.codigo;
        const cnpj = req.body.cnpj;
        const nome = req.body.nome;
        const email = req.body.email;
        const telefone = req.body.telefone;
        const endereco = req.body.endereco;

        const requiredHaveValue = codigo.length > 0 && cnpj.length > 0 && nome.length > 0 && email.length > 0 && endereco.length > 0;
        const getEmpresa = getEmpresaById(codigo);
        const uniqueCode = getEmpresa == undefined;

        if(!requiredHaveValue){
            throw new Error("Campos obrigatórios: codigo, cnpj, nome, email e endereço");
        } else if (!uniqueCode){
            throw new Error("Já existe uma empresa com esse código");
        } else {
            validateEmail(email);
        }

        const empresa = {
            codigo,
            cnpj,
            nome,
            email,
            telefone,
            endereco
        };

        setEmpresa(empresa);
        res.status(200).send(`Empresa ${nome} cadastrada com sucesso!`);

    } catch (error) {
        res.status(400).send(error.message);
    };
};

exports.setColaboradorEmpresa = (req, res) => {
    try {
        const codigo = req.body.codigo;
        const cpf = req.body.cpf;
        const nome = req.body.nome;
        const email = req.body.email;
        const telefone = req.body.telefone;
        const endereco = req.body.endereco;
        const empresa = req.body.empresa;

        const requiredHaveValue = codigo.length > 0 && cpf.length > 0 && nome.length > 0 && email.length > 0 && endereco.length > 0 && empresa.length > 0;
        const getColaborador = getColaboradorById(codigo);
        const uniqueCode = getColaborador == undefined;

        if(!requiredHaveValue){
            throw new Error("Campos obrigatórios: codigo, cpf, nome, email, endereço e empresa");
        } else if (!uniqueCode){
            throw new Error("Já existe um colaborador com esse código");
        } else {
            validateEmail(email);
        }

        const colaborador = {
            codigo,
            cpf,
            nome,
            email,
            telefone,
            endereco,
            empresa
        };
        setColaborador(colaborador);
        res.status(200).send(`Colaborador ${nome} cadastrado com sucesso na empresa ${empresa}!`);
    } catch (error) {
        res.status(400).send(error.message);
    };
};

const validateEmail = (email) => {
    const regex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/;
    if (!regex.test(email)){
        throw new Error("Email inválido");
    }
}