function checkPrime(cNumber) {
    for (var i = 2; i < cNumber; i++) {
        if (cNumber % i == 0)
            return false;
    }
    return true;
}
var arr;
arr = [31, 6, 98, 43, 22];
var str;
str = ["love", "is", "injurious"];
var array = [11, 12, 13, 14];
var k;
for (var i = 0; i < 4; i++) {
    k = checkPrime(array[i]);
    if (k == false)
        console.log(array[i] + " is not prime");
    else
        console.log(array[i] + " is a prime");
}
console.log("\n");
console.log("Using iterator over array");
arr.forEach(function (element) {
    var isPrime = checkPrime(element);
    if (isPrime)
        console.log("prime");
    else
        console.log("not a prime");
});
