function validate() {
    var un = document.myform.username.value;
    var pw = document.myform.pword.value;
    var valid = false;

    var database = getDatabase();

    if (pw === database[un]["password"]) {
        valid = true;
    } else {
        alert("You've entered an invalid password.");
    }

    if (valid) {
        setCurrentUser(un);
        window.location = "profile.html";
        return false;
    }
}


function openSignUp() {
    window.location="signup.html"
}