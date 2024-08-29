//  this use case will give empty value
// const hgt = document.getElementById("#height") 
// const wgt =  document.getElementById("#weight")

// const form = document.querySelector('form')
// // let bmi ;

// form.addEventListener("submit" ,function(e){
//     e.preventDefault() ;
//     const height = parseInt(document.getElementById("height").value);
//     const weight = parseInt(document.getElementById("weight").value);
//     const results = document.querySelector("#results");
//     if(height === '' || height < 0 || isNaN(height)){
//         results.innerHTML = `PLEASE give a valid height ${height}` ;
//     }else if(weight === '' || weight < 0 || isNaN(weight)){
//         results.innerHTML = `PLEASE give a valid height ${weight}` ;
//     }
//     else {
//        var bmi = (weight / ((height*height)/1000).toFixed(2)) // tofixes to gives the value to 2 decimal places 
//        //show the result 
//        results.innerHTML =`<span> ${bmi} </span>`
//     }

//     const underWeight = document.querySelector("#under-weight");
//     const normalWeight = document.querySelector("#normal-weight");
//     const overWeight = document.querySelector("#over-weight");

//     if(bmi < 18.6){
//         underWeight.innerHTML = "You are underweight";
//     }
//     else if( bmi > 18.6){
//         overWeight.innerHTML = "Normal Range = 18.6 and 24.9"
//     }

    
// })



const form = document.querySelector('form');

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const results = document.querySelector("#results");

    if (isNaN(height) || height <= 0) {
        results.innerHTML = `PLEASE give a valid height. Current value: ${height}`;
        return;
    } 
    if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `PLEASE give a valid weight. Current value: ${weight}`;
        return;
    }

    // Calculate BMI
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

    // Show the result
    results.innerHTML = `<span>Your BMI is: ${bmi}</span>`;

    // Determine the BMI category and update the guide
    const underWeight = document.querySelector("#under-weight");
    const normalWeight = document.querySelector("#normal-weight");
    const overWeight = document.querySelector("#over-weight");

    if (bmi < 18.6) {
        underWeight.innerHTML = "You are underweight";
        normalWeight.innerHTML = "";
        overWeight.innerHTML = "";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        normalWeight.innerHTML = "You are in the normal range";
        underWeight.innerHTML = "";
        overWeight.innerHTML = "";
    } else {
        overWeight.innerHTML = "You are overweight";
        underWeight.innerHTML = "";
        normalWeight.innerHTML = "";
    }
});
