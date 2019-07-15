"use strict";
exports.__esModule = true;
var expect = require("chai").expect;
var validators = require("../config");
require("mocha");
describe("field test for checkLength", function () {
    it("should return an empty array", function () {
        expect(validators.checkLength(1, 4).validate('1111').length).to.eql(0);
    });
    it("should return an empty array", function () {
        expect(validators.checkLength(1, 4).validate('1').length).to.eql(0);
    });
    it("should return not empty array", function () {
        expect(validators.checkLength(1, 4).validate('').length).to.eql(1);
    });
    it("should return not empty array", function () {
        expect(validators.checkLength(1, 4).validate('11111').length).to.eql(1);
    });
});
describe('field test for checkFormat', function () {
    it("should return an empty array", function () {
        expect(validators.checkFormat(/^[а-яА-ЯёЁa-zA-Z]{2,20}$/).validate("Егор").length).to.eql(0);
    });
    it("should return not empty array", function () {
        expect(validators.checkFormat(/^[а-яА-ЯёЁa-zA-Z]{2,20}$/).validate("Егорка32").length).to.eql(1);
    });
    it("should return not empty array", function () {
        expect(validators.checkFormat(/^[а-яА-ЯёЁa-zA-Z]{2,20}$/).validate("").length).to.eql(1);
    });
    it("should return an empty array", function () {
        expect(validators.checkFormat(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/).validate("beliachevskaya@tut.by").length).to.eql(0);
    });
    it("should return not empty array", function () {
        expect(validators.checkFormat(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/).validate("mmm4tut.by").length).to.eql(1);
    });
    it("should return an empty array", function () {
        expect(validators.checkFormat(/^\(?([0-9]{3})\)?[ ]?([0-9]{2})[ ]?([0-9]{7})$/).validate("375 29 6741324").length).to.eql(0);
    });
    it("should return not empty array", function () {
        expect(validators.checkFormat(/^\(?([0-9]{3})\)?[ ]?([0-9]{2})[ ]?([0-9]{7})$/).validate("+375 29 6741324").length).to.eql(1);
    });
});
describe('field test for required', function () {
    it("should return an empty array", function () {
        expect(validators.required.validate('1111').length).to.eql(0);
    });
    it("should return not empty array", function () {
        expect(validators.required.validate('').length).to.eql(1);
    });
});
describe('field test for dateValidator', function () {
    it("should return an empty array", function () {
        expect(validators.dateValidator.validate('03.03.2019').length).to.eql(0);
    });
    it("should return not empty array", function () {
        expect(validators.dateValidator.validate('12.12.2019').length).to.eql(1);
    });
});
