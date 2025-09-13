"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
var Empresa = /** @class */ (function () {
    function Empresa(funcionarios, endereco, razaoSocial, nomeFantasia, cnpj, telefones) {
        this.funcionarios = funcionarios;
        this.endereco = endereco;
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.cnpj = cnpj;
        this.telefones = telefones;
    }
    return Empresa;
}());
exports.Empresa = Empresa;
