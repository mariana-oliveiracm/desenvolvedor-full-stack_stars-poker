const express = require("express");
const router = express.Router();
const { getEmpresas, getEmpresaId, getColaboradoresEmpresa, setEmpresa, setColaboradorEmpresa } = require("../controller/controller.js");

router.get("/empresas", getEmpresas);
router.get("/empresas/:id", getEmpresaId);
router.get("/empresas/:id/colaboradores", getColaboradoresEmpresa);
router.post("/empresas/cadastrar", setEmpresa);
router.post("/colaborador/cadastrar", setColaboradorEmpresa);

module.exports = router;