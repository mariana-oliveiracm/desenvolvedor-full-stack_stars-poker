const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./db/db.json");
const db = lowdb(adapter);

exports.setDb = () => {
    db
        .defaults({
            empresas: [],
            colaboradores: []
        })
        .write();
};

exports.getEmpresas = () => {
    return db
        .get("empresas")
        .value();
};

exports.getEmpresaById = (id) => {
    return db
        .get("empresas")
        .find({codigo : id})
        .value();
};

exports.getColaboradores = () => {
    return db
        .get("colaboradores")
        .value();
};

exports.getColaboradorById = (id) => {
    return db
        .get("colaboradores")
        .find({codigo : id})
        .value();
};

exports.setEmpresa = (empresa) => {
    db
        .get("empresas")
        .push({
            codigo: empresa.codigo,
            cnpj: empresa.cnpj,
            nome: empresa.nome,
            email: empresa.email,
            telefone: empresa.telefone,
            endereco: empresa.endereco,
        })
        .write();
};

exports.setColaborador = (colaborador) => {
    db
        .get("colaboradores")
        .push({
            codigo: colaborador.codigo,
            cpf: colaborador.cpf,
            nome: colaborador.nome,
            email: colaborador.email,
            telefone: colaborador.nome,
            endereco: colaborador.endereco,
            empresa: colaborador.empresa
        })
        .write();
};