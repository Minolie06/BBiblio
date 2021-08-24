function connexion() {
    var typeAccount = document.getElementById("account_type");

    switch (typeAccount.value) {
        case "author":
            window.location.href="co1.html";
            break;
        case "jury":
            window.location.href="jury.html";
            break;
        case "admin":
            window.location.href="admin.html";
            break;
    }
}

