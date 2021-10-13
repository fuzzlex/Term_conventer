

let textContainerEl = document.getElementById("textContainer");
let numEl = document.getElementById("num");
let openedNewEl = document.getElementById("openedNew");
let resultEl = document.getElementById("resultE")



function tempConventer() {
    let formEl = document.getElementsByName("converter")
    formEl.forEach(radio => {
    if (radio.checked){checkedR = (radio.value);}
})
    textContainerEl.style.display = "none";
    openedNewEl.style.display = "inline-block";
    
}

function enterNum(){

    const celTofahrenheit = (cel) => cel * 1.8 + 32;
    const fahTocelcius = (fah) => (fah - 32) * 5 / 9;
    const celToKelvin = (cel) => (cel + 273) ;
    const fahTokelvin = (fah) => (5 * (fah - 32) / 9) + 273;

    let numIn = numEl.value;

    if (checkedR == "celtofah"){
        resultEl.innerHTML = numIn + " Celcius = " + celTofahrenheit(numIn).toFixed(2) + "  Fahrenheit";
        }
    else if (checkedR == "fahtocel"){
        resultEl.innerHTML =  numIn + " Fahrenheit = " + fahTocelcius(numIn).toFixed(2) + "  Celcius";
            }
    else if (checkedR == "celtokel"){
        resultEl.innerHTML = numIn + " Celcius = " + celToKelvin(numIn) + "  Kelvin";
            }
    else if (checkedR == "fahtokel"){
        resultEl.innerHTML = numIn + " Fahrenheit = " + fahTokelvin(numIn).toFixed(2) + "  Kelvin";
            }
}
  

