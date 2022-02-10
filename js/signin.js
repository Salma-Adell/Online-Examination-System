var email = document.getElementsByTagName("input")[0];
var password = document.getElementsByTagName("input")[1];
var span = document.querySelectorAll("span");

function login(){
    if(!email.value){
        span[0].textContent = "required";
        span[0].style.display = "inline";
        email.style.borderBottomColor = "rgb(177, 14, 14)";
    }
    else{
        span[0].style.display = "none";
        email.style.borderBottomColor = "#c0c0c0";
    }
    if(!password.value){
        span[1].textContent = "required";
        span[1].style.display = "inline";
        password.style.borderBottomColor = "rgb(177, 14, 14)";
    }
    if(email.value && password.value){
        span[0].style.display = "none";
        span[1].style.display = "none";
        if(email.value == localStorage.email && password.value == localStorage.password)
        {
            location.replace("exampage.html");
        }
        else{
            span[1].textContent = "the email or password you entered is not true";
            email.style.borderBottomColor = "rgb(177, 14, 14)";
            span[1].style.display="inline";
            password.style.borderBottomColor = "rgb(177, 14, 14)";
        }
    }
}
