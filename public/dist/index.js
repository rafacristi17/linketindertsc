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

eval("\nlet candidatos = JSON.parse(localStorage.getItem('candidatos')) || [];\nfunction openTab(evt, tabName) {\n    let i;\n    let tabcontent;\n    let tablinks;\n    tabcontent = document.getElementsByClassName(\"tabcontent\");\n    for (i = 0; i < tabcontent.length; i++) {\n        tabcontent[i].style.display = \"none\";\n    }\n    tablinks = document.getElementsByClassName(\"tablinks\");\n    for (i = 0; i < tablinks.length; i++) {\n        tablinks[i].className = tablinks[i].className.replace(\" active\", \"\");\n    }\n    let tabElement = document.getElementById(tabName);\n    if (tabElement) {\n        tabElement.style.display = \"block\";\n    }\n    let evtTarget = evt.currentTarget;\n    if (evtTarget) {\n        evtTarget.className += \" active\";\n    }\n}\nfunction goBack() {\n    window.location.href = \"index.html\";\n}\n\n\n//# sourceURL=webpack://linketinder_tsc/./src/index.ts?");

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