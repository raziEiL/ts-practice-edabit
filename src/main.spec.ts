import * as Main from "./main";

describe("Edabit Challenges", () => {
    test("isJS", () => {
        expect(Main.isJS("/users/user.jsx")).toBeTruthy();
        expect(Main.isJS("/users/user.js")).toBeTruthy();
        expect(Main.isJS("/users/user.ts")).toBeTruthy();
        expect(Main.isJS("/users/user.jsxx")).toBeFalsy();
        expect(Main.isJS("/users/user js")).toBeFalsy();
    });
    test("addition", () => {
        expect(Main.addition(2)).toBe(3);
        expect(Main.addition(-9)).toBe(-8);
    });
    test("getFirstValue", () => {
        expect(Main.getFirstValue([1, 2, 3])).toEqual([1, 1, 1]);
        expect(Main.getFirstValue([3, 2, 1])).toEqual([3, 3, 3]);
    });
    test("isFourLetters", () => {
        expect(Main.isFourLetters(["Ryan", "Kieran", "Jason", "Matt"])).toEqual(["Ryan", "Matt"]);
    });
    test("googlify", () => {
        expect(Main.googlify(0)).toBe("invalid");
        expect(Main.googlify(3)).toBe("Gooogle");
    });
    test("wordBuilder", () => {
        expect(Main.wordBuilder(["e", "t", "s", "t"], [1, 3, 2, 0])).toBe("test");
        expect(Main.wordBuilder(["b", "e", "t", "i", "d", "a"], [3, 0, 5, 4, 1, 2])).toBe("edabit");
    });
    test("reverse", () => {
        expect(Main.reverse("Think different.")).toBe(".tnereffid knihT");
    });
    test("Go", () => {
        expect(Main.Go(2)).toBe("--");
        expect(Main.Go(5)).toBe("-----");
    });
    test("countWords", () => {
        expect(Main.countWords("It's high noon")).toBe(3);
        expect(Main.countWords("Is this easy mode")).toBe(4);
        expect(Main.countWords("Just an example here move along")).toBe(6);
        expect(Main.countWords("How are you today?")).toBe(4);
    });
    test("countWordsB", () => {
        expect(Main.countWordsB("This is a test")).toBe(4);
        expect(Main.countWordsB("What an easy task, right")).toBe(5);
    });
    test("findLargestNum", () => {
        expect(Main.findLargestNum([4, 5, 1, 3])).toBe(5);
    });
    test("sevenBoom", () => {
        expect(Main.sevenBoom([1, 2, 3, 4, 5, 6, 7])).toBe("Boom!");
        expect(Main.sevenBoom([8, 6, 33, 100])).toBe("there is no 7 in the array");
    });
    test("firstLast", () => {
        expect(Main.firstLast([5, 10, 15, 20, 25])).toEqual([5, 25]);
        expect(Main.firstLast(["edabit", 13, null, false, true])).toEqual(["edabit", true]);
    });
    test("noOdds", () => {
        expect(Main.noOdds([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([2, 4, 6, 8]);
        expect(Main.noOdds([43, 65, 23, 89, 53, 9, 6])).toEqual([6]);
    });
    test("combinations", () => {
        expect(Main.combinations(52, 52)).toBe(1);
        expect(Main.combinations(5, 52)).toBe(2598960);
    });
    test("f (Factorial)", () => {
        expect(Main.f(5)).toBe(120);
        expect(Main.f(10)).toBe(3628800);
    });
    test("missingAngle", () => {
        expect(Main.missingAngle(27, 59)).toBe("obtuse");
        expect(Main.missingAngle(135, 11)).toBe("acute");
        expect(Main.missingAngle(45, 45)).toBe("right");
    });
    test("profit", () => {
        expect(Main.profit({
            costPrice: 32.67,
            sellPrice: 45.00,
            inventory: 1200
        })).toBe(14796);
        expect(Main.profit({
            costPrice: 225.89,
            sellPrice: 550.00,
            inventory: 100
        })).toBe(32411);
        expect(Main.profit({
            costPrice: 2.77,
            sellPrice: 7.95,
            inventory: 8500
        })).toBe(44030);
    });
    test("validColor RGB", () => {
        expect(Main.validColor("rgb(100%,100%,101%)")).toBeFalsy();
        expect(Main.validColor("rgb(0%,0,0)")).toBeTruthy();
        expect(Main.validColor("rgb(0,,0)")).toBeFalsy();
        expect(Main.validColor("rgb( 255, 256  ,255 )")).toBeFalsy();
        expect(Main.validColor("rgba(0,0,0,0.123456789)")).toBeTruthy();
    });
    test("additiveInverse", () => {
        expect(Main.additiveInverse([5, -7, 8, 3])).toEqual([-5, 7, -8, -3]);
        expect(Main.additiveInverse([1, 1, 1, 1, 1])).toEqual([-1, -1, -1, -1, -1]);
        expect(Main.additiveInverse([-5, -25, 35])).toEqual([5, 25, -35]);
    });
    test("unlucky13", () => {
        expect(Main.unlucky13([53, 182, 435, 591, 637])).toEqual([53, 435, 591]);
        expect(Main.unlucky13([24, 316, 393, 458, 1279])).toEqual([24, 316, 393, 458, 1279]);
        expect(Main.unlucky13([104, 351, 455, 806, 871])).toEqual([]);
    });
    test("addEnding", () => {
        expect(Main.addEnding(["clever", "meek", "hurried", "nice"], "ly")).toEqual(["cleverly", "meekly", "hurriedly", "nicely"]);
        expect(Main.addEnding(["new", "pander", "scoop"], "er")).toEqual(["newer", "panderer", "scooper"]);
        expect(Main.addEnding(["bend", "sharpen", "mean"], "ing")).toEqual(["bending", "sharpening", "meaning"]);
    });
    test("Employee class", () => {
        expect(new Main.Employee("John", "Smith").fullname).toBe("John Smith");
        expect(new Main.Employee("Mary", "Sue").email).toBe("mary.sue@company.com");
        expect(new Main.Employee("Antony", "Walker").firstname).toBe("Antony");
    });
    test("reverse boolean", () => {
        expect(Main.reverseB(true)).toBeFalsy();
        expect(Main.reverseB(false)).toBeTruthy();
        expect(Main.reverseB(0)).toBe("boolean expected");
        expect(Main.reverseB(null)).toBe("boolean expected");
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
    /*     test("", () => {
        expect().toEqual();
    });*/
    test("additivePersistence", () => {
        expect(Main.additivePersistence(5)).toBe(0);
        expect(Main.additivePersistence(27)).toBe(1);
        expect(Main.additivePersistence(58)).toBe(2);
        expect(Main.additivePersistence(5789)).toBe(3);
    });
    test("multiplicativePersistence", () => {
        expect(Main.multiplicativePersistence(7)).toBe(0);
        expect(Main.multiplicativePersistence(1234567890)).toBe(1);
        expect(Main.multiplicativePersistence(39)).toBe(3);
        expect(Main.multiplicativePersistence(6788)).toBe(6);
        expect(Main.multiplicativePersistence(277777788888899)).toBe(11);
    });
});