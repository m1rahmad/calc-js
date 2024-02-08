const display = document.getElementById('display')


function appendToDisplay(input) {
    display.value += input
}

function clearDisplay() {
    display.value = ''
}

function calculate() {
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR"
    }

}
// function persentage() {
//     let x = display.value
//     let y = x / 300 * 100
//     return z
// }

// let value1 = 10;let value2 = 12;let percentage = (value2 - value1) / (value1) * 100;

// let oldPrice = 12;let newPrice = 16;let percentageChange = (newPrice - oldPrice) / (oldPrice) * 100;

// let pointsEarned = 23; //number of points earnedlet totalPointsPossible = 25; //total number of points possible let gradePercentage = (pointsEarned / totalPointsPossible) * 100 // gradePercentage = 92

// let numbers = [10, 20, 30, 40];let sum = 0;for (let i = 0; i < numbers.length; i++) {sum += numbers[i];}let average = sum / numbers.length;

// function calcPercentage(x, y, fixed = 2) {
//     const percent = (x / y) * 100;
    
//     if(!isNaN(percent)){
//       return Number(percent.toFixed(fixed));
//     }else{
//       return null;
//     }
    
//   }
  
//   console.log(calcPercentage(23, 40));


function percentage_1() {
 
    let percent = document.getElementById("percent").value;
     
    let num = document.getElementById("num").value;
    document.getElementById("input")
        .value = (num / 100) * percent;
}
 
// function percentage_2() {
 
//     // Method returns the element of num1 id
//     let num1 = document.getElementById("num1").value;
     
//     // Method returns the elements of num2 id
//     let num2 = document.getElementById("num2").value;
//     document.getElementById("value2")
//             .value = (num1 * 100) / num2 + "%";
// }
