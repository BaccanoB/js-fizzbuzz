// Stampare numeri da 1 a 100

// var numeri = []; 

// for (var n=1; n<=100; n++){
//     numeri.push(n);
// }

// for(var i = 0; i <= 100; i++) {
//     if ((numeri[i] %3 == 0) && (numeri[i] %5 == 0)) {
//         numeri[i] = "Fizzbuzz";
//         console.log(numeri[i]);
//     }else if (numeri[i] %5 == 0){
//         numeri[i] = "Buzz";
//         console.log(numeri[i]);
//     }else if (numeri[i] %3 == 0){
//         numeri[i] = "Fizz";
//         console.log(numeri[i]);
//     }else {
//         console.log(numeri[i]);
//     }
// }  

for(var i = 0; i <= 100; i++) {
    if ((i%3 == 0) && (i %5 == 0)) {
        console.log("Fizzbuzz");
    }else if (i%5 == 0){
        console.log("Buzz");
    }else if (i%3 == 0){
        console.log("Fizz");
    } else {
        console.log(i);
    }
}


