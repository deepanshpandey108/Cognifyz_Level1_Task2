var theme=document.querySelector("#col")
var btn=document.querySelector("#btn")

let flag=0
btn.addEventListener("click",function() {
    
    if(flag==0)
    {
        theme.style.backgroundColor = "rgba(26, 83, 240, 0.212)";
        flag=1;
    }
    else if(flag==1)
    {
        theme.style.backgroundColor = "rgba(247, 135, 7, 0.212)";
        flag=0;
    }
})


function calculate(operation) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        return;
    }

    var result;
    if(operation==='add')
    {
        result=num1+num2;
    }
    else if(operation==='subtract')
    {
        result=num1-num2;
    }
    else if(operation==='multiply')
    {
        result=num1*num2;
    }
    else if(operation==='divide')
    {
        if(num2===0)
        {
            alert("Cannot divide a no. by 0!");
            return;
        }
        else
        {
            result=num1/num2;
        }
    }
    
    document.getElementById("result").textContent = "Result: " + result;

    }


var greet= document.querySelector("#greet")
const d = new Date()
let hour = d.getHours()

greet.addEventListener("click",function(){
    if(hour>=0 && hour<=3)
    {
        alert("Good Night! Sleep Well")
    }
    else if(hour>=4 && hour<=11){
        alert("Good Morning! Have a Nice Day")
    }

    else if(hour>=12 && hour<=15){
        alert("Good Afternoon! I hope you're having a nice day")
    }
    else if(hour>=16 && hour<=20){
        alert("Good Evening!")
    }

    else if(hour>=21 && hour<=24){
        alert("Good Night! Sleep Well")
    }
})

    