/* Digitale Uhr */

setInterval(logTime, 1000);

const sec = document.querySelector(".sec");
const min = document.querySelector(".min");
const h = document.querySelector(".h");

function logTime() {
  console.log(new Date());
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const second = now.getSeconds();

  h.innerText = hours + " : ";
  min.innerText = " " + minutes + " : ";
  sec.innerText = " " + second;
}

/* Analoge Uhr */
/* Konstante für jeden (Stunde, Minute, Sekunde)  zeiger */
const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

/* new Date() erzeugt eine Instanz der Date-Klasse, von der wir alle möglichen
 Informationen wie das aktuelle Datum, Stunden, Minuten, Sekunden usw. erhalten können. */

function setDate() {
  const now = new Date();
  /* Ich habe in 'secondsDegrees' gespeichert, wie sich der Sekundenzeiger drehen wird.
    Dann benutze ich rotate(${secondsDegrees}deg), um den Zeiger zu drehen.
    Ich habe durch 60 geteilt, weil 1 Minute 60 Sekunden entspricht.
    Ich habe mit 360 multipliziert, weil ein Kreis aus 360 Grad besteht. */

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  /* Ich habe in 'minsDegrees' gespeichert, wie der Minutenzeiger gedreht werden soll.
Dann userotate(${minsDegrees}deg) um den Zeiger zu drehen.
Ich habe durch 60 geteilt, weil 1 Stunde gleich 60 Minuten ist.
Zweite Zeigerposition mit Minuten hinzugefügt. Denn der Minutenzeiger steht je 
nach Sekunde an der richtigen Stelle.*/

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  /* Stunden genau wie Minuten */

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
