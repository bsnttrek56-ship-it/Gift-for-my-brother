function login() {

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user == "khaled" && pass == "1911") {

        alert("Welcome ❤️");

        window.location.href = "index.html";
    }
    else {
        alert("Wrong username or password ❌");
    }
}