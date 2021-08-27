var errorInvalid = document.getElementById("error_invalid");
var errorDifferent = document.getElementById("error_different");
var passFirst = document.getElementById("pass_first");
var passSecond = document.getElementById("pass_second");
var btnNewpass = document.getElementById("btn_newpass");
var btnPasstemp = document.getElementById("btn_passtemp");
var formTemp = document.getElementById("form_temp");
var formNew = document.getElementById("form_new");

function check_passtemp() {
    document.getElementById("error_invalid_temp").classList.add("hidden");
    //requete database pour vérifier email et mot de passe: renvoie booléen "verif"
    let verif = true;
    if (verif) {
        document.getElementById("form_temp").classList.add("hidden");
        document.getElementById("form_new").classList.remove("hidden");
    } else {
        document.getElementById("error_invalid_temp").classList.remove("hidden");
    } 
}

function check_pass() {
    errorInvalid.classList.add("hidden");
    errorDifferent.classList.add("hidden");

    if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{10,}$/.test(passFirst.value)) {
        if (passFirst.value == passSecond.value) {
            //écriture database de passFirst
            window.location.href="profil.html";
        }
        else {
            errorDifferent.classList.remove("hidden");
            passSecond.value = "";
            passSecond.focus();
        }
    }
    else {
        errorInvalid.classList.remove("hidden");
        passFirst.value = "";
        passSecond.value = "";
        passFirst.focus();
    }
}

btnPasstemp.addEventListener("click", check_passtemp);
passSecond.addEventListener("keyup", function(e) {
	if(e.key === 'Enter') {
		btnPasstemp.click();
	}
}, false);

btnNewpass.addEventListener("click", check_pass);
passSecond.addEventListener("keyup", function(e) {
	if(e.key === 'Enter') {
		btnNewpass.click();
	}
}, false);