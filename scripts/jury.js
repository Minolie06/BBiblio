// VARIABLES
var numberList = document.getElementsByClassName("table_n");

var choiceToNote = document.getElementById("choice_to_note");
var choiceNoted = document.getElementById("choice_noted");

var tableToNote = document.getElementById("table_to_note");
var tableNoted = document.getElementById("table_noted");

var listToNote = ["oeuvres/oeuvre_template.html","Le Seigneur des Anneaux", "J.R.R. Tolkien", "Roman étranger"];
var tbodyToNote = document.getElementById("body_to_note");

var listNoted = ["oeuvres/oeuvre_template.html","Le Seigneur des Anneaux", "J.R.R. Tolkien", "Roman étranger", 4.25, 4, 4, 4, 5];
var tbodyNoted = document.getElementById("body_noted");

// FONCTIONS
function chooseTable(choice) {
    switch (choice) {
        case "tonote":
            tableToNote.classList.remove("hidden");
            choiceToNote.classList.add("active");

            tableNoted.classList.add("hidden");
            choiceNoted.classList.remove("active");
            
            tbodyToNote.textContent = "";
            numberList[0].textContent = populateTable(tbodyToNote, listToNote, 20) + " ";
            break;
        case "noted":
            tableToNote.classList.add("hidden");
            choiceToNote.classList.remove("active");

            tableNoted.classList.remove("hidden");
            choiceNoted.classList.add("active");

            tbodyNoted.textContent = "";
            numberList[1].textContent = populateTable(tbodyNoted, listNoted, 15) + " ";
            break;
    }
}

function populateTable(body, list, n) {
    //popule un tableau avec n ligne de valeurs contenues dans une liste
    //le tableau est normalement populé avec valeurs obtenues via requete à la database
    for (let i=0; i < n; i++) {
        let row = document.createElement("tr");

        let titleCell = document.createElement("td");
        let titleLink = document.createElement("a");
        titleLink.setAttribute("href", list[0]);
        titleLink.textContent = list[1];
        titleCell.appendChild(titleLink);
        row.appendChild(titleCell);

        for (let j=2; j < list.length; j++) {
            let cell = document.createElement("td");
            let data = list[j]; 
            cell.textContent = data;
            row.appendChild(cell);
        }
    body.appendChild(row);
    }
    return n;
}

//EVENTS

choiceToNote.addEventListener("click", function(){chooseTable("tonote");}, false);
choiceNoted.addEventListener("click", function(){chooseTable("noted");}, false);


window.onload = numberList[0].textContent = populateTable(tbodyToNote, listToNote, 20) + " ";
// le tableau "actif" est normalement repeuplé via requete à la database à chaque event :
// - click sur div de classe "choice" (fonction chooseTable)
// - changement de l'attribut "checked" des checkboxs contenues dans la div de classe cat_filter
// - click sur les éléments td contenus dans les theads du tableau (fonctionnalité de tri)

window.onload = document.getElementById("name").textContent = "Prénom";
//valeur normalement obtenue via requete à la database