// Stampare numeri da 1 a 100
var numeri = []; 
var fizz = "fizz";
var buzz;
var fizzabuzz;

for (var n=1; n<=100; n++){
    numeri.push(n);
}

for(var i = 0; i < numeri.length; i++) {
    console.log(numeri[i]);
    if (numeri[i] %3 == 0) {
        numeri[i] = fizz;
        console.log(numeri[i]);
    }
}

// per i multipli di 3 stampare fizz, per i multipli di 5 stmpare buzz, per im ultipli di entrambi stampare fizzbuzz