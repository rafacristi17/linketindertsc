"use strict";
function openTab(evt, tabName) {
    var i;
    var tabcontent;
    var tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    var tabElement = document.getElementById(tabName);
    if (tabElement) {
        tabElement.style.display = "block";
    }
    var evtTarget = evt.currentTarget;
    if (evtTarget) {
        evtTarget.className += " active";
    }
}
function goBack() {
    window.location.href = "index.html";
}
var candidatos = JSON.parse(localStorage.getItem('candidatos')) || [
    {
        nome: "Candidato 1",
        habilidades: [
            { habilidade: "Habilidade 1", percentual: 80 },
            { habilidade: "Habilidade 2", percentual: 75 },
        ],
        tecnologias: [
            { tecnologia: "Tecnologia 1", percentual: 85 },
            { tecnologia: "Tecnologia 2", percentual: 90 },
        ]
    }, {
        nome: "Candidato 2",
        habilidades: [
            { habilidade: "Habilidade 1", percentual: 20 },
            { habilidade: "Habilidade 2", percentual: 50 },
        ],
        tecnologias: [
            { tecnologia: "Tecnologia 1", percentual: 85 },
            { tecnologia: "Tecnologia 2", percentual: 90 },
        ]
    },
];
function saveSkills() {
    var skillInput = document.getElementById("skillInput");
    var skillPercent = document.getElementById("skillPercent");
    if (skillInput && skillPercent) {
        candidatos[0].habilidades.push({ habilidade: skillInput.value, percentual: parseInt(skillPercent.value) });
        localStorage.setItem('candidatos', JSON.stringify(candidatos));
        displaySkills();
    }
}
function saveTech() {
    var techInput = document.getElementById("techInput");
    var techPercent = document.getElementById("techPercent");
    if (techInput && techPercent) {
        candidatos[0].tecnologias.push({ tecnologia: techInput.value, percentual: parseInt(techPercent.value) });
        localStorage.setItem('candidatos', JSON.stringify(candidatos));
        displayTech();
    }
}
function displaySkills() {
    var skillsDiv = document.getElementById("skills");
    skillsDiv.innerHTML = "";
    for (var i = 0; i < candidatos[0].habilidades.length; i++) {
        skillsDiv.innerHTML += '<div class="skill"><span class="name">' + candidatos[0].habilidades[i].habilidade + '</span><div class="bar"><div class="progress" style="width: ' + candidatos[0].habilidades[i].percentual + '%;"></div></div></div>';
    }
}
function displayTech() {
    var techDiv = document.getElementById("tech");
    techDiv.innerHTML = "";
    for (var i = 0; i < candidatos[0].tecnologias.length; i++) {
        techDiv.innerHTML += '<div class="skill"><span class="name">' + candidatos[0].tecnologias[i].tecnologia + '</span><div class="bar"><div class="progress" style="width: ' + candidatos[0].tecnologias[i].percentual + '%;"></div></div></div>';
    }
}
