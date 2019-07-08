"use strict";
exports.__esModule = true;
var csv = require("csv-parser");
var fs = require("fs");
var config = require("./config");
var results = [];
var outputFile = "InvalidObjects.txt";
fs.createReadStream("Users.csv")
    .pipe(csv({
    separator: ";"
}))
    .on("data", function (data) {
    var errors = [];
    config.csv.forEach(function (row) {
        row.validators.forEach(function (validator) {
            validator.validate(data[row.name]).forEach(function (error) {
                errors.push("[" + row.name + "] " + error);
            });
        });
    });
    if (errors.length === 0) {
        results.push(data);
    }
    else {
        fs.appendFileSync(outputFile, "\n" + JSON.stringify(data) + "\n");
        errors.forEach(function (error) {
            fs.appendFileSync(outputFile, error + "\n");
            console.log(JSON.stringify(data) + "\n", error + "\n");
        });
    }
})
    .on("end", function () {
    console.log(results);
});
