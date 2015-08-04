$(document).ready(function(){

	console.log("On SignUp page");
    $("#signup").click(function(){
        var database = getDatabase();
        var username = $("#username").val();
        var name = $("#name").val();
        var password = $("#password").val();
        var email = $("#email").val();
        database = createNewUser(database, username);
        var profileData = database[username];
        profileData["password"] = password;
        profileData["name"] = name;
        setCurrentUser(username);
        saveProfileData(profileData);
    });

    
});

