let first = document.querySelector("#first");
let second = document.querySelector("#second");
let convert = document.querySelector("#convert");

let calculate = document.querySelector("#calculate");
let result = document.querySelector("#result");

const temperature = ['fahrenheit', 'celcius', 'kelvin'];
const weight = ['pound','kilogram','gram','ton','ounce'];


const distance = ['millimeter','centimeter','meter','kilometer','inch','feet','yard','mile','nauticalMile','mil']


const data = ['bit','byte','kilobyte','kibibyte','megabyte','mebibyte','gigabyte','gibibyte','terabyte','tebibyte']


const time = ['millisecond','second','minute','hour','day','week'];
calculate.disabled = true;
convert.addEventListener('input', function(){
    if(isNaN(this.value)){
        alert("must be a positive number");
    }
    else if(this.value == ""){
        calculate.disabled = true;
    }
    else{
        calculate.disabled = false;
    }
});

first.addEventListener('change', function(){
    second.innerHTML = '';
    if(temperature.includes(this.value)){//this.value == 'fahrenheit'){
        for(var i = 0; i < temperature.length; i++){
            if(this.value != temperature[i]){
                second.innerHTML += `<option value="${temperature[i]}">${temperature[i]}</option>`
            }
            
        }
    }
    else if(weight.includes(this.value)){
        for(var i = 0; i < weight.length; i++){
            if(this.value != weight[i]){
                second.innerHTML += `<option value="${weight[i]}">${weight[i]}</option>`
            }
            
        }
    }
    else if(distance.includes(this.value)){
        for(var i = 0; i < distance.length; i++){
            if(this.value != distance[i]){
                second.innerHTML += `<option value="${distance[i]}">${distance[i]}</option>`
            }
            
        }
    }
    else if(data.includes(this.value)){
        for(var i = 0; i < data.length; i++){
            if(this.value != data[i]){
                second.innerHTML += `<option value="${data[i]}">${data[i]}</option>`
            }
            
        }
    }
    else if(time.includes(this.value)){
        for(var i = 0; i < time.length; i++){
            if(this.value != time[i]){
                second.innerHTML += `<option value="${time[i]}">${time[i]}</option>`
            }
            
        }
    }
});

calculate.addEventListener("click",function(){
    //temperature
    if(first.value == 'fahrenheit'){
        
        convertFahrenheit();
    }
    else if(first.value == 'celcius'){
        
        convertCelcius();
    }
    else if(first.value == 'kelvin'){
        
        convertKelvin();
    }
    //weight
    else if(first.value == 'pound'){
        convertPounds();
    }
    else if(first.value == 'kilogram'){
        convertKilograms();
    }
    else if(first.value == 'gram'){
        convertGrams();
    }
    else if(first.value == 'ton'){
        convertTons();
    }
    else if(first.value == 'ounce'){
        convertOunces();
    }
    //distance
    else if(first.value == 'millimeter'){
        convertMillimeters();
    }
    else if(first.value == 'centimeter'){
        convertCentimeters();
    }
    else if(first.value == 'meter'){
        convertMeters();
    }
    else if(first.value == 'kilometer'){
        convertKilometers();
    }
    else if(first.value == 'inch'){
        convertInches();
    }
    else if(first.value == 'feet'){
        convertFeet();
    }
    else if(first.value == 'yard'){
        convertYards();
    }
    else if(first.value == 'mile'){
        convertMiles();
    }
    else if(first.value == 'nauticalMile'){
        convertNauticalMiles();
    }
    else if(first.value == 'mil'){
        convertMils();
    }
    //data
    else if(first.value == 'bit'){
        convertBits();
    }
    else if(first.value == 'byte'){
        convertBytes();
    }
    else if(first.value == 'kilobyte'){
        convertKilobytes();
    }
    else if(first.value == 'kibibyte'){
        convertKibibytes();
    }
    else if(first.value == 'megabyte'){
        convertMegabytes();
    }
    else if(first.value == 'mebibyte'){
        convertMebibytes();
    }
    else if(first.value == 'gigabyte'){
        convertGigabytes();
    }
    else if(first.value == 'gibibyte'){
        convertGibibytes();
    }
    else if(first.value == 'terabyte'){
        convertTereabytes();
    }
    else if(first.value == 'tebibyte'){
        convertTebibytes();
    }
    //time
    else if(first.value == 'millisecond'){
        convertMilliseconds();
    }
    else if(first.value == 'second'){
        convertSeconds();
    }
    else if(first.value == 'minute'){
        convertMinutes();
    }
    else if(first.value == 'hour'){
        convertHours();
    }
    else if(first.value == 'day'){
        convertDays();
    }
    else if(first.value == 'week'){
        convertWeeks();
    }
});

function convertFahrenheit(){
    if(second.value == 'celcius'){
        result.textContent = (Number(convert.value) - 32) * (5/9);
    }
    else if(second.value = 'kelvin'){
        result.textContent = (Number(convert.value) - 32) * (5/9) + 273.15;
    }
}
function convertCelcius(){
    if(second.value == 'fahrenheit'){
        result.textContent = (Number(convert.value) * (9/5)) + 32;
    }
    else if(second.value = 'kelvin'){
        result.textContent = (Number(convert.value) - 32) + 273.15;
    }
}
function convertKelvin(){
    if(second.value == 'celcius'){
        result.textContent = (Number(convert.value) - 273.15);
    }
    else if(second.value = 'fahrenheit'){
        result.textContent = (Number(convert.value) - 273.15) * (9/5) + 32;
    }
}



function convertTons(){
 if(second.value == 'pound'){
    result.textContent = (Number(convert.value) * 2000);
 }
 else if(second.value == 'ounce'){
    result.textContent = (Number(convert.value) * 32000);
 }
 else if(second.value == 'kilogram'){
    result.textContent = (Number(convert.value) * 907.2);
 }
 else if(second.value == 'gram'){
    result.textContent = (Number(convert.value) * 907200);
 }
}
function convertPounds(){
    if(second.value == 'ton'){
        result.textContent = (Number(convert.value) / 2000);
    }
    else if(second.value == 'ounce'){
        result.textContent = (Number(convert.value) * 16);
    }
    else if(second.value == 'kilogram'){
        result.textContent = (Number(convert.value) / 2.205);
    }
    else if(second.value == 'gram'){
        result.textContent = (Number(convert.value) * 453.6);
    }
}
function convertOunces(){
    if(second.value == 'ton'){
        result.textContent = (Number(convert.value) / 32000);
    }
    else if(second.value == 'pound'){
        result.textContent = (Number(convert.value) / 16);
    }
    else if(second.value == 'kilogram'){
        result.textContent = (Number(convert.value) / 35.274);
    }
    else if(second.value == 'gram'){
        result.textContent = (Number(convert.value) * 28.35);
    }
}
function convertKilograms(){
    if(second.value == 'pound'){
        result.textContent = (Number(convert.value) * 2.205);
    }
    else if(second.value == 'ounce'){
        result.textContent = (Number(convert.value) * 35.274);
    }
    else if(second.value == 'ton'){
        result.textContent = (Number(convert.value) / 907.2);
    }
    else if(second.value == 'gram'){
        result.textContent = (Number(convert.value) * 1000);
    }
}
function convertGrams(){
    if(second.value == 'pound'){
        result.textContent = (Number(convert.value) / 453.6);
    }
    else if(second.value == 'ounce'){
        result.textContent = (Number(convert.value) / 28.35);
    }
    else if(second.value == 'ton'){
        result.textContent = (Number(convert.value) / 907200);
    }
    else if(second.value == 'kilogram'){
        result.textContent = (Number(convert.value) / 1000);
    }
}



function convertMillimeters(){
    if(second.value == 'centimeter'){
        result.textContent = (Number(convert.value) / 10);
    }
    else if(second.value == 'meter'){
        result.textContent = (Number(convert.value) / 1000);
    }
    else if(second.value == 'kilometer'){
        result.textContent = (Number(convert.value) / 1000000);
    }
    else if(second.value == 'inch'){
        result.textContent = (Number(convert.value) / 25.4);
    }
    else if(second.value == 'feet'){
        result.textContent = (Number(convert.value) / 304.8);
    }
    else if(second.value == 'yard'){
        result.textContent = (Number(convert.value) / 914.4);
    }
    else if(second.value == 'mile'){
        result.textContent = (Number(convert.value) / 1.609e+6);
    }
    else if(second.value == 'nauticalMile'){
        result.textContent = (Number(convert.value) / 1.852e+6);
    }
    else if(second.value == 'mil'){
        result.textContent = (Number(convert.value) * 39.37);
    }
}
function convertCentimeters(){
    if(second.value == 'millimeter'){
        result.textContent = (Number(convert.value) * 10);
    }
    else if(second.value == 'meter'){
        result.textContent = (Number(convert.value) / 100);
    }
    else if(second.value == 'kilometer'){
        result.textContent = (Number(convert.value) / 100000);
    }
    else if(second.value == 'inch'){
        result.textContent = (Number(convert.value) / 2.54);
    }
    else if(second.value == 'feet'){
        result.textContent = (Number(convert.value) / 30.48);
    }
    else if(second.value == 'yard'){
        result.textContent = (Number(convert.value) / 91.44);
    }
    else if(second.value == 'mile'){
        result.textContent = (Number(convert.value) / 160900);
    }
    else if(second.value == 'nauticalMile'){
        result.textContent = (Number(convert.value) / 185200);
    }
    else if(second.value == 'mil'){
        result.textContent = (Number(convert.value) * 393.7);
    }
}
function convertMeters(){
    if(second.value == 'millimeter'){
        result.textContent = (Number(convert.value) * 1000);
    }
    else if(second.value == 'centimeter'){
        result.textContent = (Number(convert.value) * 100);
    }
    else if(second.value == 'kilometer'){
        result.textContent = (Number(convert.value) / 1000);
    }
    else if(second.value == 'inch'){
        result.textContent = (Number(convert.value) * 39.37);
    }
    else if(second.value == 'feet'){
        result.textContent = (Number(convert.value) * 3.281);
    }
    else if(second.value == 'yard'){
        result.textContent = (Number(convert.value) * 1.094);
    }
    else if(second.value == 'mile'){
        result.textContent = (Number(convert.value) / 1609);
    }
    else if(second.value == 'nauticalMile'){
        result.textContent = (Number(convert.value) / 1852);
    }
    else if(second.value == 'mil'){
        result.textContent = (Number(convert.value) * 39370);
    }
}
function convertKilometers(){
    if(second.value == 'millimeter'){
        result.textContent = (Number(convert.value) * 1e+6);
    }
    else if(second.value == 'centimeter'){
        result.textContent = (Number(convert.value) * 100000);
    }
    else if(second.value == 'meter'){
        result.textContent = (Number(convert.value) * 1000);
    }
    else if(second.value == 'inch'){
        result.textContent = (Number(convert.value) * 39370);
    }
    else if(second.value == 'feet'){
        result.textContent = (Number(convert.value) * 3281);
    }
    else if(second.value == 'yard'){
        result.textContent = (Number(convert.value) * 1094);
    }
    else if(second.value == 'mile'){
        result.textContent = (Number(convert.value) / 1.609);
    }
    else if(second.value == 'nauticalMile'){
        result.textContent = (Number(convert.value) / 1.852);
    }
    else if(second.value == 'mil'){
        result.textContent = (Number(convert.value) * 3.937e+7);
    }
}
function convertInches(){
    if(second.value == 'millimeter'){
        result.textContent = (Number(convert.value) * 25.4);
    }
    else if(second.value == 'centimeter'){
        result.textContent = (Number(convert.value) * 2.54);
    }
    else if(second.value == 'meter'){
        result.textContent = (Number(convert.value) / 39.37);
    }
    else if(second.value == 'kilometer'){
        result.textContent = (Number(convert.value) / 39370);
    }
    else if(second.value == 'feet'){
        result.textContent = (Number(convert.value) / 12);
    }
    else if(second.value == 'yard'){
        result.textContent = (Number(convert.value) / 36);
    }
    else if(second.value == 'mile'){
        result.textContent = (Number(convert.value) / 63360);
    }
    else if(second.value == 'nauticalMile'){
        result.textContent = (Number(convert.value) / 72910);
    }
    else if(second.value == 'mil'){
        result.textContent = (Number(convert.value) * 1000);
    }
}
function convertFeet(){
    if(second.value == 'millimeter'){
        result.textContent = (Number(convert.value) * 304.8);
    }
    else if(second.value == 'centimeter'){
        result.textContent = (Number(convert.value) * 30.48);
    }
    else if(second.value == 'meter'){
        result.textContent = (Number(convert.value) / 3.281);
    }
    else if(second.value == 'kilometer'){
        result.textContent = (Number(convert.value) / 3281);
    }
    else if(second.value == 'inch'){
        result.textContent = (Number(convert.value) * 12);
    }
    else if(second.value == 'yard'){
        result.textContent = (Number(convert.value) / 3);
    }
    else if(second.value == 'mile'){
        result.textContent = (Number(convert.value) / 5280);
    }
    else if(second.value == 'nauticalMile'){
        result.textContent = (Number(convert.value) / 6076);
    }
    else if(second.value == 'mil'){
        result.textContent = (Number(convert.value) * 12000);
    }
}
function convertYards(){
    if(second.value == 'millimeter'){
        result.textContent = (Number(convert.value) * 914.4);
    }
    else if(second.value == 'centimeter'){
        result.textContent = (Number(convert.value) * 91.44);
    }
    else if(second.value == 'meter'){
        result.textContent = (Number(convert.value) / 1.094);
    }
    else if(second.value == 'kilometer'){
        result.textContent = (Number(convert.value) / 1094);
    }
    else if(second.value == 'inch'){
        result.textContent = (Number(convert.value) * 36);
    }
    else if(second.value == 'feet'){
        result.textContent = (Number(convert.value) * 3);
    }
    else if(second.value == 'mile'){
        result.textContent = (Number(convert.value) / 1760);
    }
    else if(second.value == 'nauticalMile'){
        result.textContent = (Number(convert.value) / 2025);
    }
    else if(second.value == 'mil'){
        result.textContent = (Number(convert.value) * 36000);
    }
}
function convertMiles(){
    if(second.value == 'millimeter'){
        result.textContent = (Number(convert.value) * 1.609e+6);
    }
    else if(second.value == 'centimeter'){
        result.textContent = (Number(convert.value) * 160900);
    }
    else if(second.value == 'meter'){
        result.textContent = (Number(convert.value) * 1609);
    }
    else if(second.value == 'kilometer'){
        result.textContent = (Number(convert.value) * 1.609);
    }
    else if(second.value == 'inch'){
        result.textContent = (Number(convert.value) * 63360);
    }
    else if(second.value == 'feet'){
        result.textContent = (Number(convert.value) * 5280);
    }
    else if(second.value == 'yard'){
        result.textContent = (Number(convert.value) * 1760);
    }
    else if(second.value == 'nauticalMile'){
        result.textContent = (Number(convert.value) / 1.151);
    }
    else if(second.value == 'mil'){
        result.textContent = (Number(convert.value) * 63360000);
    }
}
function convertNauticalMiles(){
    if(second.value == 'millimeter'){
        result.textContent = (Number(convert.value) * 1.852e+6);
    }
    else if(second.value == 'centimeter'){
        result.textContent = (Number(convert.value) * 185200);
    }
    else if(second.value == 'meter'){
        result.textContent = (Number(convert.value) * 1852);
    }
    else if(second.value == 'kilometer'){
        result.textContent = (Number(convert.value) * 1.852);
    }
    else if(second.value == 'inch'){
        result.textContent = (Number(convert.value) * 72910);
    }
    else if(second.value == 'feet'){
        result.textContent = (Number(convert.value) * 6076);
    }
    else if(second.value == 'yard'){
        result.textContent = (Number(convert.value) * 2025);
    }
    else if(second.value == 'mile'){
        result.textContent = (Number(convert.value) * 1.151);
    }
    else if(second.value == 'mil'){
        result.textContent = (Number(convert.value) * 7.291e+7);
    }
}
function convertMils(){
    if(second.value == 'millimeter'){
        result.textContent = (Number(convert.value) / 39.37);
    }
    else if(second.value == 'centimeter'){
        result.textContent = (Number(convert.value) / 393.7);
    }
    else if(second.value == 'meter'){
        result.textContent = (Number(convert.value) / 39370);
    }
    else if(second.value == 'kilometer'){
        result.textContent = (Number(convert.value) / 3.937e+7);
    }
    else if(second.value == 'inch'){
        result.textContent = (Number(convert.value) * 0.001);
    }
    else if(second.value == 'feet'){
        result.textContent = (Number(convert.value) / 12000);
    }
    else if(second.value == 'yard'){
        result.textContent = (Number(convert.value) / 36000);
    }
    else if(second.value == 'mile'){
        result.textContent = (Number(convert.value) / 1.578282828E-8);
    }
    else if(second.value == 'nauticalMile'){
        result.textContent = (Number(convert.value) / 7.291e+7);
    }
}



function convertBits(){
    if(second.value == 'byte'){
        result.textContent = (Number(convert.value) / 8);
    }
    else if(second.value == 'kilobyte'){
        result.textContent = (Number(convert.value) / 8000);
    }
    else if(second.value == 'kibibyte'){
        result.textContent = (Number(convert.value) / 1024);
    }
    else if(second.value == 'megabyte'){
        result.textContent = (Number(convert.value) / 8e+6);
    }
    else if(second.value == 'mebibyte'){
        result.textContent = (Number(convert.value) / 8.389e+6);
    }
    else if(second.value == 'gigabyte'){
        result.textContent = (Number(convert.value) / 8e+9);
    }
    else if(second.value == 'gibibyte'){
        result.textContent = (Number(convert.value) / 8.59e+9);
    }
    else if(second.value == 'terabyte'){
        result.textContent = (Number(convert.value) / 8e+12);
    }
    else if(second.value == 'tebibyte'){
        result.textContent = (Number(convert.value) / 8.796e+12);
    }
}
function convertBytes(){
    if(second.value == 'bit'){
        result.textContent = (Number(convert.value) * 8);
    }
    else if(second.value == 'kilobyte'){
        result.textContent = (Number(convert.value) / 1000);
    }
    else if(second.value == 'kibibyte'){
        result.textContent = (Number(convert.value) / 1024);
    }
    else if(second.value == 'megabyte'){
        result.textContent = (Number(convert.value) / 1e+6);
    }
    else if(second.value == 'mebibyte'){
        result.textContent = (Number(convert.value) / 1.049e+6);
    }
    else if(second.value == 'gigabyte'){
        result.textContent = (Number(convert.value) / 1e+9);
    }
    else if(second.value == 'gibibyte'){
        result.textContent = (Number(convert.value) / 1.074e+9);
    }
    else if(second.value == 'terabyte'){
        result.textContent = (Number(convert.value) / 1e+12);
    }
    else if(second.value == 'tebibyte'){
        result.textContent = (Number(convert.value) / 1.1e+12);
    }
}
function convertKilobytes(){
    if(second.value == 'bit'){
        result.textContent = (Number(convert.value) * 8000);
    }
    else if(second.value == 'byte'){
        result.textContent = (Number(convert.value) * 1024);
    }
    else if(second.value == 'kibibyte'){
        result.textContent = (Number(convert.value) / 1.024);
    }
    else if(second.value == 'megabyte'){
        result.textContent = (Number(convert.value) / 1000);
    }
    else if(second.value == 'mebibyte'){
        result.textContent = (Number(convert.value) / 1049);
    }
    else if(second.value == 'gigabyte'){
        result.textContent = (Number(convert.value) / 1e+6);
    }
    else if(second.value == 'gibibyte'){
        result.textContent = (Number(convert.value) / 1.074e+6);
    }
    else if(second.value == 'terabyte'){
        result.textContent = (Number(convert.value) / 1e+9);
    }
    else if(second.value == 'tebibyte'){
        result.textContent = (Number(convert.value) / 1.1e+9);
    }
}
function convertKibibytes(){
    if(second.value == 'bit'){
        result.textContent = (Number(convert.value) * 8192);
    }
    else if(second.value == 'byte'){
        result.textContent = (Number(convert.value) * 1024);
    }
    else if(second.value == 'kilobyte'){
        result.textContent = (Number(convert.value) * 1.024);
    }
    else if(second.value == 'megabyte'){
        result.textContent = (Number(convert.value) / 976.6);
    }
    else if(second.value == 'mebibyte'){
        result.textContent = (Number(convert.value) / 1024);
    }
    else if(second.value == 'gigabyte'){
        result.textContent = (Number(convert.value) / 976600);
    }
    else if(second.value == 'gibibyte'){
        result.textContent = (Number(convert.value) / 1.049e+6);
    }
    else if(second.value == 'terabyte'){
        result.textContent = (Number(convert.value) / 9.766e+8);
    }
    else if(second.value == 'tebibyte'){
        result.textContent = (Number(convert.value) / 1.074e+9);
    }
}
function convertMegabytes(){
    if(second.value == 'bit'){
        result.textContent = (Number(convert.value) * 8e+6);
    }
    else if(second.value == 'byte'){
        result.textContent = (Number(convert.value) * 1e+6);
    }
    else if(second.value == 'kilobyte'){
        result.textContent = (Number(convert.value) * 1000);
    }
    else if(second.value == 'kibibyte'){
        result.textContent = (Number(convert.value) * 976.6);
    }
    else if(second.value == 'mebibyte'){
        result.textContent = (Number(convert.value) / 1.049);
    }
    else if(second.value == 'gigabyte'){
        result.textContent = (Number(convert.value) / 1000);
    }
    else if(second.value == 'gibibyte'){
        result.textContent = (Number(convert.value) / 1074);
    }
    else if(second.value == 'terabyte'){
        result.textContent = (Number(convert.value) / 1e+6);
    }
    else if(second.value == 'tebibyte'){
        result.textContent = (Number(convert.value) / 1.1e+6);
    }
}
function convertMebibytes(){
    if(second.value == 'bit'){
        result.textContent = (Number(convert.value) * 8.389e+6);
    }
    else if(second.value == 'byte'){
        result.textContent = (Number(convert.value) * 1.049e+6);
    }
    else if(second.value == 'kilobyte'){
        result.textContent = (Number(convert.value) * 1049);
    }
    else if(second.value == 'kibibyte'){
        result.textContent = (Number(convert.value) * 1024);
    }
    else if(second.value == 'megabyte'){
        result.textContent = (Number(convert.value) * 1.049);
    }
    else if(second.value == 'gigabyte'){
        result.textContent = (Number(convert.value) / 953.7);
    }
    else if(second.value == 'gibibyte'){
        result.textContent = (Number(convert.value) / 1024);
    }
    else if(second.value == 'terabyte'){
        result.textContent = (Number(convert.value) / 953700);
    }
    else if(second.value == 'tebibyte'){
        result.textContent = (Number(convert.value) / 1.049e+6);
    }
}
function convertGigabytes(){
    if(second.value == 'bit'){
        result.textContent = (Number(convert.value) * 8.389e+6);
    }
    else if(second.value == 'byte'){
        result.textContent = (Number(convert.value) * 1e+9);
    }
    else if(second.value == 'kilobyte'){
        result.textContent = (Number(convert.value) * 1e+6);
    }
    else if(second.value == 'kibibyte'){
        result.textContent = (Number(convert.value) * 976600);
    }
    else if(second.value == 'megabyte'){
        result.textContent = (Number(convert.value) * 1000);
    }
    else if(second.value == 'mebibyte'){
        result.textContent = (Number(convert.value) * 953.7);
    }
    else if(second.value == 'gibibyte'){
        result.textContent = (Number(convert.value) / 1.074);
    }
    else if(second.value == 'terabyte'){
        result.textContent = (Number(convert.value) / 1000);
    }
    else if(second.value == 'tebibyte'){
        result.textContent = (Number(convert.value) / 1100);
    }
}
function convertGibibytes(){
    if(second.value == 'bit'){
        result.textContent = (Number(convert.value) * 8.59e+9);
    }
    else if(second.value == 'byte'){
        result.textContent = (Number(convert.value) * 1.074e+9);
    }
    else if(second.value == 'kilobyte'){
        result.textContent = (Number(convert.value) * 1.074e+6);
    }
    else if(second.value == 'kibibyte'){
        result.textContent = (Number(convert.value) * 1.049e+6);
    }
    else if(second.value == 'megabyte'){
        result.textContent = (Number(convert.value) * 1074);
    }
    else if(second.value == 'mebibyte'){
        result.textContent = (Number(convert.value) * 1024);
    }
    else if(second.value == 'gigabyte'){
        result.textContent = (Number(convert.value) * 1.074);
    }
    else if(second.value == 'terabyte'){
        result.textContent = (Number(convert.value) / 931.3);
    }
    else if(second.value == 'tebibyte'){
        result.textContent = (Number(convert.value) / 1024);
    }
}
function convertTereabytes(){
    if(second.value == 'bit'){
        result.textContent = (Number(convert.value) * 8e+12);
    }
    else if(second.value == 'byte'){
        result.textContent = (Number(convert.value) * 1e+12);
    }
    else if(second.value == 'kilobyte'){
        result.textContent = (Number(convert.value) * 1e+9);
    }
    else if(second.value == 'kibibyte'){
        result.textContent = (Number(convert.value) * 9.766e+8);
    }
    else if(second.value == 'megabyte'){
        result.textContent = (Number(convert.value) * 1e+6);
    }
    else if(second.value == 'mebibyte'){
        result.textContent = (Number(convert.value) * 953700);
    }
    else if(second.value == 'gigabyte'){
        result.textContent = (Number(convert.value) * 1000);
    }
    else if(second.value == 'gibibyte'){
        result.textContent = (Number(convert.value) * 931.3);
    }
    else if(second.value == 'tebibyte'){
        result.textContent = (Number(convert.value) * 0.90949470177293);
    }
}
function convertTebibytes(){
    if(second.value == 'bit'){
        result.textContent = (Number(convert.value) * 8.796e+12);
    }
    else if(second.value == 'byte'){
        result.textContent = (Number(convert.value) * 1.1e+12);
    }
    else if(second.value == 'kilobyte'){
        result.textContent = (Number(convert.value) * 1.1e+9);
    }
    else if(second.value == 'kibibyte'){
        result.textContent = (Number(convert.value) * 1.074e+9);
    }
    else if(second.value == 'megabyte'){
        result.textContent = (Number(convert.value) * 1.1e+6);
    }
    else if(second.value == 'mebibyte'){
        result.textContent = (Number(convert.value) * 1.049e+6);
    }
    else if(second.value == 'gigabyte'){
        result.textContent = (Number(convert.value) * 1100);
    }
    else if(second.value == 'gibibyte'){
        result.textContent = (Number(convert.value) * 1024);
    }
    else if(second.value == 'terabyte'){
        result.textContent = (Number(convert.value) * 1.1);
    }
}
function convertMilliseconds(){
    if(second.value == 'second'){
        result.textContent = (Number(convert.value) / 1000);
    }
    else if(second.value == 'minute'){
        result.textContent = (Number(convert.value) / 60000);
    }
    else if(second.value == 'hour'){
        result.textContent = (Number(convert.value) / 3.6e+6);
    }
    else if(second.value == 'day'){
        result.textContent = (Number(convert.value) / 8.64e+7);
    }
    else if(second.value == 'week'){
        result.textContent = (Number(convert.value) / 6.048e+8);
    }
}
function convertSeconds(){
    if(second.value == 'millisecond'){
        result.textContent = (Number(convert.value) * 1000);
    }
    else if(second.value == 'minute'){
        result.textContent = (Number(convert.value) / 60);
    }
    else if(second.value == 'hour'){
        result.textContent = (Number(convert.value) / 3600);
    }
    else if(second.value == 'day'){
        result.textContent = (Number(convert.value) / 86400);
    }
    else if(second.value == 'week'){
        result.textContent = (Number(convert.value) / 604800);
    }
}
function convertMinutes(){
    if(second.value == 'millisecond'){
        result.textContent = (Number(convert.value) * 60000);
    }
    else if(second.value == 'second'){
        result.textContent = (Number(convert.value) * 60);
    }
    else if(second.value == 'hour'){
        result.textContent = (Number(convert.value) / 60);
    }
    else if(second.value == 'day'){
        result.textContent = (Number(convert.value) / 1440);
    }
    else if(second.value == 'week'){
        result.textContent = (Number(convert.value) / 10080);
    }
    
}
function convertHours(){
    if(second.value == 'millisecond'){
        result.textContent = (Number(convert.value) * 3.6e+6);
    }
    else if(second.value == 'second'){
        result.textContent = (Number(convert.value) * 3600);
    }
    else if(second.value == 'minute'){
        result.textContent = (Number(convert.value) * 60);
    }
    else if(second.value == 'day'){
        result.textContent = (Number(convert.value) / 24);
    }
    else if(second.value == 'week'){
        result.textContent = (Number(convert.value) / 168);
    }
}
function convertDays(){
    if(second.value == 'millisecond'){
        result.textContent = (Number(convert.value) * 8.64e+7);
    }
    else if(second.value == 'second'){
        result.textContent = (Number(convert.value) * 86400);
    }
    else if(second.value == 'minute'){
        result.textContent = (Number(convert.value) * 1440);
    }
    else if(second.value == 'hour'){
        result.textContent = (Number(convert.value) * 24);
    }
    else if(second.value == 'week'){
        result.textContent = (Number(convert.value) / 7);
    }
}
function convertWeeks(){
    if(second.value == 'millisecond'){
        result.textContent = (Number(convert.value) * 6.048e+8);
    }
    else if(second.value == 'second'){
        result.textContent = (Number(convert.value) * 604800);
    }
    else if(second.value == 'minute'){
        result.textContent = (Number(convert.value) * 10080);
    }
    else if(second.value == 'hour'){
        result.textContent = (Number(convert.value) * 168);
    }
    else if(second.value == 'day'){
        result.textContent = (Number(convert.value) * 7);
    }
    
}

