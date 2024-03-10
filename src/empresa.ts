export class Empresa {
    nome: string;
    email: string;
    cnpj: string;
    pais: string;
    estado: string;
    cep: string;
    descricao: string;
    titulovaga:string;
    descricaovaga: string;
    tecnologiasvaga: string[];
    senha: string;

    constructor(nome: string, email: string, cnpj: string, pais: string, estado: string, cep: string, descricao: string,titulovaga:string, descricaovaga: string, tecnologiasvaga: string[], senha: string) {
        this.nome = nome;
        this.email = email;
        this.cnpj = cnpj;
        this.pais = pais;
        this.estado = estado;
        this.cep = cep;
        this.descricao = descricao;
        this.titulovaga = titulovaga;
        this.descricaovaga = descricaovaga;
        this.tecnologiasvaga = tecnologiasvaga;
        this.senha = senha;
    }
}

export let empresas: Empresa[] = JSON.parse(localStorage.getItem('empresas') || '[]');

export function submitForm(){
    document.getElementById('meuFormularioEmpresa')?.addEventListener('submit', (event) => {
    event.preventDefault();
    let nome = (document.getElementById('nome') as HTMLInputElement).value;
    let email = (document.getElementById('email') as HTMLInputElement).value;
    let cnpj = (document.getElementById('cnpj') as HTMLInputElement).value;
    let pais = (document.getElementById('pais') as HTMLInputElement).value;
    let estado = (document.getElementById('estado') as HTMLInputElement).value;
    let cep = (document.getElementById('cep') as HTMLInputElement).value;
    let descricao = (document.getElementById('descricao') as HTMLInputElement).value;
    let titulovaga = (document.getElementById('titulovaga') as HTMLInputElement).value;
    let descricaovaga = (document.getElementById('descricaovaga') as HTMLInputElement).value;
    let tecnologiasvaga = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(cb => (cb as HTMLInputElement).value);
    let senha = (document.getElementById('senha') as HTMLInputElement).value;
  
    if (nome && email && cnpj && pais && estado && cep && descricao && titulovaga && descricaovaga && senha && tecnologiasvaga.length > 0) {
        let empresa = new Empresa (nome, email, cnpj, pais, estado, cep, descricao, titulovaga, descricaovaga, tecnologiasvaga, senha);
        empresas.push(empresa);
        localStorage.setItem('empresas', JSON.stringify(empresas));
        window.location.href = 'empresa.html';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
})};

export function loadEmpresa() {
    document.addEventListener('DOMContentLoaded', (event) => {
        event.preventDefault();
        let empresas: Empresa[] = JSON.parse(localStorage.getItem('empresas') || '[]');
        let empresaAtual: Empresa = empresas[empresas.length - 1];
    
        if (empresaAtual) {
            (document.getElementById('empresa') as HTMLElement).textContent = empresaAtual.nome;
            (document.getElementById('email') as HTMLElement).textContent = empresaAtual.email;
            (document.getElementById('cnpj') as HTMLElement).textContent = empresaAtual.cnpj;
            (document.getElementById('pais') as HTMLElement).textContent = empresaAtual.pais;
            (document.getElementById('estado') as HTMLElement).textContent = empresaAtual.estado;
            (document.getElementById('cep') as HTMLElement).textContent = empresaAtual.cep;
            (document.getElementById('descricao') as HTMLElement).textContent = empresaAtual.descricao;
            (document.getElementById('titulovaga') as HTMLElement).textContent = empresaAtual.titulovaga;
            (document.getElementById('descricaovaga') as HTMLElement).textContent = empresaAtual.descricaovaga;
            (document.getElementById('tecnologiasvaga') as HTMLElement).textContent = empresaAtual.tecnologiasvaga.join(', ');
        }
    });
}
