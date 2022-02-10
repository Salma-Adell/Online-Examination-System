var fname = document.getElementsByTagName("input")[0];
var lname = document.getElementsByTagName("input")[1];
var password = document.getElementsByTagName("input")[2];
var repassword = document.getElementsByTagName("input")[3];
var email = document.getElementsByTagName("input")[4];
var span = document.querySelectorAll(".error");
var emailRegx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
var flag = 0;

function notValid(el,ndx,str)
{
    span[ndx].style.display = "inline";
    span[ndx].textContent = str;
    el.style.borderBottomColor="rgb(177, 14, 14)";
}

function valid(el,ndx)
{
    span[ndx].style.display = "none";
    el.style.borderBottomColor="#c0c0c0";
    if(el.name)
    {
        localStorage.setItem(el.name,el.value);
    }
    flag++;
}

function validation(){
    if(!fname.value){
        notValid(fname,0,"required");
    }
    else if(isFinite(fname.value)){
        notValid(fname,0,"first name must be string");
    }
    else{
        valid(fname,0);
    }

    if(!lname.value){
        notValid(lname,1,"required");
    }
    else if(isFinite(lname.value)){
        notValid(lname,1,"last name must be string");
    }
    else{
        valid(lname,1);
    }

    if(!password.value){
        notValid(password,2,"required");
    }
    else if(password.value.length < 8){
        notValid(password,2,"password must be at least 8 characters");
    }
    else if(password.value !== repassword.value){
        notValid(password,2,"password and repassword do not match");
    }
    else{
        valid(password,2);
    }

    if(!repassword.value){
        notValid(repassword,3,"required");
    }
    else{
        valid(repassword,3);
    }

    if(!email.value){
        notValid(email,4,"required");
    }
    else if(!emailRegx.test(email.value)){
        notValid(email,4,"the email you entered is not valid");
    }
    else{
        valid(email,4);
    }
    if(flag == 5)
    {
        location.replace("./views/signin.html");
    }
}
