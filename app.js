let num1 = Math.floor(Math.random()*10+1);
let num2 = Math.floor(Math.random()*10+1);
document.getElementById("value-1").value = num1;
document.getElementById("value-2").value = num2;

let ans = num1 + num2;
const jsGame = () =>{
    var userinp = document.getElementById('answer').value

    if(userinp == ans){
        alert("Perfect!! Your answer is correct.");
    } else{
        alert("Try Again!! " + ans + " is the Correct Answer." )
    }

    document.getElementById('answer').value="";
    num1 = Math.floor(Math.random()*10+1);
    num2 = Math.floor(Math.random()*10+1);
    document.getElementById("value-1").value = num1;
    document.getElementById("value-2").value = num2;
    ans = num1 + num2;
}