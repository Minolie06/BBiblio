var errorInvalid = document.getElementById("error_invalid");
var errorDifferent = document.getElementById("error_different");
var passFirst = document.getElementById("pass_first");
var passSecond = document.getElementById("pass_second");
var btnNewpass = document.getElementById("btn_newpass")

function check_password() {
    errorInvalid.classList.remove("visible");
    errorDifferent.classList.remove("visible");

    if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{10,}$/.test(passFirst.value)) {
        if (passFirst.value == passSecond.value) {
            //do something
        }
        else {
            errorDifferent.classList.add("visible");
            passSecond.value = "";
            passSecond.focus();
        }
    }
    else {
        errorInvalid.classList.add("visible");
        passFirst.value = "";
        passSecond.value = "";
        passFirst.focus();
    }
}

btnNewpass.addEventListener("click", check_password);
passSecond.addEventListener("keyup", function(e) {
	if(e.key === 'Enter') {
		btnNewpass.click();
	}
}, false);