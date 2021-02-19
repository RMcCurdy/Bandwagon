function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", "userData.json", true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(JSON.parse(xobj.responseText));
    }
  };
  xobj.send(null);
}

signInUser = (user, pass) => {
  loadJSON(function (json) {
    let userInformation = json
    for (let i = 0; i < userInformation.length; i++) {
      if (userInformation[i].userName == user && userInformation[i].password == pass) {
        window.location.href = "./home.html";
      }
    }
    alert("Invalid username or password. Please try again.");
  });
};
