let date = new Date();
console.log(date.getDay());
console.log(date.getTime());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getHours()>12);

//script dnei
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


//script hours

let xyi;

if (date.getHours() >= 6 && (date.getHours() <= 9 && date.getMinutes()<30)){
    xyi = "sun_1";
    document.getElementById("sun_1").classList.add("schedule__lession_active")
}
if ((date.getHours() >= 9 && date.getMinutes()>30) && date.getHours() <= 11){
    xyi = "sun_2"
    document.getElementById("sun_2").classList.add("schedule__lession_active")
}
if (date.getHours() >= 11 && date.getHours() <= 13){
    xyi= "sun_3"
    document.getElementById("sun_3").classList.add("schedule__lession_active")
}
if (date.getHours() >= 13 && date.getHours() <= 15){
    xyi = "sun_4"
    document.getElementById("sun_4").classList.add("schedule__lession_active")
}

if (date.getHours() >= 6 && (date.getHours() <= 9 && date.getMinutes()<30)){
  xyi = "mon_1";
  document.getElementById("mon_1").classList.add("schedule__lession_active")
}
if ((date.getHours() >= 9 && date.getMinutes()>30) && date.getHours() <= 11){
  xyi = "mon_2"
  document.getElementById("mon_2").classList.add("schedule__lession_active")
}
if (date.getHours() >= 11 && date.getHours() <= 13){
  xyi= "mon_3"
  document.getElementById("mon_3").classList.add("schedule__lession_active")
}
if (date.getHours() >= 13 && date.getHours() <= 15){
  xyi = "mon_4"
  document.getElementById("mon_4").classList.add("schedule__lession_active")
}
if (date.getHours() >= 6 && (date.getHours() <= 9 && date.getMinutes()<30)){
  xyi = "tue_1";
  document.getElementById("tue_1").classList.add("schedule__lession_active")
}
if ((date.getHours() >= 9 && date.getMinutes()>30) && date.getHours() <= 11){
  xyi = "tue_2"
  document.getElementById("tue_2").classList.add("schedule__lession_active")
}
if (date.getHours() >= 11 && date.getHours() <= 13){
  xyi= "tue_3"
  document.getElementById("tue_3").classList.add("schedule__lession_active")
}

if (date.getHours() >= 6 && (date.getHours() <= 9 && date.getMinutes()<30)){
  xyi = "wed_1";
  document.getElementById("wed_1").classList.add("schedule__lession_active")
}
if ((date.getHours() >= 9 && date.getMinutes()>30) && date.getHours() <= 11){
  xyi = "wed_2"
  document.getElementById("wed_2").classList.add("schedule__lession_active")
}
if (date.getHours() >= 11 && date.getHours() <= 13){
  xyi= "wed_3"
  document.getElementById("wed_3").classList.add("schedule__lession_active")
}
if (date.getHours() >= 13 && date.getHours() <= 15){
  xyi = "wed_4"
  document.getElementById("wed_4").classList.add("schedule__lession_active")
}
if (date.getHours() >= 6 && (date.getHours() <= 9 && date.getMinutes()<30)){
  xyi = "thu_1";
  document.getElementById("thu_1").classList.add("schedule__lession_active")
}
if ((date.getHours() >= 9 && date.getMinutes()>30) && date.getHours() <= 11){
  xyi = "thu_2"
  document.getElementById("thu_2").classList.add("schedule__lession_active")
}
if (date.getHours() >= 11 && date.getHours() <= 13){
  xyi= "thu_3"
  document.getElementById("thu_3").classList.add("schedule__lession_active")
}
if (date.getHours() >= 6 && (date.getHours() <= 9 && date.getMinutes()<30)){
  xyi = "fri_1";
  document.getElementById("fri_1").classList.add("schedule__lession_active")
}
if ((date.getHours() >= 9 && date.getMinutes()>30) && date.getHours() <= 11){
  xyi = "fri_2"
  document.getElementById("fri_2").classList.add("schedule__lession_active")
}
if (date.getHours() >= 11 && date.getHours() <= 13){
  xyi= "fri_3"
  document.getElementById("fri_3").classList.add("schedule__lession_active")
}
if (date.getHours() >= 13 && date.getHours() <= 15){
  xyi = "fri_4"
  document.getElementById("fri_4").classList.add("schedule__lession_active")
}
if (date.getHours() >= 6 && (date.getHours() <= 9 && date.getMinutes()<30)){
  xyi = "sat_1";
  document.getElementById("sat_1").classList.add("schedule__lession_active")
}
if ((date.getHours() >= 9 && date.getMinutes()>30) && date.getHours() <= 11){
  xyi = "sat_2"
  document.getElementById("sat_2").classList.add("schedule__lession_active")
}
if (date.getHours() >= 11 && date.getHours() <= 13){
  xyi= "sat_3"
  document.getElementById("sat_3").classList.add("schedule__lession_active")
}
if (date.getHours() >= 13 && date.getHours() <= 15){
  xyi = "sat_4"
  document.getElementById("sat_4").classList.add("schedule__lession_active")
}


//script merwanie

setInterval(function(){
  document.getElementById(xyi).classList.add("schedule__lession_active")
}, 1000)
setInterval(function(){
  document.getElementById(xyi).classList.remove("schedule__lession_active")
}, 2000)


//btn script

$('#mon_btn').on('click', function(){
  document.getElementById("monday").classList.add('schedule__monday_active')
  document.getElementById("tuesday").classList.remove('schedule__tuesday_active')
  document.getElementById("wednesday").classList.remove('schedule__wednesday_active')
  document.getElementById("thursday").classList.remove('schedule__thursday_active')
  document.getElementById("friday").classList.remove('schedule__friday_active')
  document.getElementById("saturday").classList.remove('schedule__saturday_active')
  document.getElementById("sunday").classList.remove('schedule__sunday_active')
});
$('#tue_btn').on('click', function(){
  document.getElementById("monday").classList.remove('schedule__monday_active')
  document.getElementById("tuesday").classList.add('schedule__tuesday_active')
  document.getElementById("wednesday").classList.remove('schedule__wednesday_active')
  document.getElementById("thursday").classList.remove('schedule__thursday_active')
  document.getElementById("friday").classList.remove('schedule__friday_active')
  document.getElementById("saturday").classList.remove('schedule__saturday_active')
  document.getElementById("sunday").classList.remove('schedule__sunday_active')
});
$('#wed_btn').on('click', function(){
  document.getElementById("monday").classList.remove('schedule__monday_active')
  document.getElementById("tuesday").classList.remove('schedule__tuesday_active')
  document.getElementById("wednesday").classList.add('schedule__wednesday_active')
  document.getElementById("thursday").classList.remove('schedule__thursday_active')
  document.getElementById("friday").classList.remove('schedule__friday_active')
  document.getElementById("saturday").classList.remove('schedule__saturday_active')
  document.getElementById("sunday").classList.remove('schedule__sunday_active')
});
$('#thu_btn').on('click', function(){
  document.getElementById("monday").classList.remove('schedule__monday_active')
  document.getElementById("tuesday").classList.remove('schedule__tuesday_active')
  document.getElementById("wednesday").classList.remove('schedule__wednesday_active')
  document.getElementById("thursday").classList.add('schedule__thursday_active')
  document.getElementById("friday").classList.remove('schedule__friday_active')
  document.getElementById("saturday").classList.remove('schedule__saturday_active')
  document.getElementById("sunday").classList.remove('schedule__sunday_active')
});
$('#fri_btn').on('click', function(){
  document.getElementById("monday").classList.remove('schedule__monday_active')
  document.getElementById("tuesday").classList.remove('schedule__tuesday_active')
  document.getElementById("wednesday").classList.remove('schedule__wednesday_active')
  document.getElementById("thursday").classList.remove('schedule__thursday_active')
  document.getElementById("friday").classList.add('schedule__friday_active')
  document.getElementById("saturday").classList.remove('schedule__saturday_active')
  document.getElementById("sunday").classList.remove('schedule__sunday_active')
});
$('#sat_btn').on('click', function(){
  document.getElementById("monday").classList.remove('schedule__monday_active')
  document.getElementById("tuesday").classList.remove('schedule__tuesday_active')
  document.getElementById("wednesday").classList.remove('schedule__wednesday_active')
  document.getElementById("thursday").classList.remove('schedule__thursday_active')
  document.getElementById("friday").classList.remove('schedule__friday_active')
  document.getElementById("saturday").classList.add('schedule__saturday_active')
  document.getElementById("sunday").classList.remove('schedule__sunday_active')
});
$('#sun_btn').on('click', function(){
  document.getElementById("monday").classList.remove('schedule__monday_active')
  document.getElementById("tuesday").classList.remove('schedule__tuesday_active')
  document.getElementById("wednesday").classList.remove('schedule__wednesday_active')
  document.getElementById("thursday").classList.remove('schedule__thursday_active')
  document.getElementById("friday").classList.remove('schedule__friday_active')
  document.getElementById("saturday").classList.remove('schedule__saturday_active')
  document.getElementById("sunday").classList.add('schedule__sunday_active')
});











//script sperma
let max_particles = 500;
let particles = [];
let frequency = 50;
let init_num = max_particles;
let max_time = frequency * max_particles;
let time_to_recreate = false;

// Enable repopolate
setTimeout(function () {
  time_to_recreate = true;
}.bind(this), max_time);

// Popolate particles
popolate(max_particles);

var tela = document.createElement('canvas');
tela.width = $(window).width();
tela.height = $(window).height();
$("body").append(tela);

var canvas = tela.getContext('2d');

class Particle {
  constructor(canvas) {
    let random = Math.random();
    this.progress = 0;
    this.canvas = canvas;
    this.center = {
      x: $(window).width() / 2,
      y: $(window).height() / 2 };

    this.point_of_attraction = {
      x: $(window).width() / 2,
      y: $(window).height() / 2 };




    if (Math.random() > 0.5) {
      this.x = $(window).width() * Math.random();
      this.y = Math.random() > 0.5 ? -Math.random() - 100 : $(window).height() + Math.random() + 100;
    } else {
      this.x = Math.random() > 0.5 ? -Math.random() - 100 : $(window).width() + Math.random() + 100;
      this.y = $(window).height() * Math.random();

    }

    this.s = Math.random() * 2;
    this.a = 0;
    this.w = $(window).width();
    this.h = $(window).height();
    this.radius = random > .2 ? Math.random() * 1 : Math.random() * 3;
    this.color = random > .2 ? "#694FB9" : "#9B0127";
    this.radius = random > .8 ? Math.random() * 2.2 : this.radius;
    this.color = random > .8 ? "#3CFBFF" : this.color;
  }

  calculateDistance(v1, v2) {
    let x = Math.abs(v1.x - v2.x);
    let y = Math.abs(v1.y - v2.y);
    return Math.sqrt(x * x + y * y);
  }

  render() {
    this.canvas.beginPath();
    this.canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.canvas.lineWidth = 2;
    this.canvas.fillStyle = this.color;
    this.canvas.fill();
    this.canvas.closePath();
  }

  move() {

    let p1 = {
      x: this.x,
      y: this.y };


    let distance = this.calculateDistance(p1, this.point_of_attraction);
    let force = Math.max(100, 1 + distance);

    let attr_x = (this.point_of_attraction.x - this.x) / force;
    let attr_y = (this.point_of_attraction.y - this.y) / force;

    this.x += Math.cos(this.a) * this.s + attr_x;
    this.y += Math.sin(this.a) * this.s + attr_y;
    this.a += Math.random() > 0.5 ? Math.random() * 0.9 - 0.45 : Math.random() * 0.4 - 0.2;

    if (distance < 30 + Math.random() * 100) {
      return false;
    }

    this.render();
    this.progress++;
    return true;
  }}


function popolate(num) {
  for (var i = 0; i < num; i++) {
    setTimeout(
    function (x) {
      return function () {
        // Add particle
        particles.push(new Particle(canvas));
      };
    }(i),
    frequency * i);
  }
  return particles.length;
}

function createSphera() {
  let radius = 180;
  let center = {
    x: $(window).width() / 2,
    y: $(window).height() / 2 };

}

function clear() {
  canvas.globalAlpha = 0.08;
  canvas.fillStyle = '#000';
  canvas.fillRect(0, 0, tela.width, tela.height);
  canvas.globalAlpha = 1;
}

/*
 * Function to update particles in canvas
 */
function update() {
  particles = particles.filter(function (p) {return p.move();});
  // Recreate particles
  if (time_to_recreate) {
    if (particles.length < init_num) {popolate(1);console.log("Ricreo");}
  }
  clear();
  requestAnimationFrame(update.bind(this));
}
update();

