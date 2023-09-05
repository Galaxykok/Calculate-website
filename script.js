let res = document.querySelector("div#result");

function fac() {
    let value = document.querySelector("#factor").value;
    let fac = 1;
    for (let a = 1; a <= value; a++) {
        fac *= a;
    }
    return fac;
}
function calc() {
    let value = parseFloat(document.querySelector("#factor").value);
    if (Number.isNaN(value)){
        res.innerHTML = "";
        return;
    }
    if (value % 1 !== 0) {
        res.innerHTML = "There is no factorial of decimals";
        return;
    }
    if (value < 0) {
        res.innerHTML = "There is no factorial of negatives";
        return;
    }
    res.innerHTML = `The factorial of ${value} is ${fac()}`;
}
