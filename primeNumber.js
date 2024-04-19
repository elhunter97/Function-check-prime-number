function isPrime(number){
    for (let i = 2; i < Math.sqrt(number); i++) {
        if(number % i === 0){
            return 0;
        }
    }
    return number>1;
}

let number = +prompt('Enter number');
if(isPrime(number)){
    document.write(number + ' is prime');
} else document.write(number + ' is not prime');
