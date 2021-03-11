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

const create_logs_table = ()=>{
    var logs_table = $("<div id='logs_table'></div>");   // Create with jQuery

    $("body").append(logs_table);      // Append the new elements


//console.log("------------------------------------ = ", localStorage.getItem("logs"));


    var $table = $('<table/>');


    var logsArray = localStorage.getItem("logs").split("#@!@");
    logsArray.forEach(ele => console.log(ele));

    for(var i = 0; i < logsArray.length; i += 2){
        $table.append( '<tr><td>' + logsArray[i] + '</td><td>' + logsArray[i+1] +'</td></tr>' );
    }
    $('#logs_table').append($table);
    $("body").append(logs_table);      // Append the new elements
}


(function() {
    'use strict';

    // Targeting the name element and logging it into the console
    let activeAccount = (document.getElementsByClassName("ThRjn7o-KwO0459UzmvoU w8Kxy2XztOAkWobGpdJLt")[0]).textContent;

    // #@!@ is the delimiter which splits the string
    let log = `${activeAccount}#@!@${new Date()}#@!@\n`;
    // Saving the data as JSON in localStorage
//        localStorage.setItem("logs", []);
    localStorage.setItem("logs", log + localStorage.getItem("logs"));


    // Log the results into the console
    // console.log("local storage dot storage = ", JSON.stringify(localStorage.getItem("logs")).length);


    // Popup confirmation
    if(confirm("Wanna see the logs for your AWS account?")){
        // Clear the site UI and replace it with new table which shows the logs
        window.onload=function(){
            document.body.innerHTML = "";
            create_logs_table();
        }
    }
    else{
        // Nothing
    }

// Just in case, Tzur would like to save the logs on the Disk and not on local storage
// Save the active account into a file localy,
//    let a = document.createElement("a");
//    a.href = `data:text,${localStorage.getItem("logs")}`; //content
//    a.download = "log.txt"; //file name
//    a.click();
})();
