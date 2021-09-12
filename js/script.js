let date = new Date();
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getHours()<12);

if (date.getDay() == 1){
    document.getElementById("monday").classList.add("schedule__monday_active")
}
if (date.getDay() == 2){
    document.getElementById("tuesday").classList.add("schedule__tuesday_active")
}
if (date.getDay() == 3){
    document.getElementById("wednesday").classList.add("schedule__wednesday_active")
}
if (date.getDay() == 4){
    document.getElementById("thursday").classList.add("schedule__thursday_active")
}
if (date.getDay() == 5){
    document.getElementById("friday").classList.add("schedule__friday_active")
}
if (date.getDay() == 6){
    document.getElementById("saturday").classList.add("schedule__saturday_active")
}
if (date.getDay() == 0){
    document.getElementById("sunday").classList.add("schedule__sunday_active")
}

if (date.getHours() >= 6 && date.getHours() <= 9){
    document.getElementById("sun_1").classList.add("schedule__lession_active")
}
if (date.getHours() >= 9 && date.getHours() <= 11){
    document.getElementById("sun_2").classList.add("schedule__lession_active")
}
if (date.getHours() >= 11 && date.getHours() <= 13){
    document.getElementById("sun_3").classList.add("schedule__lession_active")
}
if (date.getHours() >= 13 && date.getHours() <= 15){
    document.getElementById("sun_4").classList.add("schedule__lession_active")
}




