interface Tecnologia {
   mysql:boolean;
   java:boolean;
   node:boolean;
   typescript:boolean;
   javascript:boolean;
   git:boolean;
}

interface Candidato {
    nome: string;
    email:string;
    cpf:string;
    date:string;
    estado:string;
    message:string;
    senha:string;
    tecnologias:Tecnologia;
}

let candidatos: Candidato[] = JSON.parse(localStorage.getItem('candidatos')!) || [];

let form= document.querySelector('form') as HTMLFormElement;

form.addEventListener('submit', function(event:Event){
    event.preventDefault();
    let candidato: Candidato = {
        nome: (document.getElementById('nome') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        cpf: (document.getElementById('cpf') as HTMLInputElement).value,
        date: (document.getElementById('date') as HTMLInputElement).value,
        estado: (document.getElementById('estado') as HTMLInputElement).value,
        message: (document.getElementById('message') as HTMLInputElement).value,
        senha: (document.getElementById('senha') as HTMLInputElement).value,
        tecnologias: {
            mysql: (document.querySelector('input[name="mysql"]') as HTMLInputElement).checked,
            java: (document.querySelector('input[name="java"]') as HTMLInputElement).checked,
            node: (document.querySelector('input[name="node"]') as HTMLInputElement).checked,
            typescript: (document.querySelector('input[name="typescript"]') as HTMLInputElement).checked,
            javascript: (document.querySelector('input[name="javascript"]') as HTMLInputElement).checked,
            git: (document.querySelector('input[name="git"]') as HTMLInputElement).checked,
        }
    };
    if (validarCandidato(candidato)) {
        candidatos.push(candidato);
        localStorage.setItem('candidatos', JSON.stringify(candidatos));
        console.log('Candidato cadastrado com sucesso!');
    }
});

function validarCandidato(candidato:Candidato){
    if (!candidato.email.includes('@')) {
        console.log('Email inválido!');
        return false;
    }
    if (candidato.senha.length < 8) {
        console.log('Senha muito curta!');
        return false;
    }
    return true;
}

function openTab(evt: Event, tabName: string): void {
    let i: number;
    let tabcontent: HTMLCollectionOf<Element>;
    let tablinks: HTMLCollectionOf<Element>;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        (tabcontent[i] as HTMLElement).style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    let tabElement = document.getElementById(tabName);
    if (tabElement) {
        (tabElement as HTMLElement).style.display = "block";
    }
    let evtTarget = evt.currentTarget;
    if (evtTarget) {
        (evtTarget as Element).className += " active";
    }
}

function goBack(): void {
    window.location.href = "index.html";
}