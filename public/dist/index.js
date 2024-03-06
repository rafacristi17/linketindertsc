/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\nlet candidatos = JSON.parse(localStorage.getItem('candidatos')) || [\n    {\n        nome: \"Candidato 1\",\n        habilidades: [\n            { habilidade: \"java\", percentual: 80 },\n            { habilidade: \"groovy\", percentual: 75 },\n        ],\n        tecnologias: [\n            { tecnologia: \"typescript\", percentual: 85 },\n            { tecnologia: \"javascript\", percentual: 90 },\n        ]\n    }, {\n        nome: \"Candidato 2\",\n        habilidades: [\n            { habilidade: \"python\", percentual: 20 },\n            { habilidade: \"mongodb\", percentual: 50 },\n        ],\n        tecnologias: [\n            { tecnologia: \"git\", percentual: 85 },\n            { tecnologia: \"lógica de programação\", percentual: 90 },\n        ]\n    },\n];\nfunction saveSkills() {\n    let skillInput = document.getElementById(\"skillInput\");\n    let skillPercent = document.getElementById(\"skillPercent\");\n    if (skillInput && skillPercent) {\n        candidatos[0].habilidades.push({ habilidade: skillInput.value, percentual: parseInt(skillPercent.value) });\n        localStorage.setItem('candidatos', JSON.stringify(candidatos));\n        displaySkills();\n    }\n}\nfunction saveTech() {\n    let techInput = document.getElementById(\"techInput\");\n    let techPercent = document.getElementById(\"techPercent\");\n    if (techInput && techPercent) {\n        candidatos[0].tecnologias.push({ tecnologia: techInput.value, percentual: parseInt(techPercent.value) });\n        localStorage.setItem('candidatos', JSON.stringify(candidatos));\n        displayTech();\n    }\n}\nfunction displaySkills() {\n    var skillsDiv = document.getElementById(\"skills\");\n    skillsDiv.innerHTML = \"\";\n    for (var i = 0; i < candidatos[0].habilidades.length; i++) {\n        skillsDiv.innerHTML += '<div class=\"skill\"><span class=\"name\">' + candidatos[0].habilidades[i].habilidade + '</span><div class=\"bar\"><div class=\"progress\" style=\"width: ' + candidatos[0].habilidades[i].percentual + '%;\"></div></div></div>';\n    }\n}\nfunction displayTech() {\n    var techDiv = document.getElementById(\"tech\");\n    techDiv.innerHTML = \"\";\n    for (var i = 0; i < candidatos[0].tecnologias.length; i++) {\n        techDiv.innerHTML += '<div class=\"skill\"><span class=\"name\">' + candidatos[0].tecnologias[i].tecnologia + '</span><div class=\"bar\"><div class=\"progress\" style=\"width: ' + candidatos[0].tecnologias[i].percentual + '%;\"></div></div></div>';\n    }\n}\nfunction openTab(evt, tabName) {\n    let i;\n    let tabcontent;\n    let tablinks;\n    tabcontent = document.getElementsByClassName(\"tabcontent\");\n    for (i = 0; i < tabcontent.length; i++) {\n        tabcontent[i].style.display = \"none\";\n    }\n    tablinks = document.getElementsByClassName(\"tablinks\");\n    for (i = 0; i < tablinks.length; i++) {\n        tablinks[i].className = tablinks[i].className.replace(\" active\", \"\");\n    }\n    let tabElement = document.getElementById(tabName);\n    if (tabElement) {\n        tabElement.style.display = \"block\";\n    }\n    let evtTarget = evt.currentTarget;\n    if (evtTarget) {\n        evtTarget.className += \" active\";\n    }\n}\nfunction goBack() {\n    window.location.href = \"index.html\";\n}\n\n\n//# sourceURL=webpack://linketinder_tsc/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;