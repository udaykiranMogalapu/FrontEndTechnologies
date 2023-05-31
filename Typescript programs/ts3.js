function checkPrime(cNumber) {
    for (var i = 2; i <= cNumber; i++) {
        if (cNumber % i == 0)
            return false;
    }
    return true;
}
var arr;
arr = [31, 6, 98, 43, 22];
var str;
str = ["love", "is", "injurious"];
var array = [1, 2, 3, 4];
var k;
for (var i = 0; i < 4; i++) {
    k = checkPrime(array[i]);
    if (k == false)
        console.log("not prime");
    else
        console.log("prime");
}
