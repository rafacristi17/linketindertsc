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
