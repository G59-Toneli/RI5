import { Empresa } from "./empresa";
import { Funcionario } from "./funcionario";
import { Telefone } from "./telefone"

export class Descritor {
    descrever(empresa: Empresa): void {
        console.log(`Razão social: ${empresa.razaoSocial}`);
        console.log(`Nome fantasia: ${empresa.nomeFantasia}`);
        console.log(`Cnpj: ${empresa.cnpj}`);
        console.log("Endereço");
        console.log(`Rua: ${empresa.endereco.rua} Bairro: ${empresa.endereco.bairro} Cidade: ${empresa.endereco.cidade} numero: ${empresa.endereco.numero}`);
        console.log("");
        
        console.log("funcionários:");
        empresa.funcionarios.forEach((funcionario: Funcionario) => {
            console.log(`Nome: ${funcionario.nome}`);
            console.log(`matricula: ${funcionario.matricula}`);
            console.log(`cpf: ${funcionario.cpf}`);
            console.log(`Rua: ${funcionario.endereco.rua} Bairro: ${funcionario.endereco.bairro} Cidade: ${funcionario.endereco.cidade} numero: ${funcionario.endereco.numero}`);
            console.log(`Telefone: (${funcionario.telefone.ddd}) ${funcionario.telefone.numero}`);
            console.log("");
        });
    }
}