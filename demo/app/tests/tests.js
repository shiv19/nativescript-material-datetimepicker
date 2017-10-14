var MaterialDatetimepicker = require("nativescript-material-datetimepicker").MaterialDatetimepicker;
var materialDatetimepicker = new MaterialDatetimepicker();

describe("greet function", function() {
    it("exists", function() {
        expect(materialDatetimepicker.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(materialDatetimepicker.greet()).toEqual("Hello, NS");
    });
});