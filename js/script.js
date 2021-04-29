// Stampare numeri da 1 a 100
var numeri = []; 
var fizz = "Fizz";
var buzz = "Buzz";
var fizzbuzz = "FizzBuzz";

for (var n=1; n<=100; n++){
    numeri.push(n);
}

for(var i = 0; i < numeri.length; i++) {
    console.log(numeri[i]);
    if (numeri[i] %3 == 0){
        numeri[i] = fizz;
        console.log(numeri[i]);
    }else if (numeri[i] %5 == 0){
        numeri[i] = buzz;
        console.log(numeri[i]);
    }else if  ((numeri[i] %3 == 0) && (numeri[i] %5 == 0)) {
        numeri[i] = fizzbuzz;
        console.log(numeri[i]); 
    }
}  

