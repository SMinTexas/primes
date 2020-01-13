function nthPrime(nth) {
    var p = [2],
        n = 3,
        div, i, limit, isPrime;
    while (p.length < nth) {
        div = 3, i = 1;
        limit = Math.sqrt(n) + 1;
        isPrime = true;
        while (div < limit) {
            if (n % div === 0) {
                isPrime = false;
                div = limit;
            } else div = p[i++] || div + 2;
        }
        if (isPrime) p.push(n);
        n += 2;
    }
    return p[p.length - 1]
}

var a = nthPrime(2);
var b = nthPrime(3);
var c = nthPrime(4);
var d = nthPrime(5);
var e = nthPrime(10001);
console.log('2nd prime: ', a);
console.log('3rd prime: ', b);
console.log('4th prime: ', c);
console.log('5th prime: ', d);
console.log('10001st prime: ', e);