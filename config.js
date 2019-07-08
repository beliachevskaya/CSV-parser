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
function checkFormat(reg) {
    return new /** @class */ (function () {
        function class_2() {
        }
        class_2.prototype.validate = function (value) {
            return (reg.test(value) !== false) ? [] : ["Invalid format for '" + value + "'."];
        };
        return class_2;
    }());
}
;
var required = new /** @class */ (function () {
    function class_3() {
    }
    class_3.prototype.validate = function (value) {
        return (value !== "") ? [] : ["Required field is missed."];
    };
    return class_3;
}());
var dateValidator = new /** @class */ (function () {
    function class_4() {
    }
    class_4.prototype.validate = function (value) {
        var probe = new Date(value);
        var now = new Date();
        var reg = /^(\d{2})([.])(\d{2})\2(\d{4})$/;
        return (reg.test(value) !== false && probe < now) ? [] : ["Invalid format for '" + value + "'."];
    };
    return class_4;
}());
;
;
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
            checkFormat(/^[а-яА-ЯёЁa-zA-Z]{2,20}$/)
        ]
    },
    {
        name: "Surname",
        type: "string",
        validators: [
            checkLength(1, 18),
            checkFormat(/^[а-яА-ЯёЁa-zA-Z]{2,20}$/)
        ]
    },
    {
        name: "Mail",
        type: "Mail",
        validators: [
            checkLength(6, 18),
            checkFormat(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)
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
            checkFormat(/^\(?([0-9]{3})\)?[ ]?([0-9]{2})[ ]?([0-9]{7})$/)
        ]
    }
];
