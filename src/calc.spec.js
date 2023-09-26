const calc = require("./calc");

describe("Calc unit tests", () => {

    it("Should be 4 when sum 1 and 3", () =>{
        const result = calc.sum(1,3)
        expect(result).toBe(4)
    });
    
    it("Should be 4 when multiple of 2 of 2", () =>{
        const result = calc.multi(2,2)
        expect(result).toBe(4)
    });

    it("Should be 4 when we subtract 2 from 6", () =>{
        const result = calc.subtraction(6,2)
        expect(result).toBe(4)
    });

    it("Should be 4 when divide 8 by 2", () =>{
        const result = calc.subtraction(6,2)
        expect(result).toBe(4)
    });


    it("Should be Error when value of operation is invalid", () => {
        expect(() => { calc.div(2,0); }).toThrow(`Invalid Operation`);
    })

    it("Should be Error when value of operation is invalid", () => {
        expect(() => { calc.div("bla",100); }).toThrow(`Invalid Operation`);
    })
})
