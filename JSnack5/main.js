//L'utente dice un numero N e stampo il cubo di tot numeri fino ad N

var numeriUtente = parseInt(prompt("Calcolo dei cubi fino al numero:"))
if (isNaN(numeriUtente) == true) {
    console.log("non hai inserito un numero intero positivo!");
} else {
    for (var i = 1; i <= numeriUtente; i++) {
        console.log(i*i*i);
    }
}
