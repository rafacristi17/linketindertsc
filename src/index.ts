import { Candidato, candidatos, submitForm, loadCandidato } from './candidato'

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

submitForm();
loadCandidato();

import{Empresa, empresas, submitFormE, loadEmpresa} from './empresa'

let nomeE = 'nomeE';
let emailE = 'emailE';
let cnpjE = 'cnpjE';
let paisE = 'paisE';
let estadoE = 'estadoE';
let cepE = 'cepE';
let descricaoE = 'descricaoE';
let titulovagaE = 'titulovagaE';
let descricaovagaE = 'descricaovagaE';
let senhaE = 'senhaE';

let checkbox = document.querySelectorAll('input[type-checbox]:checked');
let tecnologiasvagaE = Array.from(checkbox).map(c=>(c as HTMLInputElement).value);

let novaEmpresa = new Empresa(nomeE, emailE, cnpjE, paisE, estadoE, cepE, descricaoE,titulovagaE, descricaovagaE, tecnologiasvagaE, senhaE) 

empresas.push(novaEmpresa);

submitFormE();
loadEmpresa();

import{Vaga, vagas, addVaga, deleteVaga} from './empresa'

let titulovaga = 'titulovaga';
let descricaovaga = 'descricaovaga';

let checkboxV = document.querySelectorAll('input[type-checbox]:checked');
let tecnologiasvaga = Array.from(checkboxV).map(c=>(c as HTMLInputElement).value);

let novaVaga = new Vaga (titulovaga,descricaovaga, tecnologiasvaga)

vagas.push(novaVaga)

addVaga();
deleteVaga();


