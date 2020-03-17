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
    test("difference", () => {
        expect(Main.difference([-9, -8, 6, -9, 15, 6])).toBe(24);
        expect(Main.difference([-5, 6, 18, 4, 16, -2])).toBe(23);
        expect(Main.difference([-2, 20, -9, -9, -2, -7])).toBe(29);
        expect(Main.difference([4, -2, 11, -9, 15, 2])).toBe(24);
        expect(Main.difference([15, 10, 3, -6, 6, 19])).toBe(25);
        expect(Main.difference([1, 7, 18, -1, -2, 9])).toBe(20);
        expect(Main.difference([5, 1, -9, 7, -8, -10])).toBe(17);
        expect(Main.difference([-4, 17, -4, 20, -7, 0])).toBe(27);
        expect(Main.difference([-2, 11, 11, -3, -3, -3])).toBe(14);
        expect(Main.difference([1, 15, 14, 20, 10, 6])).toBe(19);
        expect(Main.difference([4, 17, 12, 2, 10, 2])).toBe(15);
        expect(Main.difference([-3, 3, 20, 10, 0, 17])).toBe(23);
        expect(Main.difference([-3, 6, 20, 9, 6, 7])).toBe(23);
        expect(Main.difference([16, 15, 1, 18, -7, -3])).toBe(25);
        expect(Main.difference([-7, 4, -4, -3, -8, -9])).toBe(13);
        expect(Main.difference([15, 8, 17, 18, 10, 10])).toBe(10);
        expect(Main.difference([-3, 20, 16, 8, 18, -10])).toBe(30);
        expect(Main.difference([6, 18, 9, 1, 3, 1])).toBe(17);
        expect(Main.difference([20, 18, -2, -10, -10, 17])).toBe(30);
        expect(Main.difference([18, 20, -7, -4, -2, -8])).toBe(28);
    });
    test("isWristband", () => {
        expect(Main.isWristband(
            [["A", "A"],
            ["B", "B"],
            ["C", "C"]])).toBeTruthy();
        expect(Main.isWristband(
            [["A", "B"],
            ["A", "B"],
            ["A", "B"]])).toBeTruthy();
        expect(Main.isWristband(
            [["A", "B", "C"],
            ["C", "A", "B"],
            ["B", "C", "A"],
            ["A", "B", "C"]])).toBeTruthy();
        expect(Main.isWristband(
            [["A", "B", "C"],
            ["C", "A", "B"],
            ["D", "C", "A"],
            ["E", "D", "C"]])).toBeTruthy();
        expect(Main.isWristband(
            [["A", "B", "C"],
            ["B", "A", "B"],
            ["D", "C", "A"],
            ["E", "D", "C"]])).toBeFalsy();
        expect(Main.isWristband(
            [["A", "B", "C"],
            ["B", "C", "A"],
            ["C", "A", "B"],
            ["A", "B", "A"]])).toBeTruthy();
        expect(Main.isWristband(
            [["A", "B", "C"],
            ["B", "C", "D"],
            ["C", "D", "E"],
            ["D", "E", "F"]])).toBeTruthy();
        expect(Main.isWristband(
            [["A", "B", "C"],
            ["B", "C", "D"],
            ["C", "D", "E"],
            ["D", "E", "E"]])).toBeTruthy();
        expect(Main.isWristband(
            [["A", "B", "C"],
            ["B", "C", "D"],
            ["C", "D", "E"],
            ["D", "F", "E"]])).toBeFalsy();
        expect(Main.isWristband(
            [["A", "B", "C"],
            ["B", "D", "A"],
            ["C", "A", "B"],
            ["A", "B", "A"]])).toBeFalsy();
        expect(Main.isWristband(
            [["A", "B"],
            ["A", "B"],
            ["A", "C"],
            ["A", "B"]])).toBeFalsy();
        expect(Main.isWristband(
            [["A", "A"],
            ["B", "B"],
            ["C", "C"],
            ["D", "B"]])).toBeFalsy();
        expect(Main.isWristband(
            [["A", "A"],
            ["B", "B"],
            ["C", "C"],
            ["C", "C"]])).toBeTruthy();
    });
    /*     test("", () => {
expect().toEqual();
});*/
    test("competitionRank", () => {
        expect(Main.competitionRank({ Aria: 90, Brooke: 90, Olivia: 90, Den: 89, Vanya: 89, Eve: 74, Ellie: 87 }, "Vanya")).toBe(4);
        expect(Main.competitionRank({ Aria: 90, Brooke: 90, Olivia: 90, Eve: 74, Ellie: 87 }, "Ellie")).toBe(4);
        expect(Main.competitionRank({ Ryan: 97, Thomas: 85, Kai: 95, Aiden: 87, Logan: 90 }, "Logan")).toBe(3);
        expect(Main.competitionRank({ Lilly: 91, Harris: 87, Archie: 93, Lexi: 100, Ava: 88 }, "Lilly")).toBe(3);
        expect(Main.competitionRank({ Jayden: 90, Josh: 90, Rebecca: 96, Jack: 89, Max: 96 }, "Rebecca")).toBe(1);
        expect(Main.competitionRank({ Ben: 78, Quinn: 84, Lena: 84, Isla: 92, Kayla: 72 }, "Ben")).toBe(4);
        expect(Main.competitionRank({ Lucy: 81, Ella: 90, Summer: 91, Harper: 81, Sadie: 85 }, "Ella")).toBe(2);
        expect(Main.competitionRank({ Cole: 96, Carson: 92, Gabriel: 91, Hollie: 97, Penelope: 85 }, "Hollie")).toBe(1);
        expect(Main.competitionRank({ Michael: 89, Noah: 98, Reuben: 88, Sam: 91, Mia: 91 }, "Mia")).toBe(2);
        expect(Main.competitionRank({ James: 93, Maria: 91, Lewis: 95, Joseph: 96, Imogen: 90 }, "Lewis")).toBe(2);
        expect(Main.competitionRank({ Jessica: 90, Emily: 99, Hope: 91, Charlie: 96, Lucas: 87 }, "Hope")).toBe(3);
        expect(Main.competitionRank({ Sophie: 86, Piper: 98, Elliot: 100, Erica: 90, Freya: 100 }, "Freya")).toBe(1);
        expect(Main.competitionRank({ Grace: 93, Henry: 90, Florence: 98, Millie: 89, David: 99 }, "Henry")).toBe(4);
        expect(Main.competitionRank({ Alfie: 90, Elijah: 90, Cara: 85, Isaac: 96, Bella: 92 }, "Elijah")).toBe(3);
        expect(Main.competitionRank({ Clara: 85, Matilda: 86, Amelia: 98, Oliver: 95, Adam: 94 }, "Clara")).toBe(5);
        expect(Main.competitionRank({ Nina: 81, Tommy: 79, Tyler: 84, Leo: 79, Hallie: 79 }, "Nina")).toBe(2);
        expect(Main.competitionRank({ Violet: 99, Finn: 100, Eden: 99, Frankie: 98, Rory: 98 }, "Frankie")).toBe(4);
        expect(Main.competitionRank({ Robbie: 70, Julia: 76, Owen: 70, Phoebe: 92, Jacob: 79 }, "Owen")).toBe(4);
        expect(Main.competitionRank({ Andrew: 95, Louis: 95, Riley: 95, Amy: 95, Charlotte: 95 }, "Charlotte")).toBe(1);
        expect(Main.competitionRank({ Harry: 81, Elsie: 81, Grayson: 84, John: 84, Alex: 81 }, "Elsie")).toBe(3);
        expect(Main.competitionRank({ Innes: 76, Lola: 85, Anna: 92, Cooper: 93, Daniel: 93 }, "Cooper")).toBe(1);
    });
    test("findFrequent", () => {
        expect(Main.findFrequent([3, 7, 3])).toBe(3);
        expect(Main.findFrequent([null, "hello", true, null])).toBeNull();
        expect(Main.findFrequent([false, "up", "down", "left", "right", true, false])).toBeFalsy();
        expect(Main.findFrequent([undefined])).toBeUndefined();
        expect(Main.findFrequent([1, 2, -3, true, false, undefined, "yes", "yeah", "yup", 2])).toBe(2);
        expect(Main.findFrequent(["Batman", "Superman", "Batman"])).toBe("Batman");
    });
    test("nodeType", () => {
        expect(Main.nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 1)).toBe("Leaf");
        expect(Main.nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 2)).toBe("Inner");
        expect(Main.nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 3)).toBe("Leaf");
        expect(Main.nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 5)).toBe("Root");
        expect(Main.nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 6)).toBe("Leaf");
        expect(Main.nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 8)).toBe("Inner");
        expect(Main.nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 9)).toBe("Leaf");
        expect(Main.nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 10)).toBe("Not exist");
        expect(Main.nodeType([6, 3, 1, 2, 5, 7, 4, 6, 8], [3, 1, 6, 1, 2, 3, 8, -1, 6], 8)).toBe("Inner");
        expect(Main.nodeType([5, 6, 8, 7, 1, 9, 4, 11, 10, 2], [8, 8, -1, 8, 7, 4, 5, 4, 1, 1], 11)).toBe("Leaf");
        expect(Main.nodeType([3, 2, 4, 9, 11, 10, 8, 5, 6, 7], [-1, 3, 3, 2, 3, 4, 4, 9, 10, 8], 3)).toBe("Root");
        expect(Main.nodeType([5, 6, 8, 7, 1, 9, 4, 11, 10, 2], [8, 8, -1, 8, 7, 4, 5, 4, 1, 1], 4)).toBe("Inner");
        expect(Main.nodeType([3, 2, 4, 9, 11, 10, 8, 5, 6, 7], [-1, 3, 3, 2, 3, 4, 4, 9, 10, 8], 6)).toBe("Leaf");
        expect(Main.nodeType([6, 3, 1, 2, 5, 7, 4, 6, 8], [3, 1, 6, 1, 2, 3, 8, -1, 6], 5)).toBe("Leaf");
        expect(Main.nodeType([5, 6, 8, 7, 1, 9, 4, 11, 10, 2], [8, 8, -1, 8, 7, 4, 5, 4, 1, 1], 8)).toBe("Root");
        expect(Main.nodeType([3, 2, 4, 9, 11, 10, 8, 5, 6, 7], [-1, 3, 3, 2, 3, 4, 4, 9, 10, 8], 10)).toBe("Inner");
    });
});