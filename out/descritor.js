"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Descritor = void 0;
var Descritor = /** @class */ (function () {
    function Descritor() {
    }
    Descritor.prototype.descrever = function (empresa) {
        console.log("Raz\u00E3o social: ".concat(empresa.razaoSocial));
        console.log("Nome fantasia: ".concat(empresa.nomeFantasia));
        console.log("Cnpj: ".concat(empresa.cnpj));
        console.log("Endereço");
        console.log("Rua: ".concat(empresa.endereco.rua, " Bairro: ").concat(empresa.endereco.bairro, " Cidade: ").concat(empresa.endereco.cidade, " numero: ").concat(empresa.endereco.numero));
        console.log("");
        console.log("funcionários:");
        empresa.funcionarios.forEach(function (funcionario) {
            console.log("Nome: ".concat(funcionario.nome));
            console.log("matricula: ".concat(funcionario.matricula));
            console.log("cpf: ".concat(funcionario.cpf));
            console.log("Rua: ".concat(funcionario.endereco.rua, " Bairro: ").concat(funcionario.endereco.bairro, " Cidade: ").concat(funcionario.endereco.cidade, " numero: ").concat(funcionario.endereco.numero));
            console.log("Telefone: (".concat(funcionario.telefone.ddd, ") ").concat(funcionario.telefone.numero));
            console.log("");
        });
    };
    return Descritor;
}());
exports.Descritor = Descritor;
