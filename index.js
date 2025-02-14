function vfun() {
    var uname = document.forms["userform"]["uname"].value;
    var upwd = document.forms["userform"]["upwd"].value;

    if (uname == null || uname == "") {
        document.getElementById("errorBox").innerHTML = "Enter the user name";
        return false;
    }
    if (upwd == null || upwd == "") {
        document.getElementById("errorBox").innerHTML = "Enter the password";
        return false;
    }

    if (uname != '' && upwd != '') {
        window.alert("Login successfully");
    }
}