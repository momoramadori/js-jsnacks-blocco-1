//Stampa le potenze di 2 fino a 1000
for (var i = 0; Math.pow(2,i) < 1000; i++) {
    console.log(Math.pow(2,i));
}


//Seconda modalità
for (var i = 2; i < 1000; i= i*2) {
    console.log(i);
}
