const number = document.getElementById("number");
const select = document.getElementById("select inputGroupSelect01");


const output = document.querySelector(".output-section");
const outputPlace = document.querySelector(".output");

const btn = document.getElementById("btn");


const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
        return n > 1;
    }
};

const isEven = (n) => (n % 2 == 0 ? true : false);

const isOdd = (n) => (n % 2 !== 0 ? true : false);

const generatePrimeRandom = (n) => {
    let arr = [];

    while (arr.length < n) {
        let num = Math.floor(Math.random() * 9);

        if (isPrime(num)) {
            arr.push(num);
        }
    }
    countRepetation(arr);
    return arr.join("");
};

const generateEvenRandom = (n) => {
    let arr = [];

    while (arr.length < n) {
        let num = Math.floor(Math.random() * 9);

        if (isEven(num)) {
            arr.push(num);
        }
    }
    countRepetation(arr);
    return arr.join("");
};

const generateOddRandom = (n) => {
    let arr = [];

    while (arr.length < n) {
        let num = Math.floor(Math.random() * 9);

        if (isOdd(num)) {
            arr.push(num);
        }
    }
    countRepetation(arr);
    return arr.join("");
};

const generateAll = (n) => {
    let arr = [];
    while(arr.length<n){
        let num = Math.floor(Math.random()*100);
        arr.push(num);
    }
    countRepetation(arr);
    return arr.join(",");
}

const callFunc = (n, str) => {
    if (str === "Even") {
        return generateEvenRandom(n)
    } else if (str === "Odd") {
        return generateOddRandom(n);
    } else if (str === "Prime") {
        return generatePrimeRandom(n);
    } else if(str === "Mixed") {
        return generateAll(n);
    }
}

const execute = () => {
    let numValue = number.value;
    let selectValue = select.options[select.selectedIndex].text;
    if (numValue && selectValue) {
        let data = callFunc(numValue, selectValue);
        output.style.visibility = "visible";
        outputPlace.textContent = data;
        
    } else {
        alert("Enter something");
    }
    
    number.value = " ";
    select.value = " ";

}

const countRepetation = (...arr) => {
    let array = arr[0];
    let key = [];
    let value = [];
    let obj = {};

    for(let i=0;i<array.length;i++){
        !obj[array[i]] ? obj[array[i]] = 1 : obj[array[i]] += 1;
    }

    for(const property in obj){
        key.push(property);
        value.push(obj[property]);
    }
    console.log(key, value);
    generateGraph("line", value, key);
}

btn.addEventListener("click", execute);