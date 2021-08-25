var warningProfil = document.getElementById("warning_profil");
var btnProfil = document.getElementById("btn_profil");
var btnYes = document.getElementById("btn_profil_yes");
var btnNo = document.getElementById("btn_profil_no");
var fieldList = document.getElementsByTagName("fieldset")

function show_warning() {
    for (let i = 0; i < fieldList.length; i++) {
        fieldList[i].setAttribute("disabled", "disabled");
    }
    btnProfil.classList.add("error");
    btnYes.classList.add("visible");
    btnNo.classList.add("visible");
    warningProfil.classList.add("visible");
}

function warning(answer) {
    if (answer) {
        //soumission du formulaire à la BDD
        window.location.href="index.html";
    } else {
        for (let i = 0; i < fieldList.length; i++) {
            fieldList[i].removeAttribute("disabled");
        }
    }
    btnProfil.classList.remove("error");
    btnYes.classList.remove("visible");
    btnNo.classList.remove("visible");
    warningProfil.classList.remove("visible");
}

btnProfil.addEventListener("click", show_warning, false);
btnYes.addEventListener("click", function() {
    warning(true);
}, false);
btnNo.addEventListener("click", function() {
    warning(false);
}, false);
