localStorage.setItem("time",10);
function anwser(id,body)
{
    this.ID = id;
    this.Body = body;
}
function question(id,body,right,choices)
{
    this.ID = id;
    this.Body = body;
    this.RightAnwser = right;
    this.Choices = choices;
}
var anwsers = [
    new anwser(0,"Default constructor"),
    new anwser(1,"Parameterized constructor"),
    new anwser(2,"Copy constructor"),
    new anwser(3,"Friend constructor"),
    new anwser(4,"@"),
    new anwser(5,"&"),
    new anwser(6,"#"),
    new anwser(7,"%"),
    new anwser(8,"\\n"),
    new anwser(9,"\\t"),
    new anwser(10,"\\a"),
    new anwser(11,"\\r"),
    new anwser(12,"Encapsulation"),
    new anwser(13,"Inheritance"),
    new anwser(14,"Polymorphism"),
    new anwser(15,"All of the above"),
    new anwser(16,"Public"),
    new anwser(17,"Protected"),
    new anwser(18,"Private"),
    new anwser(19,"A is member of object B"),
    new anwser(20,"B is member of Object A"),
    new anwser(20,"Product of A and B"),
    new anwser(22,"None of the above"),
    new anwser(23,"No argument"),
    new anwser(24,"One Argument"),
    new anwser(25,"Two Argument"),
    new anwser(26,"Absurd Class"),
    new anwser(27,"Dead Class"),
    new anwser(28,"Super Class"),
    new anwser(29,"Abstract Class"),
    new anwser(30,"+"),
    new anwser(31,"*"),
    new anwser(32,"++"),
    new anwser(33,"::"),
    new anwser(34,4),
    new anwser(35,2),
    new anwser(36,8),
    new anwser(37,16),
    new anwser(38,"Class declared with abstract keyword"),
    new anwser(39,"Class which hash at least one pure virtual function"),
    new anwser(40,"Class which has exactly one virtual function")
]

var questions = [
    new question(1,"Which of the following is not a type of Constructor in C++?",
                    "Friend constructor",[anwsers[0],anwsers[1],anwsers[2],anwsers[3]]),
    new question(2,"Which of the following is the address operator?",
                    "&",[anwsers[4],anwsers[5],anwsers[6],anwsers[7]]),
    new question(3,"For inserting a new line in C++ program, which one of the following statements can be used?",
                    "\\n",[anwsers[8],anwsers[9],anwsers[10],anwsers[11]]),
    new question(4,"Which one of the following represents the tab?",
                    "\\t",[anwsers[8],anwsers[9],anwsers[10],anwsers[11]]),
    new question(5,"Which of the following features is required to be supported by the programming language to become a pure object-oriented programming language?",
                    "All of the above",[anwsers[12],anwsers[13],anwsers[14],anwsers[15]]),
    new question(6,"Which of the following can be considered as the members that can be inherited but not accessible in any class?",
                    "Private",[anwsers[16],anwsers[17],anwsers[18],anwsers[15]]),
    new question(7,"An expression A.B in C++ means ____.",
                    "B is member of Object A",[anwsers[19],anwsers[20],anwsers[21],anwsers[22]]),
    new question(8,"Default constructor has ____ arguments.",
                    "No argument",[anwsers[23],anwsers[24],anwsers[25],anwsers[22]]),
    new question(9,"A class whos objects can not be created is known as _____.",
                    "Abstract Class",[anwsers[26],anwsers[27],anwsers[28],anwsers[29]]),
    new question(10,"Reusability of code in C++ is achieved through ____.",
                    "Inheritance",[anwsers[12],anwsers[13],anwsers[14],anwsers[15]]),
    new question(11,"In CPP, members of a class are ______ by default.",
                    "Private",[anwsers[16],anwsers[17],anwsers[18],anwsers[22]]),
    new question(12,"Which operator can not be overloaded in C++?",
                    "::",[anwsers[30],anwsers[31],anwsers[32],anwsers[33]]),
    new question(13,"How much bytes are occupied by int?",
                    "4",[anwsers[34],anwsers[35],anwsers[36],anwsers[37]]),
    new question(14,"What is an abstract class?","Class which has at least one pure virtual function",
                    [anwsers[38],anwsers[39],anwsers[40],anwsers[22]])
]
questions = questions.sort(()=> Math.random() -0.5);

var questionBody = document.querySelector(".question").firstElementChild;
var divOfAnswers = document.querySelector(".answers");
var markedQuestion = document.querySelector(".marked");
var questionNum = document.querySelector("#num");
var next = document.querySelector("#next");
var prev = document.querySelector("#prev");
var testAnswers = [];
var checkedAnswer = [];
var currentIndex = 0;
var testQuestionNum = 9;
var radioId=0;

function showQuestion()
{
    questionBody.textContent = questions[currentIndex].Body;
    questionNum.textContent = currentIndex+1;
    if(!divOfAnswers.children[currentIndex]){
        var answersDiv = document.createElement("div");
        answersDiv.setAttribute("class","answersBody");
        for(var i=0; i<4; i++)
        {
            var answerBody = document.createElement("div");
            var choicesArr = document.createElement("label");
            choicesArr.textContent = questions[currentIndex].Choices[i].Body;
            var choose = document.createElement("input");
            choose.setAttribute("type","radio");
            choose.setAttribute("name","answer");
            choose.setAttribute("value",questions[currentIndex].Choices[i].Body);
            choose.id = radioId;
            choicesArr.setAttribute("for",radioId);
            answerBody.append(choicesArr);
            answerBody.append(choose);
            answersDiv.append(answerBody);
            radioId++;

            choose.addEventListener("click",function(){
                testAnswers[currentIndex]=this.value;
                checkedAnswer[currentIndex]=this.id%4;
            })
        }
        divOfAnswers.append(answersDiv);
    }
    if(currentIndex == testQuestionNum)
    {
        next.disabled = true;
        next.style.opacity = 0.5;
        document.querySelector("#submit").style.display = "initial";
    }
    else if(currentIndex == 0){
        prev.disabled = true;
        prev.style.opacity = 0.5;
    }
    else{
        next.disabled = false;
        next.style.opacity = 1;
        prev.disabled = false;
        prev.style.opacity = 1;
    }
}

showQuestion();

function Next()
{
    if(currentIndex != testQuestionNum)
    {
        divOfAnswers.children[currentIndex].style.display = "none";
        currentIndex++;
        if(divOfAnswers.children[currentIndex])
        {
            divOfAnswers.children[currentIndex].style.display = "block";
            if(checkedAnswer[currentIndex]!=undefined){

                divOfAnswers.children[currentIndex].children[checkedAnswer[currentIndex]].children[1].checked=true;
            }
        }
        showQuestion();
    }
}
function Prev()
{
    if(currentIndex != 0)
    {
        divOfAnswers.children[currentIndex].style.display = "none";
        currentIndex--;
        divOfAnswers.children[currentIndex].style.display = "block";
        if(checkedAnswer[currentIndex]!=undefined){
            divOfAnswers.children[currentIndex].children[checkedAnswer[currentIndex]].children[1].checked=true;
        }
        showQuestion();
    }
}

function result()
{
    var correct = 0;
    for(var i=0; i<testAnswers.length; i++)
    {
        if(testAnswers[i]== questions[i].RightAnwser)
        {
            correct++;
        }
    }
    localStorage.setItem("result",correct);
    location.replace("result.html");
}

var markedQuestions = [];
var markedbtns = document.querySelector(".markedbtn");
var mark = document.querySelector(".mark");
var unmark = document.querySelector(".unmark");

function MarkQuestion()
{
    if(markedQuestions[currentIndex] == undefined){
        markedQuestions[currentIndex] = currentIndex;
        var btn = document.createElement("div");
        var bodyBtn = document.createElement("span");
        var close = document.createElement("i");
        close.id = currentIndex;
        console.log(close.id);
        bodyBtn.id = currentIndex;
        close.setAttribute("class","fas fa-times-circle");
        close.addEventListener("click",function(){
            markedQuestions[this.id] = undefined;
            this.parentElement.remove();
        });
        bodyBtn.addEventListener("click",function(){
            divOfAnswers.children[currentIndex].style.display = "none";
            if(this.id != 0){
                currentIndex = Number(this.id)-1;
                Next();
            }
            else{
                if(divOfAnswers.children[1]!=undefined){
                    currentIndex = 1;
                    Prev();
                }
                else{
                    divOfAnswers.children[currentIndex].style.display = "block";
                }
            }
        })
        if(innerWidth > 425){
            bodyBtn.textContent = "Marked Question "+ Number(currentIndex+1);
        }
        else{
            bodyBtn.textContent = "Q"+ Number(currentIndex+1);
        }
        btn.append(bodyBtn);
        btn.append(close);
        markedbtns.append(btn);
    }
}

var passed = document.querySelector(".passed");
var remain = document.querySelector(".remain");
var pWidth = 0;
var rWidth = 100
var minutes = 9;
var second = 59;
var timeLimit = document.querySelector(".timeLimit")

function time(){
    passed.style.backgroundColor = "#0f2032";
    passed.style.width = pWidth+"%"; 
    remain.style.width = rWidth+"%";
    if(second >9)
    {
        timeLimit.textContent = minutes + ":" + second;
    }
    else
    {
        timeLimit.textContent = minutes + ":0" + second;
    }
    second--;
    if(second == 0)
    {
        second = 59
        minutes--;
    }
    if(minutes == 0)
    {
        localStorage.time = 0;
        result();
    }
    pWidth += (1/6);
    rWidth -= (1/6);
}

setInterval(time,1000);
