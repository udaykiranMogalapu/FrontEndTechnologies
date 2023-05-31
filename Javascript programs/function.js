function greet(name) {
    return "hello" + name;
}
var wish = greet("uday");
console.log(wish);
var greet2 = function (name) {
    return ("heeeelo" + name);
};
console.log(greet2("uday"));
var greet3 = function (name) {
    return ("pora  " + name);
};
console.log(greet3("bogada"));
function log(message, userID) {
    var time = new Date().toLocalTimeString();
    console.log(time, message, userID); // 'not signed in');
}
console.log('page loaded');
// "this" keyword
var car = {
    registrationNumber: 'ap12sh1233',
    brand: "toyota",
    display: function () { console.log(this.registrationNumber + " " + this.brand); }
};
car.display();
