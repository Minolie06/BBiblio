var choiceToNote = document.getElementById("choice_to_note");
var choiceNoted = document.getElementById("choice_noted");

var tableToNote = document.getElementById("table_to_note");
var tableNoted = document.getElementById("table_noted");

function chooseTable(choice) {
    switch (choice) {
        case "tonote":
            tableToNote.classList.remove("hidden");
            choiceToNote.classList.add("active");

            tableNoted.classList.add("hidden");
            choiceNoted.classList.remove("active");
            break;
        case "noted":
            tableToNote.classList.add("hidden");
            choiceToNote.classList.remove("active");

            tableNoted.classList.remove("hidden");
            choiceNoted.classList.add("active");
            break;
    }
}

choiceToNote.addEventListener("click", function(){chooseTable("tonote");}, false);
choiceNoted.addEventListener("click", function(){chooseTable("noted");}, false);