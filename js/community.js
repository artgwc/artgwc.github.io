$(document).ready(function(){

	console.log("On Community page");
	displayProfilePictures();	
});


function displayProfilePictures() {
	var database = getDatabase();
	var userlist = getUserList(database);
	for(var i = 0; i < userlist.length; i++) {
		var currentPerson = getProfileData(userlist[i]);
		var image = "<img src='"+currentPerson['profilePic'] +"' />";
		$("#artists").append("<a href='viewProfile.html?user="+userlist[i]+"'>"+ image +"</a>");	
	}
}