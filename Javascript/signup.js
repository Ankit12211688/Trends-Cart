function validate() {
    var returnvalue = false;

    var isName = true;
    var isNumber = true;
    var isPassword = true;
    var isConfirm = true;

    var pattern = /^[a-z A-Z]+$/;
    var name = document.getElementById("name").value;
    if (name.match(pattern)) {
        document.getElementById("nameerror").innerHTML = "";
        document.getElementById("name").style.border = "2px solid green";
        isName = true;
    }
    else {
        document.getElementById("nameerror").innerHTML = "Name must only contain upper or lowercase letter"
        document.getElementById("name").style.border = "2px solid red";
        isName = false;
    }

    var pattern2 = /^[0-9]+$/;
    var number = document.getElementById("phonenumber").value;
    if (number.match(pattern2)) {
        document.getElementById("phoneerror").innerHTML = "";
        document.getElementById("phonenumber").style.border = "2px solid green";
        isNumber = true;
    }
    else {
        document.getElementById("phoneerror").innerHTML = "Number must contain digits from 0 to 9";
        document.getElementById("phonenumber").style.border = "2px solid red";
        isNumber = false;
    }
    var password = document.getElementById("password").value;
    var special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var upper = /[A-Z]/g;
    var lower = /[a-z]/g;
    var num = /[0-9]/g;
    if (!password.match(num)) {
        document.getElementById("passworderror").innerHTML = "Password must cantain a digit";
        document.getElementById("password").style.border = "2px solid red";
        isPassword = false;
    }
    else if (!password.match(special)) {
        document.getElementById("passworderror").innerHTML = "Password must cantain a special character";
        document.getElementById("password").style.border = "2px solid red";
        isPassword = false;
    }
    else if (!password.match(upper)) {
        document.getElementById("passworderror").innerHTML = "Password must cantain an upper case letter";
        document.getElementById("password").style.border = "2px solid red";
        isPassword = false;
    }
    else if (!password.match(lower)) {
        document.getElementById("passworderror").innerHTML = "Password must cantain a lower case letter";
        document.getElementById("password").style.border = "2px solid red";
        isPassword = false;
    }
    else {
        document.getElementById("passworderror").innerHTML = "";
        document.getElementById("password").style.border = "2px solid green";
        isPassword = true;
    }

    var conPass = document.getElementById("conpass");
    if (conPass.value != password) {
        document.getElementById("conpasserror").innerHTML = "Password did not match";
        document.getElementById("conpass").style.border = "2px solid red";
        isConfirm = false;
    }
    else {
        document.getElementById("conpasserror").innerHTML = "";
        document.getElementById("conpass").style.border = "2px solid green";
        isConfirm = true;
    }

    if (isName && isNumber && isPassword && isConfirm) returnvalue = true;

    return returnvalue;
}
