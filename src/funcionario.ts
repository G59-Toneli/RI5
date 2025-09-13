import { Endereco } from "./endereco";
import { Telefone } from "./telefone";

export class Funcionario {
    constructor(
        public nome: string,
        public matricula: string,
        public cpf: string,
        public endereco: Endereco,
        public telefone: Telefone
    ) {}
}