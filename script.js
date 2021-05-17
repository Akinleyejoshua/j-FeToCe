const button1 = document.querySelector(".btn-1");
const button2 = document.querySelector(".btn-2");
const value = document.querySelector("input");
const result = document.querySelector(".result");

const ConvertFahrToCelsius = (value) => {
    if (isNaN(value)){
        result.innerHTML = `${value} is not a valid number but a ${typeof(value)}`;
        console.log(`${value} is not a valid number but a/an ${typeof(value)}`)
    } else {
        result.innerHTML = Math.fround((value - 32)* (5/9)).toFixed(4)
        console.log(`'${Math.fround((value - 32)* (5/9)).toFixed(4)}'`)
    }
}

var arr = [];
var yuGiOhResult = []

const CheckYuGiOh = (n) => {
    if (isNaN(n)){
        result.innerHTML = `Invalid Parameter: "${n}"`;
        console.log(`Invalid Parameter: "${n}"`)
    } else {
        result.innerHTML = "";
        for (i = 0; i < n; i++){
            arr.push(i + 1)
        }
        arr.map((items) => {
            if (items%2 === 0){
                yuGiOhResult.push("yu");
            }
            if (items%3 === 0){
                yuGiOhResult.push("gi");
            }
            if (items%5 === 0){
                yuGiOhResult.push("oh");
            }
            
        })
        result.innerHTML = `${yuGiOhResult}`;
        console.log(yuGiOhResult)
        arr = [];
        yuGiOhResult = [];
    }
    
}

button1.onclick = () => {
    ConvertFahrToCelsius(value.value)
}

button2.onclick = () => {
    CheckYuGiOh(value.value)
}