
var profileData;

var currentUser = localStorage.getItem("currentUser");
if (!currentUser) {
    window.location = "index.html";
}

$(document).ready(function(){

    var currentlyViewing= getUrlParameter("user");
    if (currentlyViewing) {
        profileData = getProfileData(currentlyViewing);
    }
    else{
        profileData=getProfileData(currentUser);
    }

    showProfileInfo(profileData);
    showPortfolioPictures(profileData);
    showPosts(profileData);

    $("#edit").click(function(){
        $("#bio").val(profileData["bio"]);
        $("#skills").val(profileData["skills"]);
        $("#interests").val(profileData["interests"]);
        $("form").show();
        $("#form2").show();
        $("#text1").hide();
        $("#text2").hide();
        $("#text3").hide();
        $("#profileImage").hide();
    });
    
    $("#save").click(function(){
        $("form").hide();
        $("#form2").hide();
        profileData["bio"] = $("#bio").val();
        profileData["skills"] = $("#skills").val();
        profileData["interests"] = $("#interests").val();
        saveProfileData(profileData);
        showProfileInfo(profileData);
        $("#text1").show();
        $("#text2").show();
        $("#text3").show();
        $("#profileImage").show();
    });
});

function showPortfolioPictures(profileData) {
    $("#uploadedImages").html("");
    for(var i = 0; i < profileData["images"].length; i++) {
        $("#uploadedImages").append("<img src='"+ profileData["images"][i] + "' />");
    }
}

function showProfileInfo(profileData) {
    $("#username h1").html(profileData["name"]);
    $("#text1").html(profileData["bio"]);
    $("#text2").html(profileData["skills"]);
    $("#text3").html(profileData["interests"]);
    $("#profileimage").attr("src",profileData["profilePic"]);
}

function addImageToPortfolio(input) {
     if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $("#uploadedImage").attr('src', e.target.result);
            var storedImage = document.getElementById("uploadedImage");
            var imgData = getBase64Image(storedImage);
            profileData["images"].push("data:image/png;base64," + imgData);
            saveProfileData(profileData);
            showPortfolioPictures(profileData);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function addProfilePic(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#profileimage').attr('src', e.target.result);
            $('#uploadedImage').attr('src', e.target.result);
            var storedImage = document.getElementById("uploadedImage");
            var imgData = getBase64Image(storedImage);
            profileData["profilePic"] = "data:image/png;base64," + imgData;
            saveProfileData(profileData);
        };
        reader.readAsDataURL(input.files[0]);
    }
    showProfileInfo(profileData);
}

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = 300;
    canvas.height = 300 * img.height / img.width;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, 300, (300 * img.height / img.width));

    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

function showPosts(profileData) {
    $(" #posts ").empty(); // A jQuery method which clears the movies div
    for (var i = 0; i < profileData.length; i++) {
        if(i%3==0) {
            $(" #posts ").append("<div class='row'></div>"); // A jQuery method to add a new row for every 3rd movie
        }    
        if(i%3==2) { $(" #posts ").append("</div>");
        }
    }
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

