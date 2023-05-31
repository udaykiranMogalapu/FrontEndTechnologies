var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person(sname) {
        this.name = sname;
    }
    person.prototype.speak = function () {
        console.log(this.name + " is speaking!!!");
    };
    return person;
}());
//derived class
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(rollnumber, name1) {
        var _this = _super.call(this, name1) || this;
        _this.rollnumber = rollnumber;
        return _this;
    }
    student.prototype.display = function () {
        console.log("student name:" + this.name);
        console.log("student rollnumber:" + this.rollnumber);
    };
    return student;
}(person));
var s1 = new student(1, "uday");
var s2 = new student(2, "kiran");
console.log("student 1 information");
s1.speak();
s1.display();
