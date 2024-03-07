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