
const celTofahrenheit = (cel) => cel * 1.8 + 32;
const fahTocelcius = (fah) => (fah - 32) * 5 / 9;
const celTokelvin = (cel) => cel + 273.15 ;
const fahTokelvin = (fah) => (5 * (fah - 32) / 9) + 273;


function tempConventer() {
    let form = document.getElementsByName("converter")
    form.forEach(radio => {
    if (radio.checked){
        checkedR = (radio.value);
    }
})

  while (true){
  if (checkedR == "celtofah"){
      console.log(celTofahrenheit(20));
      break;}
  else if (checkedR == "fahtocel"){
          console.log(fahTocelcius(20));
          break;}
  else if (checkedR == "celtokel"){
          console.log(celTokelvin(20));
          break;}
  else if (checkedR == "fahtokel"){
          console.log(fahTokelvin(20));
          break;}
  }   
}
