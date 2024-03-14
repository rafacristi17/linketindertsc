import { getEmpresasInfo } from './empresa';
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
            window.location.href = "candidato.html";
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
}
export function loadCandidato() {
    let candidatos: Candidato[] = JSON.parse(localStorage.getItem('candidatos') || '[]');
    let candidatoAtual: Candidato = candidatos[candidatos.length - 1];

    if (candidatoAtual) {
        let nomeElement = document.getElementById('candidato') as HTMLElement;
        let cpfElement = document.getElementById('cpf') as HTMLElement;
        let dataNascimentoElement = document.getElementById('date') as HTMLElement;
        let estadoElement = document.getElementById('estado') as HTMLElement;
        let descricaoProfissionalElement = document.getElementById('descricaoProfissional') as HTMLElement;
        let emailElement = document.getElementById('email') as HTMLElement;
        let tecnologiasElement = document.getElementById('tecnologias') as HTMLElement;

        if (nomeElement) nomeElement.textContent = candidatoAtual.nome;
        if (cpfElement) cpfElement.textContent = candidatoAtual.cpf;
        if (dataNascimentoElement) dataNascimentoElement.textContent = candidatoAtual.dataNascimento;
        if (estadoElement) estadoElement.textContent = candidatoAtual.estado;
        if (descricaoProfissionalElement) descricaoProfissionalElement.textContent = candidatoAtual.descricaoProfissional;
        if (emailElement) emailElement.textContent = candidatoAtual.email;
        if (tecnologiasElement) tecnologiasElement.textContent = candidatoAtual.tecnologias.join(', ');
    } 
}
   export function getCandidatosInfo(){
    let candidatos: Candidato[] = JSON.parse(localStorage.getItem('candidatos') || '[]');
    return candidatos.map(candidato => {
        return {
            nome:candidato.nome,
            cpf:candidato.cpf,
            dataNascimento:candidato.dataNascimento, 
            estado:candidato.estado,
            descricaoProfissional:candidato.descricaoProfissional,
            email: candidato.email,
            tecnologias: candidato.tecnologias
            
        }; });}
        function ocultarDados(dado: string): string {
            if (!dado) {
                return 'N/A';
            }
            const tamanho = dado.length;
            let oculto = '';
            for(let i = 0; i < tamanho; i++) {
                oculto += '*';
            }
            return oculto;
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
                    <p>País: ${info.pais}</p>
                    <p>Estado: ${ocultarDados(info.estado)}</p>
                    <p>CEP: ${ocultarDados(info.cep)}</p>
                    <p>Descrição: ${info.descricao}</p>
                    <p>Título da Vaga: ${info.titulovaga}</p>
                    <p>Descrição da Vaga: ${info.descricaovaga}</p>
                    <p>Tecnologias: ${info.tecnologias ? info.tecnologias.join(', ') : 'N/A'}</p>
                    <hr>
                `;
            })

        }
    });
});