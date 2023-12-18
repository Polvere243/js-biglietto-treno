// chiedere all'utente la distanza che vuole percorrere
const distanceToGO = prompt("Inserisci la distanza che vuoi percorrere");
// chiedere all'utente la sua età
const passengerAge = prompt("Inserisci la tua età");
// Calcolare il prezzo del biglietto moltiplicando la distanza per 0.21
const minPrice = 0.21;
console.log(minPrice);
// Calcolare il prezzo in base alla distanza da percorrere
let pricePerDistance = distanceToGO * minPrice;
console.log(pricePerDistance);