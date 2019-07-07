"use strict";
exports.__esModule = true;
function checkLength(min, max) {
    return new /** @class */ (function () {
        function class_1() {
        }
        class_1.prototype.validate = function (value) {
            return ((value.length >= min) && (value.length <= max)) ? [] : ["Invalid length for '" + value + "'."];
        };
        return class_1;
    }());
}
;
var required = new /** @class */ (function () {
    function class_2() {
    }
    class_2.prototype.validate = function (value) {
        return (value !== "") ? [] : ["Required field is missed."];
    };
    return class_2;
}());
var dateValidator = new /** @class */ (function () {
    function class_3() {
    }
    class_3.prototype.validate = function (value) {
        var probe = new Date(value);
        var now = new Date();
        var reg = /^(\d{2})([.])(\d{2})\2(\d{4})$/;
        return (reg.test(value) !== false && probe <= now) ? [] : ["Invalid format for '" + value + "'."];
    };
    return class_3;
}());
var phoneValidator = new /** @class */ (function () {
    function class_4() {
    }
    class_4.prototype.validate = function (value) {
        var reg = /^\(?([0-9]{3})\)?[ ]?([0-9]{2})[ ]?([0-9]{7})$/;
        return (reg.test(value) !== false) ? [] : ["Invalid length for '" + value + "'."];
    };
    return class_4;
}());
var mailValidator = new /** @class */ (function () {
    function class_5() {
    }
    class_5.prototype.validate = function (value) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return (reg.test(value) !== false) ? [] : ["Invalid format for '" + value + "'."];
    };
    return class_5;
}());
var nameValidator = new /** @class */ (function () {
    function class_6() {
    }
    class_6.prototype.validate = function (value) {
        var reg = /^[а-яА-ЯёЁa-zA-Z]{2,20}$/;
        return (reg.test(value) !== false) ? [] : ["Invalid format for '" + value + "'."];
    };
    return class_6;
}());
exports.csv = [
    {
        name: "ID",
        type: "ID",
        validators: [
            checkLength(1, 4),
            required
        ]
    },
    {
        name: "Name",
        type: "string",
        validators: [
            checkLength(1, 18),
            nameValidator
        ]
    },
    {
        name: "Surname",
        type: "string",
        validators: [
            checkLength(1, 18),
            nameValidator
        ]
    },
    {
        name: "Mail",
        type: "Mail",
        validators: [
            checkLength(6, 18),
            mailValidator
        ]
    },
    {
        name: "Date of registration",
        type: "date",
        validators: [
            dateValidator
        ]
    },
    {
        name: "Phone",
        type: "Phone",
        validators: [
            phoneValidator
        ]
    }
];
