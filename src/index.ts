import { Candidato,candidatos, submitForm, loadCandidato , getCandidatosInfo} from './candidato'
import { Empresa, empresas, submitEmpresaForm, loadEmpresa, getEmpresasInfo } from './empresa'


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

    submitForm();
    loadCandidato();
    getCandidatosInfo();
     
}

function criarEmpresa() {
    let nome = 'nome';
    let email = 'email';
    let senha = 'senha';
    let cnpj= 'cnpj';
    let pais = 'pais';
    let estado = 'estado';
    let cep = 'cep';
    let descricao = 'descricao';
    let titulovaga = 'titulovaga';
    let descricaovaga= 'descricaovaga';
    let checkbox = document.querySelectorAll('input[type=checkbox]:checked');
    let tecnologias = Array.from(checkbox).map(c=>(c as HTMLInputElement).value);

    let novaEmpresa = new Empresa(nome, email, senha, cnpj, pais, estado, cep, descricao, descricaovaga, titulovaga, tecnologias);
    empresas.push(novaEmpresa);

    submitEmpresaForm();
    loadEmpresa();
    getEmpresasInfo();
        
}

criarCandidato();
criarEmpresa();
