$(document).ready(function(){

	console.log("On SignUp page");

    $("#signup").click(function(){
        var database = getDatabase();
        var username = $("#username").val();
        setCurrentUser(username);
        console.log(database);
        database = createNewUser(database, username);
        console.log(database);
        var profileData = database[username];
        var name = $("#name").val();
        var password = $("#password").val();
        var email = $("#email").val();
        profileData["password"] = password;
        profileData["name"] = name;
        saveProfileData(profileData);
        console.log(database);
    });

    
});

