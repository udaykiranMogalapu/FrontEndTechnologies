var arr = ["uday", "kiran", "cse"];
for (var i_1 = 0; i_1 < arr.length; i_1++) {
    console.log(arr[i_1]);
}
console.log("\n");
console.log("iterating using in");
var i;
for (i in arr) {
    console.log(arr[i]);
}
