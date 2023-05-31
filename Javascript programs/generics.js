//simple syntax of generics
function identity(arg) {
    return arg;
}
var out1 = identity("my generic type function");
var out2 = identity(10);
console.log(out1);
console.log(out2);
function identity2(arg) {
    return arg;
}
var out3 = identity2(10);
console.log(out3);
function identity3(arg) {
    return arg;
}
var out4 = identity3("uday");
console.log(out4);
function identity4(args) {
    return args;
}
var out5 = identity4("uday kiran");
console.log(out5);
var out6 = identity4(12345);
console.log(out6);
var x = {
    name: string,
    id: number
};
var v = {
    name: "uday kiran mogalapu",
    id: 10
};
function owntype(id, name) {
    console.log(id, name);
}
var out7 = owntype(10, "pratap");
