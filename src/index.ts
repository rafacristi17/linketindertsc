interface Habilidade {
    habilidade: string;
    percentual: number;
}

interface Tecnologia {
    tecnologia: string;
    percentual: number;
}

interface Candidato {
    nome: string;
    habilidades: Habilidade[];
    tecnologias: Tecnologia[];
}

let candidatos: Candidato[] = JSON.parse(localStorage.getItem('candidatos')!) || [
    {
        nome: "Candidato 1",
        habilidades: [
            { habilidade: "java", percentual: 80 },
            { habilidade: "groovy", percentual: 75 },
        ],
        tecnologias: [
            { tecnologia: "typescript", percentual: 85 },
            { tecnologia: "javascript", percentual: 90 },
        ]
    }, {
        nome: "Candidato 2",
        habilidades: [
            { habilidade: "python", percentual: 20 },
            { habilidade: "mongodb", percentual: 50 },
        ],
        tecnologias: [
            { tecnologia: "git", percentual: 85 },
            { tecnologia: "lógica de programação", percentual: 90 },
        ]
    },
];

function saveSkills(): void {
    let skillInput: HTMLInputElement = <HTMLInputElement>document.getElementById("skillInput");
    let skillPercent: HTMLInputElement = <HTMLInputElement>document.getElementById("skillPercent");
    if (skillInput && skillPercent) {
        candidatos[0].habilidades.push({ habilidade: skillInput.value, percentual: parseInt(skillPercent.value) });
        localStorage.setItem('candidatos', JSON.stringify(candidatos));
        displaySkills();
    }
}

function saveTech(): void {
    let techInput: HTMLInputElement = <HTMLInputElement>document.getElementById("techInput");
    let techPercent: HTMLInputElement = <HTMLInputElement>document.getElementById("techPercent");
    if (techInput && techPercent) {
        candidatos[0].tecnologias.push({ tecnologia: techInput.value, percentual: parseInt(techPercent.value) });
        localStorage.setItem('candidatos', JSON.stringify(candidatos));
        displayTech();
    }
}

function displaySkills() {
    var skillsDiv = document.getElementById("skills")!;
    skillsDiv.innerHTML = "";
    for (var i = 0; i < candidatos[0].habilidades.length; i++) {
        skillsDiv.innerHTML += '<div class="skill"><span class="name">' + candidatos[0].habilidades[i].habilidade + '</span><div class="bar"><div class="progress" style="width: ' + candidatos[0].habilidades[i].percentual + '%;"></div></div></div>';
    }
}

function displayTech() {
    var techDiv = document.getElementById("tech")!;
    techDiv.innerHTML = "";
    for (var i = 0; i < candidatos[0].tecnologias.length; i++) {
        techDiv.innerHTML += '<div class="skill"><span class="name">' + candidatos[0].tecnologias[i].tecnologia + '</span><div class="bar"><div class="progress" style="width: ' + candidatos[0].tecnologias[i].percentual + '%;"></div></div></div>';
    }
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