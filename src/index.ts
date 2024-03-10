import { Candidato, candidatos, submitForm as submitFormCandidato, loadCandidato } from './candidato'
import { Empresa, empresas, submitForm as submitFormEmpresa, loadEmpresa } from './empresa'


function criarCandidato() {
    let nome = "Nome";
    let cpf = "CPF";
    let dataNascimento = "Data de Nascimento";
    let estado = "Estado";
    let descricaoProfissional = "Descrição Profissional";
    let email = "Email";
    let senha = "Senha";

    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    let tecnologias = Array.from(checkboxes).map(c => (c as HTMLInputElement).value);

    let novoCandidato = new Candidato(nome, cpf, dataNascimento, estado, descricaoProfissional, email, senha, tecnologias);

    candidatos.push(novoCandidato);

    submitFormCandidato();
    loadCandidato();
}

function criarEmpresa() {
    let nome = 'nome';
    let email = 'email';
    let cnpj= 'cnpj';
    let pais = 'pais';
    let estado = 'estado';
    let cep = 'cep';
    let descricao = 'descricao';
    let titulovaga = 'titulovaga';
    let descricaovaga= 'descricaovaga';
    let senha = 'senha';

    let checkbox = document.querySelectorAll('input[type=checkbox]:checked');
    let tecnologiasvaga = Array.from(checkbox).map(c=>(c as HTMLInputElement).value);

    let novaEmpresa = new Empresa(nome, email, cnpj, pais, estado, cep, descricao,titulovaga, descricaovaga, tecnologiasvaga, senha) 

    empresas.push(novaEmpresa);

    submitFormEmpresa();
    loadEmpresa();
}

criarCandidato();
criarEmpresa();






