/* eslint-disable indent */
import * as Edabit from ".";

describe("Edabit Challenges", () => {
    test("isJS", () => {
        expect(Edabit.isJS("/users/user.jsx")).toBeTruthy();
        expect(Edabit.isJS("/users/user.js")).toBeTruthy();
        expect(Edabit.isJS("/users/user.ts")).toBeTruthy();
        expect(Edabit.isJS("/users/user.jsxx")).toBeFalsy();
        expect(Edabit.isJS("/users/user js")).toBeFalsy();
    });
    test("addition", () => {
        expect(Edabit.addition(2)).toBe(3);
        expect(Edabit.addition(-9)).toBe(-8);
    });
    test("getFirstValue", () => {
        expect(Edabit.getFirstValue([1, 2, 3])).toEqual([1, 1, 1]);
        expect(Edabit.getFirstValue([3, 2, 1])).toEqual([3, 3, 3]);
    });
    test("isFourLetters", () => {
        expect(Edabit.isFourLetters(["Ryan", "Kieran", "Jason", "Matt"])).toEqual(["Ryan", "Matt"]);
    });
    test("googlify", () => {
        expect(Edabit.googlify(0)).toBe("invalid");
        expect(Edabit.googlify(3)).toBe("Gooogle");
    });
    test("wordBuilder", () => {
        expect(Edabit.wordBuilder(["e", "t", "s", "t"], [1, 3, 2, 0])).toBe("test");
        expect(Edabit.wordBuilder(["b", "e", "t", "i", "d", "a"], [3, 0, 5, 4, 1, 2])).toBe("edabit");
    });
    test("reverse", () => {
        expect(Edabit.reverse("Think different.")).toBe(".tnereffid knihT");
    });
    test("Go", () => {
        expect(Edabit.Go(2)).toBe("--");
        expect(Edabit.Go(5)).toBe("-----");
    });
    test("countWords", () => {
        expect(Edabit.countWords("It's high noon")).toBe(3);
        expect(Edabit.countWords("Is this easy mode")).toBe(4);
        expect(Edabit.countWords("Just an example here move along")).toBe(6);
        expect(Edabit.countWords("How are you today?")).toBe(4);
    });
    test("countWordsB", () => {
        expect(Edabit.countWordsB("This is a test")).toBe(4);
        expect(Edabit.countWordsB("What an easy task, right")).toBe(5);
    });
    test("findLargestNum", () => {
        expect(Edabit.findLargestNum([4, 5, 1, 3])).toBe(5);
    });
    test("sevenBoom", () => {
        expect(Edabit.sevenBoom([1, 2, 3, 4, 5, 6, 7])).toBe("Boom!");
        expect(Edabit.sevenBoom([8, 6, 33, 100])).toBe("there is no 7 in the array");
    });
    test("firstLast", () => {
        expect(Edabit.firstLast([5, 10, 15, 20, 25])).toEqual([5, 25]);
        expect(Edabit.firstLast(["edabit", 13, null, false, true])).toEqual(["edabit", true]);
    });
    test("noOdds", () => {
        expect(Edabit.noOdds([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([2, 4, 6, 8]);
        expect(Edabit.noOdds([43, 65, 23, 89, 53, 9, 6])).toEqual([6]);
    });
    test("combinations", () => {
        expect(Edabit.combinations(52, 52)).toBe(1);
        expect(Edabit.combinations(5, 52)).toBe(2598960);
    });
    test("f (Factorial)", () => {
        expect(Edabit.factorial(5)).toBe(120);
        expect(Edabit.factorial(10)).toBe(3628800);
    });
    test("missingAngle", () => {
        expect(Edabit.missingAngle(27, 59)).toBe("obtuse");
        expect(Edabit.missingAngle(135, 11)).toBe("acute");
        expect(Edabit.missingAngle(45, 45)).toBe("right");
    });
    test("profit", () => {
        expect(Edabit.profit({
            costPrice: 32.67,
            sellPrice: 45,
            inventory: 1200
        })).toBe(14796);
        expect(Edabit.profit({
            costPrice: 225.89,
            sellPrice: 550,
            inventory: 100
        })).toBe(32411);
        expect(Edabit.profit({
            costPrice: 2.77,
            sellPrice: 7.95,
            inventory: 8500
        })).toBe(44030);
    });
    test("validColor RGB", () => {
        expect(Edabit.validColor("rgb(100%,100%,101%)")).toBeFalsy();
        expect(Edabit.validColor("rgb(0%,0,0)")).toBeTruthy();
        expect(Edabit.validColor("rgb(0,,0)")).toBeFalsy();
        expect(Edabit.validColor("rgb( 255, 256  ,255 )")).toBeFalsy();
        expect(Edabit.validColor("rgba(0,0,0,0.123456789)")).toBeTruthy();
    });
    test("additiveInverse", () => {
        expect(Edabit.additiveInverse([5, -7, 8, 3])).toEqual([-5, 7, -8, -3]);
        expect(Edabit.additiveInverse([1, 1, 1, 1, 1])).toEqual([-1, -1, -1, -1, -1]);
        expect(Edabit.additiveInverse([-5, -25, 35])).toEqual([5, 25, -35]);
    });
    test("unlucky13", () => {
        expect(Edabit.unlucky13([53, 182, 435, 591, 637])).toEqual([53, 435, 591]);
        expect(Edabit.unlucky13([24, 316, 393, 458, 1279])).toEqual([24, 316, 393, 458, 1279]);
        expect(Edabit.unlucky13([104, 351, 455, 806, 871])).toEqual([]);
    });
    test("addEnding", () => {
        expect(Edabit.addEnding(["clever", "meek", "hurried", "nice"], "ly")).toEqual(["cleverly", "meekly", "hurriedly", "nicely"]);
        expect(Edabit.addEnding(["new", "pander", "scoop"], "er")).toEqual(["newer", "panderer", "scooper"]);
        expect(Edabit.addEnding(["bend", "sharpen", "mean"], "ing")).toEqual(["bending", "sharpening", "meaning"]);
    });
    test("Employee class", () => {
        expect(new Edabit.Employee("John", "Smith").fullname).toBe("John Smith");
        expect(new Edabit.Employee("Mary", "Sue").email).toBe("mary.sue@company.com");
        expect(new Edabit.Employee("Antony", "Walker").firstname).toBe("Antony");
    });
    test("reverse boolean", () => {
        expect(Edabit.reverseB(true)).toBeFalsy();
        expect(Edabit.reverseB(false)).toBeTruthy();
        expect(Edabit.reverseB(0)).toBe("boolean expected");
        expect(Edabit.reverseB(null)).toBe("boolean expected");
    });
    test("multiplyByLength", () => {
        expect(Edabit.multiplyByLength([2, 3, 1, 0])).toEqual([8, 12, 4, 0]);
        expect(Edabit.multiplyByLength([4, 1, 1])).toEqual([12, 3, 3]);
        expect(Edabit.multiplyByLength([1, 0, 3, 3, 7, 2, 1])).toEqual([7, 0, 21, 21, 49, 14, 7]);
        expect(Edabit.multiplyByLength([0])).toEqual([0]);
    });
    test("pianoKeys", () => {
        expect(Edabit.pianoKeys(1)).toEqual(["A", "0", "White", "27.50"]);
        expect(Edabit.pianoKeys(15)).toEqual(["B", "1", "White", "61.74"]);
        expect(Edabit.pianoKeys(0)).toEqual(false);
        expect(Edabit.pianoKeys(17)).toEqual(["C♯/D♭", "2", "Black", "69.30"]);
        expect(Edabit.pianoKeys(88)).toEqual(["C", "8", "White", "4186.01"]);
        expect(Edabit.pianoKeys(100)).toEqual(false);
        expect(Edabit.pianoKeys(60)).toEqual(["G♯/A♭", "5", "Black", "830.61"]);
        expect(Edabit.pianoKeys(4)).toEqual(["C", "1", "White", "32.70"]);
        expect(Edabit.pianoKeys(71)).toEqual(["G", "6", "White", "1567.98"]);
        expect(Edabit.pianoKeys(16)).toEqual(["C", "2", "White", "65.41"]);
        expect(Edabit.pianoKeys(29)).toEqual(["C♯/D♭", "3", "Black", "138.59"]);
    });
    test("additivePersistence", () => {
        expect(Edabit.additivePersistence(5)).toBe(0);
        expect(Edabit.additivePersistence(27)).toBe(1);
        expect(Edabit.additivePersistence(58)).toBe(2);
        expect(Edabit.additivePersistence(5789)).toBe(3);
    });
    test("multiplicativePersistence", () => {
        expect(Edabit.multiplicativePersistence(7)).toBe(0);
        expect(Edabit.multiplicativePersistence(1234567890)).toBe(1);
        expect(Edabit.multiplicativePersistence(39)).toBe(3);
        expect(Edabit.multiplicativePersistence(6788)).toBe(6);
        expect(Edabit.multiplicativePersistence(277777788888899)).toBe(11);
    });
    test("difference", () => {
        expect(Edabit.difference([-9, -8, 6, -9, 15, 6])).toBe(24);
        expect(Edabit.difference([-5, 6, 18, 4, 16, -2])).toBe(23);
        expect(Edabit.difference([-2, 20, -9, -9, -2, -7])).toBe(29);
        expect(Edabit.difference([4, -2, 11, -9, 15, 2])).toBe(24);
        expect(Edabit.difference([15, 10, 3, -6, 6, 19])).toBe(25);
        expect(Edabit.difference([1, 7, 18, -1, -2, 9])).toBe(20);
        expect(Edabit.difference([5, 1, -9, 7, -8, -10])).toBe(17);
        expect(Edabit.difference([-4, 17, -4, 20, -7, 0])).toBe(27);
        expect(Edabit.difference([-2, 11, 11, -3, -3, -3])).toBe(14);
        expect(Edabit.difference([1, 15, 14, 20, 10, 6])).toBe(19);
        expect(Edabit.difference([4, 17, 12, 2, 10, 2])).toBe(15);
        expect(Edabit.difference([-3, 3, 20, 10, 0, 17])).toBe(23);
        expect(Edabit.difference([-3, 6, 20, 9, 6, 7])).toBe(23);
        expect(Edabit.difference([16, 15, 1, 18, -7, -3])).toBe(25);
        expect(Edabit.difference([-7, 4, -4, -3, -8, -9])).toBe(13);
        expect(Edabit.difference([15, 8, 17, 18, 10, 10])).toBe(10);
        expect(Edabit.difference([-3, 20, 16, 8, 18, -10])).toBe(30);
        expect(Edabit.difference([6, 18, 9, 1, 3, 1])).toBe(17);
        expect(Edabit.difference([20, 18, -2, -10, -10, 17])).toBe(30);
        expect(Edabit.difference([18, 20, -7, -4, -2, -8])).toBe(28);
    });
    test("isWristband", () => {
        expect(Edabit.isWristband(
            [["A", "A"],
            ["B", "B"],
            ["C", "C"]])).toBeTruthy();
        expect(Edabit.isWristband(
            [["A", "B"],
            ["A", "B"],
            ["A", "B"]])).toBeTruthy();
        expect(Edabit.isWristband(
            [["A", "B", "C"],
            ["C", "A", "B"],
            ["B", "C", "A"],
            ["A", "B", "C"]])).toBeTruthy();
        expect(Edabit.isWristband(
            [["A", "B", "C"],
            ["C", "A", "B"],
            ["D", "C", "A"],
            ["E", "D", "C"]])).toBeTruthy();
        expect(Edabit.isWristband(
            [["A", "B", "C"],
            ["B", "A", "B"],
            ["D", "C", "A"],
            ["E", "D", "C"]])).toBeFalsy();
        expect(Edabit.isWristband(
            [["A", "B", "C"],
            ["B", "C", "A"],
            ["C", "A", "B"],
            ["A", "B", "A"]])).toBeTruthy();
        expect(Edabit.isWristband(
            [["A", "B", "C"],
            ["B", "C", "D"],
            ["C", "D", "E"],
            ["D", "E", "F"]])).toBeTruthy();
        expect(Edabit.isWristband(
            [["A", "B", "C"],
            ["B", "C", "D"],
            ["C", "D", "E"],
            ["D", "E", "E"]])).toBeTruthy();
        expect(Edabit.isWristband(
            [["A", "B", "C"],
            ["B", "C", "D"],
            ["C", "D", "E"],
            ["D", "F", "E"]])).toBeFalsy();
        expect(Edabit.isWristband(
            [["A", "B", "C"],
            ["B", "D", "A"],
            ["C", "A", "B"],
            ["A", "B", "A"]])).toBeFalsy();
        expect(Edabit.isWristband(
            [["A", "B"],
            ["A", "B"],
            ["A", "C"],
            ["A", "B"]])).toBeFalsy();
        expect(Edabit.isWristband(
            [["A", "A"],
            ["B", "B"],
            ["C", "C"],
            ["D", "B"]])).toBeFalsy();
        expect(Edabit.isWristband(
            [["A", "A"],
            ["B", "B"],
            ["C", "C"],
            ["C", "C"]])).toBeTruthy();
    });
    /*     test("", () => {
expect().toEqual();
});*/
    test("competitionRank", () => {
        expect(Edabit.competitionRank({ Aria: 90, Brooke: 90, Olivia: 90, Den: 89, Vanya: 89, Eve: 74, Ellie: 87 }, "Vanya")).toBe(4);
        expect(Edabit.competitionRank({ Aria: 90, Brooke: 90, Olivia: 90, Eve: 74, Ellie: 87 }, "Ellie")).toBe(4);
        expect(Edabit.competitionRank({ Ryan: 97, Thomas: 85, Kai: 95, Aiden: 87, Logan: 90 }, "Logan")).toBe(3);
        expect(Edabit.competitionRank({ Lilly: 91, Harris: 87, Archie: 93, Lexi: 100, Ava: 88 }, "Lilly")).toBe(3);
        expect(Edabit.competitionRank({ Jayden: 90, Josh: 90, Rebecca: 96, Jack: 89, Max: 96 }, "Rebecca")).toBe(1);
        expect(Edabit.competitionRank({ Ben: 78, Quinn: 84, Lena: 84, Isla: 92, Kayla: 72 }, "Ben")).toBe(4);
        expect(Edabit.competitionRank({ Lucy: 81, Ella: 90, Summer: 91, Harper: 81, Sadie: 85 }, "Ella")).toBe(2);
        expect(Edabit.competitionRank({ Cole: 96, Carson: 92, Gabriel: 91, Hollie: 97, Penelope: 85 }, "Hollie")).toBe(1);
        expect(Edabit.competitionRank({ Michael: 89, Noah: 98, Reuben: 88, Sam: 91, Mia: 91 }, "Mia")).toBe(2);
        expect(Edabit.competitionRank({ James: 93, Maria: 91, Lewis: 95, Joseph: 96, Imogen: 90 }, "Lewis")).toBe(2);
        expect(Edabit.competitionRank({ Jessica: 90, Emily: 99, Hope: 91, Charlie: 96, Lucas: 87 }, "Hope")).toBe(3);
        expect(Edabit.competitionRank({ Sophie: 86, Piper: 98, Elliot: 100, Erica: 90, Freya: 100 }, "Freya")).toBe(1);
        expect(Edabit.competitionRank({ Grace: 93, Henry: 90, Florence: 98, Millie: 89, David: 99 }, "Henry")).toBe(4);
        expect(Edabit.competitionRank({ Alfie: 90, Elijah: 90, Cara: 85, Isaac: 96, Bella: 92 }, "Elijah")).toBe(3);
        expect(Edabit.competitionRank({ Clara: 85, Matilda: 86, Amelia: 98, Oliver: 95, Adam: 94 }, "Clara")).toBe(5);
        expect(Edabit.competitionRank({ Nina: 81, Tommy: 79, Tyler: 84, Leo: 79, Hallie: 79 }, "Nina")).toBe(2);
        expect(Edabit.competitionRank({ Violet: 99, Finn: 100, Eden: 99, Frankie: 98, Rory: 98 }, "Frankie")).toBe(4);
        expect(Edabit.competitionRank({ Robbie: 70, Julia: 76, Owen: 70, Phoebe: 92, Jacob: 79 }, "Owen")).toBe(4);
        expect(Edabit.competitionRank({ Andrew: 95, Louis: 95, Riley: 95, Amy: 95, Charlotte: 95 }, "Charlotte")).toBe(1);
        expect(Edabit.competitionRank({ Harry: 81, Elsie: 81, Grayson: 84, John: 84, Alex: 81 }, "Elsie")).toBe(3);
        expect(Edabit.competitionRank({ Innes: 76, Lola: 85, Anna: 92, Cooper: 93, Daniel: 93 }, "Cooper")).toBe(1);
    });
    test("findFrequent", () => {
        expect(Edabit.findFrequent([3, 7, 3])).toBe(3);
        expect(Edabit.findFrequent([null, "hello", true, null])).toBeNull();
        expect(Edabit.findFrequent([false, "up", "down", "left", "right", true, false])).toBeFalsy();
        expect(Edabit.findFrequent([undefined])).toBeUndefined();
        expect(Edabit.findFrequent([1, 2, -3, true, false, undefined, "yes", "yeah", "yup", 2])).toBe(2);
        expect(Edabit.findFrequent(["Batman", "Superman", "Batman"])).toBe("Batman");
    });
    test("nodeType", () => {
        expect(Edabit.nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 1)).toBe("Leaf");
        expect(Edabit.nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 2)).toBe("Inner");
        expect(Edabit.nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 3)).toBe("Leaf");
        expect(Edabit.nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 5)).toBe("Root");
        expect(Edabit.nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 6)).toBe("Leaf");
        expect(Edabit.nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 8)).toBe("Inner");
        expect(Edabit.nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 9)).toBe("Leaf");
        expect(Edabit.nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 10)).toBe("Not exist");
        expect(Edabit.nodeType([6, 3, 1, 2, 5, 7, 4, 6, 8], [3, 1, 6, 1, 2, 3, 8, -1, 6], 8)).toBe("Inner");
        expect(Edabit.nodeType([5, 6, 8, 7, 1, 9, 4, 11, 10, 2], [8, 8, -1, 8, 7, 4, 5, 4, 1, 1], 11)).toBe("Leaf");
        expect(Edabit.nodeType([3, 2, 4, 9, 11, 10, 8, 5, 6, 7], [-1, 3, 3, 2, 3, 4, 4, 9, 10, 8], 3)).toBe("Root");
        expect(Edabit.nodeType([5, 6, 8, 7, 1, 9, 4, 11, 10, 2], [8, 8, -1, 8, 7, 4, 5, 4, 1, 1], 4)).toBe("Inner");
        expect(Edabit.nodeType([3, 2, 4, 9, 11, 10, 8, 5, 6, 7], [-1, 3, 3, 2, 3, 4, 4, 9, 10, 8], 6)).toBe("Leaf");
        expect(Edabit.nodeType([6, 3, 1, 2, 5, 7, 4, 6, 8], [3, 1, 6, 1, 2, 3, 8, -1, 6], 5)).toBe("Leaf");
        expect(Edabit.nodeType([5, 6, 8, 7, 1, 9, 4, 11, 10, 2], [8, 8, -1, 8, 7, 4, 5, 4, 1, 1], 8)).toBe("Root");
        expect(Edabit.nodeType([3, 2, 4, 9, 11, 10, 8, 5, 6, 7], [-1, 3, 3, 2, 3, 4, 4, 9, 10, 8], 10)).toBe("Inner");
    });
    test("tune", () => {
        expect(Edabit.tune([329.63, 246.94, 196, 146.83, 110, 82.41])).toEqual(["OK", "OK", "OK", "OK", "OK", "OK"]);
        expect(Edabit.tune([0, 0, 190, 0, 110, 0])).toEqual([" - ", " - ", ">>•", " - ", "OK", " - "]);
        expect(Edabit.tune([331, 248, 195, 147, 110, 84])).toEqual(["OK", "OK", ">•", "OK", "OK", "•<"]);
        expect(Edabit.tune([0, 246.94, 0, 0, 0, 80])).toEqual([" - ", "OK", " - ", " - ", " - ", ">>•"]);
        expect(Edabit.tune([329, 246, 195, 146, 111, 82])).toEqual(["OK", "OK", ">•", ">•", "•<", "OK"]);
    });
    test("tticTacToeune", () => {
        expect(Edabit.ticTacToe([
            ["X", "O", "X"],
            ["O", "X", "O"],
            ["O", "X", "X"]
        ])).toBe("X");
        expect(Edabit.ticTacToe([
            ["O", "O", "O"],
            ["O", "X", "X"],
            ["E", "X", "X"]
        ])).toBe("O");
        expect(Edabit.ticTacToe([
            ["X", "X", "O"],
            ["O", "O", "X"],
            ["X", "X", "O"]
        ])).toBe("Draw");
        expect(Edabit.ticTacToe([
            ["X", "O", "O"],
            ["X", "O", "O"],
            ["X", "X", "X"]
        ])).toBe("X");
        expect(Edabit.ticTacToe([
            ["X", "X", "O"],
            ["O", "O", "X"],
            ["X", "X", "O"]
        ])).toBe("Draw");
        expect(Edabit.ticTacToe([
            ["X", "O", "X"],
            ["O", "X", "O"],
            ["E", "E", "X"]
        ])).toBe("X");
        expect(Edabit.ticTacToe([
            ["X", "O", "E"],
            ["X", "O", "E"],
            ["E", "O", "X"]
        ])).toBe("O");
    });
    test("BasicPlan", () => {
        expect(Edabit.BasicPlan.canStream).toBe(true);
        expect(Edabit.BasicPlan.canDownload).toBe(true);
        expect(Edabit.BasicPlan.numOfDevices).toBe(1);
        expect(Edabit.BasicPlan.hasSD).toBe(true);
        expect(Edabit.BasicPlan.hasHD).toBe(false);
        expect(Edabit.BasicPlan.hasUHD).toBe(false);
        expect(Edabit.BasicPlan.price).toBe("$8.99");
        expect(Edabit.StandardPlan.canStream).toBe(true);
        expect(Edabit.StandardPlan.canDownload).toBe(true);
        expect(Edabit.StandardPlan.numOfDevices).toBe(2);
        expect(Edabit.StandardPlan.hasSD).toBe(true);
        expect(Edabit.StandardPlan.hasHD).toBe(true);
        expect(Edabit.StandardPlan.hasUHD).toBe(false);
        expect(Edabit.StandardPlan.price).toBe("$12.99");
        expect(Edabit.PremiumPlan.canStream).toBe(true);
        expect(Edabit.PremiumPlan.canDownload).toBe(true);
        expect(Edabit.PremiumPlan.numOfDevices).toBe(4);
        expect(Edabit.PremiumPlan.hasSD).toBe(true);
        expect(Edabit.PremiumPlan.hasHD).toBe(true);
        expect(Edabit.PremiumPlan.hasUHD).toBe(true);
        expect(Edabit.PremiumPlan.price).toBe("$15.99");
    });
    test("bitRotate", () => {
        expect(Edabit.bitRotate(8, 1, true)).toBe(4);
        expect(Edabit.bitRotate(16, 2, true)).toBe(4);
        expect(Edabit.bitRotate(283, 7, true)).toBe(110);
        expect(Edabit.bitRotate(16, 1, false)).toBe(1);
        expect(Edabit.bitRotate(17, 2, false)).toBe(6); // 1 0001 (bits len 5) > 100 0100 | 0010 = 100 0110 > 0 0110 (removes bits)
        expect(Edabit.bitRotate(122, 7, false)).toBe(122);
        expect(Edabit.bitRotate(125, 10, true)).toBe(95);
        expect(Edabit.bitRotate(1022, 8, false)).toBe(767);
        expect(Edabit.bitRotate(33, 6, true)).toBe(33);
    });
    test("happy", () => {
        expect(Edabit.happy(100)).toBe(true);
        expect(Edabit.happy(101)).toBe(false);
        expect(Edabit.happy(102)).toBe(false);
        expect(Edabit.happy(103)).toBe(true);
        expect(Edabit.happy(104)).toBe(false);
        expect(Edabit.happy(105)).toBe(false);
        expect(Edabit.happy(106)).toBe(false);
        expect(Edabit.happy(107)).toBe(false);
        expect(Edabit.happy(108)).toBe(false);
        expect(Edabit.happy(109)).toBe(true);
        expect(Edabit.happy(110)).toBe(false);
    });
    test("isbn13", () => {
        expect(Edabit.isbn13("9780316066525")).toBe("Valid");
        expect(Edabit.isbn13("9783866155237")).toBe("Valid");
        expect(Edabit.isbn13("9780345453747")).toBe("Valid");
        expect(Edabit.isbn13("031606652X")).toBe("Invalid");
        expect(Edabit.isbn13("9783876155237")).toBe("Invalid");
        expect(Edabit.isbn13("0345453747")).toBe("Invalid");
        expect(Edabit.isbn13("0316066524")).toBe("9780316066525");
        expect(Edabit.isbn13("3866155239")).toBe("9783866155237");
        expect(Edabit.isbn13("817450494X")).toBe("9788174504944");
    });
});