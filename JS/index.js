console.log("Hallo, console?");

/*De formule om een willekeurig getal te verkrijgen*/
function willekeurigGetal(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let video1 = "https://www.youtube.com/watch?v=NX5xIRUcPyI";

/*Functie om een waarschuwing te tonen wanneer de pagina laadt*/
let body = document.getElementsByTagName("body")[0];
body.onload = function(){
  alert("!BELANGRIJK! Merk je als je verdergaat dat deze pagina niet goed werkt? Het helpt om hem dan te openen in Chrome.");
};
