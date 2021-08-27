// VARIABLES
var choiceList = document.getElementsByClassName("choice");
var filterList = document.getElementsByClassName("filter");
var tableList = document.getElementsByClassName("table");
var bodyList = document.getElementsByClassName("body_tofill");
var numberList = document.getElementsByClassName("table_n");

var listAccTovalid = [
    "mailto:john.doe@email.fr",
    "john.doe@email.fr",
    "John", 
    "Doe",
    "Auteur", 
    "01/01/2021",
    '<button type="button" class="acc_detail">+</button>'
];
var listAccValid = [
    "mailto:john.doe@email.fr",
    "john.doe@email.fr",
    "John", 
    "Doe",
    "Auteur",
    "26/08/2021",
    '<button type="button" class="acc_detail">+</button>'
];
var listBookTovalid = [
    "oeuvres/oeuvre_template.html",
    "Le Seigneur des Anneaux", 
    "J.R.R. Tolkien", 
    "Roman étranger",
    "01/01/2021"
];
var listBookValid = [
    "oeuvres/oeuvre_template.html",
    "Le Seigneur des Anneaux", 
    "J.R.R. Tolkien", 
    "Roman étranger",
    "26/08/2021"
];

listData = [listAccTovalid, listAccValid, listBookTovalid, listBookValid];

// FONCTIONS
function chooseTable(choice) {
    console.log(choice);
    for (let i=0; i<4; i++) {
        if (i == choice) {
            tableList[i].classList.remove("hidden");
            choiceList[i].classList.add("active");
            numberList[i].textContent = populateTable(bodyList[i], listData[i], 20) + " ";
            if (i<2) {
                createBtnListener();
            }
        } else {
            tableList[i].classList.add("hidden");
            choiceList[i].classList.remove("active");
            bodyList[i].textContent = "";
            filterList[Math.floor(i/2)].classList.add("hidden");
        }
    }
    filterList[Math.floor(choice/2)].classList.remove("hidden");
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
            cell.innerHTML = data;
            row.appendChild(cell);
        }
        body.appendChild(row);
    }
    return n
}

function createBtnListener() {
    let btnDetailList =  Array.from(document.getElementsByClassName("acc_detail"));

    btnDetailList.forEach(btn => btn.addEventListener("click", function() {
        alert("Affichage d'une ligne supplémentaire les informations du compte et des boutons valider/rejeter un compte");
        //normalement, le bouton affiche une ligne supplémentaire contenant
        //les détails de la candidature/profil du compte obtenu via requete database
        //notamment des boutons valider/rejeter la candidature pour les comptes à valider
        //le bouton valider écrit le status "validé" dans la database
        //le bouton rejeter supprime l'entrée dans la database
        //les deux boutons lance chooseTable(0)
    }, false));
}

//EVENTS

window.onload = document.getElementById("name").textContent = "Prénom";
//valeur normalement obtenue via requete à la database

choiceList[0].addEventListener("click", function(){chooseTable(0);}, false);
choiceList[1].addEventListener("click", function(){chooseTable(1);}, false);
choiceList[2].addEventListener("click", function(){chooseTable(2);}, false);
choiceList[3].addEventListener("click", function(){chooseTable(3);}, false);

window.onload = chooseTable(0);
// le tableau "actif" est normalement repopulé via requete à la database à chaque event :
// - click sur div de classe "choice" (fonction chooseTable)
// - changement de l'attribut "checked" des checkboxs contenues dans la div de classe _filter
// - click sur les éléments td contenus dans les theads du tableau (fonctionnalité de tri)

