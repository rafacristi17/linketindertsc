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
    
    if(nome && email && senha && cnpj && pais && estado && cep && descricao && titulovaga && descricaovaga && tecnologias.length > 0) {
        let empresa = new Empresa(nome, email, senha, cnpj, pais, estado, cep, descricao, titulovaga, descricaovaga, tecnologias);
        empresas.push(empresa)
        localStorage.setItem('empresas', JSON.stringify(empresas));
        let tecnologiasCliques = JSON.parse(localStorage.getItem('tecnologiasCliques') || '{}');
            tecnologias.forEach(tecnologia => {
                if(tecnologiasCliques[tecnologia]) {
                    tecnologiasCliques[tecnologia]++;
                } else {
                    tecnologiasCliques[tecnologia] = 1;
                }
            });
            localStorage.setItem('tecnologiasCliques', JSON.stringify(tecnologiasCliques));

        window.location.href = 'empresa.html';
    }else {
        alert('Por favor, preencha todos os campos.');
    }})};
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
        export function gerarGraficoTecnologias() {
            let tecnologiasCliques: { [key: string]: number } = JSON.parse(localStorage.getItem('tecnologiasCliques') || '{}');
            let grafico = '';
            for(let tecnologia in tecnologiasCliques) {
                grafico += `${tecnologia}: ${'*'.repeat(tecnologiasCliques[tecnologia])}\n`;
            }        
            return grafico;
        }
        
        if (typeof window !== 'undefined') {
            (window as any).gerarGraficoTecnologias = gerarGraficoTecnologias;
        }
        