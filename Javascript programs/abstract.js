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
var animal = /** @class */ (function () {
    function animal(age) {
        this.age = age;
    }
    animal.prototype.feed = function (food, amount) {
        console.log('feeding ' + this.name + ' the ' + ' ' + amount + "kg of " + food);
    };
    return animal;
}());
var cat = /** @class */ (function (_super) {
    __extends(cat, _super);
    function cat(name, age) {
        var _this = _super.call(this, age) || this;
        _this.name = name;
        return _this;
    }
    return cat;
}(animal));
var CAT = new cat('cosmo', 8);
cat.feed("fish", 2);
