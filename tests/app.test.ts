import { Num2Words, CoverNumber } from "../app";

describe("Application Tests", () => {

    it("should return the number less than 10 in words ", () => {
        expect(Num2Words(9)).toEqual("nine");
        return
    });

    it("should return the number more than 19 and less than 100 in words ", () => {
        expect(Num2Words(45)).toEqual("forty five");
        return
    });

    it("should return the number more than 100 in words ", () => {
        expect(Num2Words(120)).toEqual("one hundred and twenty");
        return
    });

    it("should return the number more than 1000 in words ", () => {
        expect(Num2Words(1200)).toEqual("one thousand two hundred");
        return
    });

    it("should return the number more than 10000 in words ", () => {
        expect(Num2Words(12000)).toEqual("twelve thousand");
        return
    });

    it("should return prompt to enter a number ", () => {
        expect(CoverNumber('y')).toEqual(console.log("Enter any number: "));
        return
    });

});