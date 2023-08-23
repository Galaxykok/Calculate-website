let res = document.querySelector("div#result");

function fac(){
    let value= document.querySelector("#factor").value;
    let fac = 1;
    for(let a = 1; a <= value; a++){
        fac *= a;
    }
    return fac;
}
function calc(){
    let value = document.querySelector("#factor").value;
    res.innerHTML=`The factorial of ${value} is ${fac()}`;
}