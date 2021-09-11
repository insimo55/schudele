let date = new Date();
console.log(date.getDay());


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
    document.getElementById("sunday").classList.add("schedule__sunnday_active")
}