import * as Main from "./main";

describe("Edabit Challenges", () => {
    /*     test("", () => {
    
        });
        test("", () => {
    
        });
        test("", () => {
    
        });
        test("", () => {
    
        });
        test("", () => {
    
        });
        test("", () => {
    
        });
        test("", () => {
    
        });
        test("", () => {
    
        });
        test("", () => {
    
        });
        test("", () => {
    
        });
        test("", () => {
    
        });
        test("", () => {
    
        });
        test("", () => {
    
        });
        test("", () => {
    
        });*/
    test("addEnding", () => {
        expect(Main.addEnding(["clever", "meek", "hurried", "nice"], "ly")).toEqual(["cleverly", "meekly", "hurriedly", "nicely"]);
        expect(Main.addEnding(["new", "pander", "scoop"], "er")).toEqual(["newer", "panderer", "scooper"]);
        expect(Main.addEnding(["bend", "sharpen", "mean"], "ing")).toEqual(["bending", "sharpening", "meaning"]);
    });
    test("reverse boolean", () => {
        expect(Main.reverseB(true)).toBeFalsy();
        expect(Main.reverseB(false)).toBeTruthy();
        expect(Main.reverseB(0)).toEqual("boolean expected");
        expect(Main.reverseB(null)).toEqual("boolean expected");
    });
    test("multiplyByLength", () => {
        expect(Main.multiplyByLength([2, 3, 1, 0])).toEqual([8, 12, 4, 0]);
        expect(Main.multiplyByLength([4, 1, 1])).toEqual([12, 3, 3]);
        expect(Main.multiplyByLength([1, 0, 3, 3, 7, 2, 1])).toEqual([7, 0, 21, 21, 49, 14, 7]);
        expect(Main.multiplyByLength([0])).toEqual([0]);
    });
    test("pianoKeys", () => {
        expect(Main.pianoKeys(1)).toEqual(["A", "0", "White", "27.50"]);
        expect(Main.pianoKeys(15)).toEqual(["B", "1", "White", "61.74"]);
        expect(Main.pianoKeys(0)).toEqual(false);
        expect(Main.pianoKeys(17)).toEqual(["C♯/D♭", "2", "Black", "69.30"]);
        expect(Main.pianoKeys(88)).toEqual(["C", "8", "White", "4186.01"]);
        expect(Main.pianoKeys(100)).toEqual(false);
        expect(Main.pianoKeys(60)).toEqual(["G♯/A♭", "5", "Black", "830.61"]);
        expect(Main.pianoKeys(4)).toEqual(["C", "1", "White", "32.70"]);
        expect(Main.pianoKeys(71)).toEqual(["G", "6", "White", "1567.98"]);
        expect(Main.pianoKeys(16)).toEqual(["C", "2", "White", "65.41"]);
        expect(Main.pianoKeys(29)).toEqual(["C♯/D♭", "3", "Black", "138.59"]);
    });
});