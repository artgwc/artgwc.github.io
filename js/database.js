var initialData = 
    {
        "patricianoj": {
            "password": "gwc98",
            "name": "Patricia O",
            "bio": "",
            "skills": "",
            "interests": "",
            "profilePic": "http://placehold.it/300x300&text=Patricia",
            "images": [],
        },
        "karolineblendstrup": {
            "password": "Hong",
            "name": "Karoline Blendstrup",
            "bio": "",
            "skills": "",
            "interests": "",
            "profilePic": "http://placehold.it/300x300&text=Karoline",
            "images": [],        
        },
        "janele": {
            "password": "JanJan123",
            "name": "Janele",
            "bio": "",
            "skills": "",
            "interests": "",
            "profilePic": "http://placehold.it/300x300&text=Janele",
            "images": [],        
        },
        "mhuh": {
            "password": "mhuh",
            "name": "Mina Huh",
            "bio": "",
            "skills": "",
            "interests": "",
            "profilePic": "http://placehold.it/300x300&text=Mina",
            "images": [],        
        }
    };

// JSON object that holds all user information ^

Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}

function resetData() {
    localStorage.setObject("database", initialData);
}

function getDatabase() {
    allData = localStorage.getObject("database"); 
    if (!allData) {
        resetData();
        getDatabase();
    }
    return allData;
}

function getProfileData(user) {
    var database = getDatabase();
    return database[user];
}

function getCurrentUser() {
    return localStorage.getItem("currentUser");
}

function getUserList(database) {
    return Object.keys(database);
}

function setCurrentUser(user) {
    localStorage.setItem("currentUser", user);
}

function saveProfileData(userData) {
    var database = getDatabase();
    database[getCurrentUser()] = userData;
    localStorage.setObject("database", database);
    console.log("data saved");
}

function createNewUser(database, user) {
    database[user] = {
            "password": "",
            "name": "",
            "bio": "",
            "skills": "",
            "interests": "",
            "profilePic": "http://placehold.it/300x300&text="+user,
            "images": []      
        }
    saveProfileData(user);
    return database;
}