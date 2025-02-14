
        function vfun2() {
            var uname = document.forms["userform2"]["uname"].value;
            var email = document.forms["userform2"]["Email"].value;
            var upwd = document.forms["userform2"]["upwd"].value;
            var upwd2 = document.forms["userform2"]["upwd2"].value;

            if (uname == null || uname == "") {
                document.getElementById("errorBox2").innerHTML = "Enter the user name";
                return false;
            }
            if (email == null || email == "") {
                document.getElementById("errorBox2").innerHTML = "Enter the email";
                return false;
            }
            if (upwd == null || upwd == "") {
                document.getElementById("errorBox2").innerHTML = "Enter the password";
                return false;
            }
            if (upwd2 == null || upwd2 == "") {
                document.getElementById("errorBox2").innerHTML = "Re-enter the password";
                return false;
            }
            if (upwd !== upwd2) {
                document.getElementById("errorBox2").innerHTML = "Passwords do not match";
                return false;
            }

            if (uname != '' && email != '' && upwd != '' && upwd === upwd2) {
                window.alert("Registration successfully");
            }
        }