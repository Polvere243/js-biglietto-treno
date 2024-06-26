// chiedere all'utente la distanza che vuole percorrere
const distanceToGo = parseInt(prompt("Inserisci la distanza che vuoi percorrere"));
// chiedere all'utente la sua età
const passengerAge = parseInt(prompt("Inserisci la tua età", "30"));

if (isNaN(distanceToGo) || isNaN(passengerAge) || passengerAge < 0 || distanceToGo < 0) {
    alert("Devi inserire dei valori numerici")

} else {
    // Calcolare il prezzo del biglietto moltiplicando la distanza per 0.21
    const minPrice = 0.21;
    console.log(minPrice);
    // Calcolare il prezzo in base alla distanza da percorrere
    let pricePerDistance = (distanceToGo * minPrice).toFixed(2);
    console.log(pricePerDistance);
    // Aggiungere lo sconto del 20% per i minori di vent'anni
    const youngAge = 20;

    const oldAge = 60;

    let discount;

    if (passengerAge < youngAge) {
        discount = ((pricePerDistance / 100) * 20).toFixed(2);
    } else if (passengerAge > oldAge) {
        discount = ((pricePerDistance / 100) * 40).toFixed(2);
    } else if (passengerAge > youngAge && passengerAge < oldAge) {
        discount = 0
    }

    console.log(discount);
}
