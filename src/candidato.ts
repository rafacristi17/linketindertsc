import { getEmpresasInfo, gerarGraficoTecnologias } from './empresa';

export class Candidato {
    nome: string;
    cpf: string;
    dataNascimento: string;
    estado: string;
    descricaoProfissional: string;
    email: string;
    senha: string;
    tecnologias: string[];

    constructor(nome: string, cpf: string, dataNascimento: string, estado: string, descricaoProfissional: string, email: string, senha: string, tecnologias: string[]) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.estado = estado;
        this.descricaoProfissional = descricaoProfissional;
        this.email = email;
        this.senha = senha;
        this.tecnologias = tecnologias;
    }
}

export let candidatos: Candidato[] = JSON.parse(localStorage.getItem('candidatos') || '[]');

export function submitForm() {
document.getElementById('meuFormulario')?.addEventListener('submit', (event) => {
    event.preventDefault();
    let nome = (document.getElementById('nome') as HTMLInputElement).value;
    let cpf = (document.getElementById('cpf') as HTMLInputElement).value;
    let dataNascimento = (document.getElementById('date') as HTMLInputElement).value;
    let estado = (document.getElementById('estado') as HTMLInputElement).value;
    let descricaoProfissional = (document.getElementById('message') as HTMLInputElement).value;
    let email = (document.getElementById('email') as HTMLInputElement).value;
    let senha = (document.getElementById('senha') as HTMLInputElement).value;
    let tecnologias = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(cb => (cb as HTMLInputElement).name);

    if (nome && cpf && dataNascimento && estado && descricaoProfissional && email && senha && tecnologias.length > 0) {
        let candidato = new Candidato(nome, cpf, dataNascimento, estado, descricaoProfissional, email, senha, tecnologias);
        candidatos.push(candidato);
        localStorage.setItem('candidatos', JSON.stringify(candidatos));
        window.location.href = 'candidato.html';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
})};
export function loadCandidato() {
window.onload = function() {
    let candidatos: Candidato[] = JSON.parse(localStorage.getItem('candidatos') || '[]');
    let candidatoAtual: Candidato = candidatos[candidatos.length - 1];

    if (candidatoAtual) {
        (document.getElementById('candidato')! as HTMLElement).textContent = candidatoAtual.nome;
        (document.getElementById('cpf')! as HTMLElement).textContent = candidatoAtual.cpf;
        (document.getElementById('dataNascimento')! as HTMLElement).textContent = candidatoAtual.dataNascimento;
        (document.getElementById('estado')! as HTMLElement).textContent = candidatoAtual.estado;
        (document.getElementById('descricaoProfissional')! as HTMLElement).textContent = candidatoAtual.descricaoProfissional;
        (document.getElementById('email')! as HTMLElement).textContent = candidatoAtual.email;
        (document.getElementById('tecnologias')! as HTMLElement).textContent = candidatoAtual.tecnologias.join(', ');
    }
}
}function ocultarDados(dado: string): string {
    const tamanho = dado.length;
    const inicio = dado.slice(0, tamanho / 4);
    const fim = dado.slice(-tamanho / 4);
    return `${inicio}**${fim}`;
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('btnEmpresas')?.addEventListener('click', () => {
        let empresasInfo = getEmpresasInfo();
        let empresasInfoElement = document.getElementById('empresasInfo') as HTMLElement;
        empresasInfoElement = empresasInfoElement ?? document.createElement('div');
        if(empresasInfoElement) {
            empresasInfoElement.innerHTML = '';
            empresasInfo.forEach((info, index) => {
                empresasInfoElement.innerHTML += `
                    <h2>Empresa ${index + 1}</h2>
                    <p>Nome: ${ocultarDados(info.nome)}<p>
                    <p>Email: ${ocultarDados(info.email)}</p>
                    <p>Senha: ${info.senha}</p>
                    <p>País: ${info.pais}</p>
                    <p>Estado: ${ocultarDados(info.estado)}</p>
                    <p>CEP: ${ocultarDados(info.cep)}</p>
                    <p>Descrição: ${info.descricao}</p>
                    <p>Título da Vaga: ${info.titulovaga}</p>
                    <p>Descrição da Vaga: ${info.descricaovaga}</p>
                    <p>Tecnologias: ${info.tecnologias ? info.tecnologias.join(', ') : 'N/A'}</p>
                    <hr>
                `;
            });
        }
    });
});
let meuElemento = document.getElementById('meuElemento');
if (meuElemento) {
    meuElemento.addEventListener('click', () => {
        let tecnologiasCliques: { [key: string]: number };
        try {
            tecnologiasCliques = JSON.parse(localStorage.getItem('tecnologiasCliques') || '{}');
        } catch (e) {
            console.error('Erro ao analisar tecnologiasCliques:', e);
            return;
        }

        let grafico = '';
        for(let tecnologia in tecnologiasCliques) {
            grafico += `${tecnologia}: ${'*'.repeat(tecnologiasCliques[tecnologia])}\n`;
        }
        alert(grafico);
    });
}



