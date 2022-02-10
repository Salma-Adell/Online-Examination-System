var result = localStorage.result;
var data = document.getElementsByClassName("data");
data[0].textContent = localStorage.fname +" "+ localStorage.lname;
data[1].textContent = result;
data[2].textContent = (Number(result)*100) / 10;
if(result>=8){
    data[3].textContent = "A";
}
else if(result == 8){
    data[3].textContent = "B";
}
else if(result == 7 || result == 6){
    data[3].textContent = "c";
}
else if(result>=5 && result < 6){
    data[3].textContent = "D";
}
else{
    data[3].textContent = "F";
    document.querySelector("span").textContent = "Sorry You Faild!";
}

if(localStorage.time == 0){
    document.querySelector("span").textContent = "Sorry Time Out!";
}