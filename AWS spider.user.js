// ==UserScript==
// @name         AWS spider
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Saves logs of the current active user who in a local file.
// @author       Or Ben-Aba
// <<<<<<<<<<<<<<<<-- Using regex in order to build a template without a specific parameters, the match is the site which we want to customize the add-on for -->>>>>>>>>>>>>>>>
// @match        https://us-east-2.console.aws.amazon.com/console*
// @grant        none
// <<<<<<<<<<<<<<<<-- Importing jQuery -->>>>>>>>>>>>>>>>
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';

    // Targeting the name element and logging it into the console
    var activeAccount = (document.getElementsByClassName("ThRjn7o-KwO0459UzmvoU w8Kxy2XztOAkWobGpdJLt")[0]).textContent;
    console.log("activeAccount = ", activeAccount);

    // Save the active account into a file localy,
    var a = document.createElement("a");
    a.href = `data:text,${activeAccount}`; //content
    a.download = "log.txt"; //file name
    a.click();
})();
