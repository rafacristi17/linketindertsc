import { getCandidatosInfo} from './candidato';

export class Empresa {
    nome: string;
    email: string;
    senha: string;
    cnpj: string;
    pais: string;
    estado: string;
    cep: string;
    descricao: string;
    titulovaga: string;
    descricaovaga: string;
    tecnologias: string[];

    constructor( nome: string, email: string, senha: string, cnpj: string, pais: string,  estado: string, cep: string, descricao: string, titulovaga: string, descricaovaga: string, tecnologias: string[]){
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.cnpj = cnpj;
    this.pais = pais;
    this.estado = estado;
    this.cep = cep;
    this.descricao = descricao;
    this.titulovaga = titulovaga;
    this.descricaovaga = descricaovaga;
    this.tecnologias = tecnologias;
}}
export let empresas: Empresa[] = JSON.parse(localStorage.getItem('empresas') || '[]');

export function submitEmpresaForm(){
    document.getElementById('meuFormularioEmpresa')?.addEventListener('submit', (event) => {
        event.preventDefault();
    let nome = (document.getElementById('nome') as HTMLInputElement).value;
    let email = (document.getElementById('email') as HTMLInputElement).value;
    let senha = (document.getElementById('senha') as HTMLInputElement)!.value;
    let cnpj = (document.getElementById('cnpj') as HTMLInputElement).value;
    let pais = (document.getElementById('pais') as HTMLInputElement).value;
    let estado = (document.getElementById('estado') as HTMLInputElement).value;
    let cep = (document.getElementById('cep') as HTMLInputElement).value;
    let descricao = (document.getElementById('descricao') as HTMLInputElement).value;
    let titulovaga = (document.getElementById('titulovaga') as HTMLInputElement).value;
    let descricaovaga = (document.getElementById('descricaovaga') as HTMLInputElement).value;
    let tecnologias = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(cb => (cb as HTMLInputElement).name);

    const nomeRegex = /^[a-zA-Z\s]*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const senhaRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{1,8}$/; 
    const cnpjRegex = /^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}\-[0-9]{2}$/;
    const paisRegex = /^[a-zA-Z\s]*$/;
    const estadoRegex = /^[a-zA-Z]{2}$/;
    const cepRegex = /^[0-9]{5}-?[0-9]{3}$/;
    const descricaoRegex =/^[a-zA-Z\s]*$/;
    const titulovagaRegex = /^[a-zA-Z\s]*$/;
    const descricaovagaRegex = /^[a-zA-Z\s]*$/;

    if(!nome || !nomeRegex.test(nome)){   
    alert('Por favor, preencha o campo nome corretamente.');
    } else if (!email || !emailRegex.test(email)) {
        alert('Por favor, preencha o campo email corretamente.');
    } else if (!senha || !senhaRegex.test(senha)) {
        alert('Por favor, preencha o campo senha corretamente. A senha deve ter até 8 caracteres, com pelo menos uma letra, um número e um caractere especial.');
    } else if (!cnpj || !cnpjRegex.test(cnpj)) {
        alert('Por favor, preencha o campo CNPJ corretamente.');
    } else if (!pais || !paisRegex.test(pais)){   
        alert('Por favor, preencha o campo País corretamente.');
    } else if (!estado || !estadoRegex.test(estado)) {
        alert('Por favor, preencha o campo estado corretamente.');
    } else if (!cep || !cepRegex.test(cep)) {
        alert('Por favor, preencha o campo cep corretamente.');           
    } else if (!descricao || !descricaoRegex.test(descricao)) {
        alert('Por favor, preencha o campo descrição da Empresa corretamente.');
    } else if (!titulovaga || !titulovagaRegex.test(titulovaga)) {
        alert('Por favor, preencha o campo Título Vaga corretamente.');
    } else if (!descricaovaga || !descricaovagaRegex.test(descricaovaga)) {
        alert('Por favor, preencha o campo descrição da Vaga corretamente.');
    } else if (tecnologias.length === 0) {
        alert('Por favor, selecione pelo menos uma tecnologia.');
    } else {
        let empresa = new Empresa (nome, email, senha, cnpj, pais, estado, cep, descricao, titulovaga, descricaovaga, tecnologias);
        empresas.push(empresa);
        localStorage.setItem('empresas', JSON.stringify(empresas));
        window.location.href = "empresa.html";
    }
    });
    }

export function loadEmpresa(){
    window.onload = function(){
        let empresas: Empresa[] = JSON.parse(localStorage.getItem('empresas') || '[]');
        let empresaAtual: Empresa = empresas[empresas.length - 1];
        if (empresaAtual) {
            let empresaElement = document.getElementById('empresa') as HTMLElement;
            let emailElement = document.getElementById('email') as HTMLElement;
            let senhaElement = document.getElementById('senha') as HTMLElement;
            let cnpjElement = document.getElementById('cnpj') as HTMLElement;
            let paisElement = document.getElementById('pais') as HTMLElement;
            let estadoElement = document.getElementById('estado') as HTMLElement;
            let cepElement = document.getElementById('cep') as HTMLElement;
            let descricaoElement = document.getElementById('descricao') as HTMLElement;
            let titulovagaElement = document.getElementById('titulovaga') as HTMLElement;
            let descricaovagaElement = document.getElementById('descricaovaga') as HTMLElement;
            let tecnologiasElement = document.getElementById('tecnologias') as HTMLElement;

            if(empresaElement) empresaElement.textContent = empresaAtual.nome;
            if(emailElement) emailElement.textContent = empresaAtual.email;
            if(senhaElement) senhaElement.textContent = empresaAtual.senha;
            if(cnpjElement) cnpjElement.textContent = empresaAtual.cnpj;
            if(paisElement) paisElement.textContent = empresaAtual.pais;
            if(estadoElement) estadoElement.textContent = empresaAtual.estado;
            if(cepElement) cepElement.textContent = empresaAtual.cep;
            if(descricaoElement) descricaoElement.textContent = empresaAtual.descricao;
            if(titulovagaElement) titulovagaElement.textContent = empresaAtual.titulovaga;
            if(descricaovagaElement) descricaovagaElement.textContent = empresaAtual.descricaovaga;
            if(tecnologiasElement) tecnologiasElement.textContent = empresaAtual.tecnologias.join(', ');
   }}};

export function getEmpresasInfo() {
    let empresas: Empresa[] = JSON.parse(localStorage.getItem('empresas') || '[]');
    return empresas.map(empresa => {
        return {
            nome: empresa.nome,
            email: empresa.email,
            senha: empresa.senha,
            pais: empresa.pais,
            estado: empresa.estado,
            cep: empresa.cep,
            descricao: empresa.descricao,
            titulovaga: empresa.titulovaga,
            descricaovaga: empresa.descricaovaga,
            tecnologias: empresa.tecnologias
            
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
        document.addEventListener('DOMContentLoaded', (event: Event) => {
            event.preventDefault();
            const btnCandidatos = document.getElementById('btnCandidatos');
            if(btnCandidatos) {
                btnCandidatos.addEventListener('click', () => {
                    let candidatosInfo = getCandidatosInfo();
                    let candidatosInfoElement = document.getElementById('candidatosInfo') as HTMLElement;
                    candidatosInfoElement = candidatosInfoElement ?? document.createElement('div');
                    if(candidatosInfoElement) {
                        candidatosInfoElement.innerHTML = '';
                        candidatosInfo.forEach((info, index) => {
                            let tecnologias = info.tecnologias;
                            if (typeof tecnologias === 'string') {
                                try {
                                    tecnologias = JSON.parse(tecnologias);
                                } catch(e) {
                                    console.error('Erro ao fazer parse das tecnologias:', e);
                                }
                            }
                            if (!Array.isArray(tecnologias)) {
                                tecnologias = ['N/A'];
                            }
                            candidatosInfoElement.innerHTML += `
                                <h2>Candidatos ${index + 1}</h2>
                                <p>Nome: ${ocultarDados(info.nome)}<p>
                                <p>Email: ${ocultarDados(info.email)}<p>
                                <p>CPF: ${ocultarDados(info.cpf)}</p>
                                <p>Data de nascimento:  ${ocultarDados(info.dataNascimento)}</p>
                                <p>Estado: ${ocultarDados(info.estado)}</p>
                                <p>Descrição Profissional: ${info.descricaoProfissional}</p>
                                <p>Tecnologias: ${tecnologias ? tecnologias.join(', ') : 'N/A'}</p>
                                <hr>
                            `;
                        });
                    }
                })
            }
        });
        ;
        