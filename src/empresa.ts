export class Empresa {
    nomeE: string;
    emailE: string;
    cnpjE: string;
    paisE: string;
    estadoE: string;
    cepE: string;
    descricaoE: string;
    titulovagaE:string;
    descricaovagaE: string;
    tecnologiasvagaE: string[];
    senhaE: string;

    constructor(nomeE: string, emailE: string, cnpjE: string, paisE: string, estadoE: string, cepE: string, descricaoE: string,titulovagaE:string, descricaovagaE: string, tecnologiasvagaE: string[], senhaE: string) {
        this.nomeE = nomeE;
        this.emailE = emailE;
        this.cnpjE = cnpjE;
        this.paisE = paisE;
        this.estadoE = estadoE;
        this.cepE = cepE;
        this.descricaoE = descricaoE;
        this.titulovagaE = titulovagaE;
        this.descricaovagaE = descricaovagaE;
        this.tecnologiasvagaE = tecnologiasvagaE;
        this.senhaE = senhaE;
    }
}

export let empresas: Empresa[] = JSON.parse(localStorage.getItem('empresas') || '[]');

export function submitFormE(){
    document.getElementById('meuFormularioEmpresa')?.addEventListener('submit', (event) => {
    event.preventDefault();
    let nomeE = (document.getElementById('nomeE') as HTMLInputElement).value;
    let emailE = (document.getElementById('emailE') as HTMLInputElement).value;
    let cnpjE = (document.getElementById('cnpjE') as HTMLInputElement).value;
    let paisE = (document.getElementById('paisE') as HTMLInputElement).value;
    let estadoE = (document.getElementById('estadoE') as HTMLInputElement).value;
    let cepE = (document.getElementById('cepE') as HTMLInputElement).value;
    let descricaoE = (document.getElementById('descricaoE') as HTMLInputElement).value;
    let titulovagaE = (document.getElementById('titulovagaE') as HTMLInputElement).value;
    let descricaovagaE = (document.getElementById('descricaovagaE') as HTMLInputElement).value;
    let tecnologiasvagaE = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(cb => (cb as HTMLInputElement).value);
    let senhaE = (document.getElementById('senhaE') as HTMLInputElement).value;
  
    if (nomeE && emailE && cnpjE && paisE && estadoE && cepE && descricaoE && titulovagaE && descricaovagaE && senhaE && tecnologiasvagaE.length > 0) {
        let empresa = new Empresa (nomeE, emailE, cnpjE, paisE, estadoE, cepE, descricaoE, titulovagaE, descricaovagaE, tecnologiasvagaE, senhaE);
        empresas.push(empresa);
        localStorage.setItem('empresas', JSON.stringify(empresas));
        window.location.href = 'empresa.html';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
})};

export function loadEmpresa() {
    window.onload = function() {
        let empresas: Empresa[] = JSON.parse(localStorage.getItem('empresas') || '[]');
        let empresaAtual: Empresa = empresas[empresas.length - 1];
    
        if (empresaAtual) {
            (document.getElementById('empresa') as HTMLElement).textContent = empresaAtual.nomeE;
            (document.getElementById('emailE') as HTMLElement).textContent = empresaAtual.emailE;
            (document.getElementById('cnpjE') as HTMLElement).textContent = empresaAtual.cnpjE;
            (document.getElementById('paisE') as HTMLElement).textContent = empresaAtual.paisE;
            (document.getElementById('estadoE') as HTMLElement).textContent = empresaAtual.estadoE;
            (document.getElementById('cepE') as HTMLElement).textContent = empresaAtual.cepE;
            (document.getElementById('descricaoE') as HTMLElement).textContent = empresaAtual.descricaoE;
            (document.getElementById('titulovagaE') as HTMLElement).textContent = empresaAtual.titulovagaE;
            (document.getElementById('descricaovagaE') as HTMLElement).textContent = empresaAtual.descricaovagaE;
            (document.getElementById('tecnologiasvagaE') as HTMLElement).textContent = empresaAtual.tecnologiasvagaE.join(', ');
        }
    }
}

export class Vaga {
    titulovaga: string;
    descricaovaga: string;
    tecnologiasvaga: string[];

    constructor(titulovaga: string, descricaovaga: string, tecnologiasvaga: string[]) {
        this.titulovaga = titulovaga;
        this.descricaovaga = descricaovaga;
        this.tecnologiasvaga = tecnologiasvaga;
    }
}

export let vagas: Vaga[] = JSON.parse(localStorage.getItem('vagas') || '[]');

export function addVaga() {
    document.getElementById('addVaga')?.addEventListener('click', () => {
        let titulovaga = prompt('Digite o título da vaga:');
        let descricaovaga = prompt('Digite a descrição da vaga:');
        let tecnologiasvaga = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(cb => (cb as HTMLInputElement).value);

        if (titulovaga && descricaovaga && tecnologiasvaga.length > 0) {
            let vaga = new Vaga(titulovaga, descricaovaga, tecnologiasvaga);
            vagas.push(vaga);
            localStorage.setItem('vagas', JSON.stringify(vagas));
            alert('Vaga adicionada com sucesso!');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
}

export function deleteVaga() {
    document.getElementById('deleteVaga')?.addEventListener('click', () => {
        let titulovaga = prompt('Digite o título da vaga que deseja deletar:');

        if (titulovaga) {
            let index = vagas.findIndex(vaga => vaga.titulovaga === titulovaga);

            if (index !== -1) {
                vagas.splice(index, 1);
                localStorage.setItem('vagas', JSON.stringify(vagas));
                alert('Vaga deletada com sucesso!');
            } else {
                alert('Vaga não encontrada.');
            }
        } else {
            alert('Por favor, digite o título da vaga.');
        }
    });
}
