// #1
function isJS(path: string) {
    console.log(/\.(jsx|js|ts)$/.test(path));
}

isJS("/users/user.jsx");
isJS("/users/user.js");
isJS("/users/user.ts");
isJS("/users/user.jsxx");
isJS("/users/user js");

// #2
const addition = (num: number) => ++num;

addition(2);
addition(-9);

// #3
function getFirstValue(arr: Array<number>) {
    return arr.shift();
}

function getFirstValueB(arr: Array<number>) {
    return arr[0];
}

function getFirstValueC(arr: Array<number>) {
    let a: any;
    [a] = arr;
    return a;
}

console.log(getFirstValue([1, 2, 3]));
console.log(getFirstValueB([1, 2, 3]));
console.log(getFirstValueC([1, 2, 3]));

// #4
const isFourLetters = (arr: string[]) => arr.filter((str) => str.length == 4);
console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]));

// #5
function googlify(n: number) {
    if (n < 2)
        return "invalid";
    let o = "";
    while (n--)
        o += "o";
    return "G" + o + "gle";
}

function googlifyB(n: number) {
    return n > 1 ? "G" + "o".repeat(n) + "gle" : "invalid";
}

console.log(googlify(3));
console.log(googlifyB(3));

// #6 https://edabit.com/challenge/PMKNyPeYgz7weyNXF
function wordBuilder(letters: string[], positions: number[]) {
    const word: string[] = [];
    letters.forEach((letter, index) => word[positions[index]] = letter);
    return word.join("");
}

console.log(wordBuilder(["e", "t", "s", "t"], [1, 3, 2, 0]));
console.log(wordBuilder(["g", "e", "o"], [1, 0, 2]));

// #7 https://edabit.com/challenge/oS3wCwLWsDqvs7XKd
function reverse(str: string) {
    return Array.from(str).reverse().join("");
}

console.log(reverse("Hello World"));

// #8 https://edabit.com/challenge/3cBe8af7yG2rzLEA2
function Go(num: number) {
    return "-".repeat(num);
}

console.log(Go(5));

// #9 https://edabit.com/challenge/FydPqxRiosP7EBiQh
function countWords(str: string) {
    const word = str.match(/\s/g);
    return word ? word.length + 1 : 1;
}

function countWordsB(str: string) {
    return str.split(" ").length;
}

console.log(countWords("This is a test"));
console.log(countWordsB("What an easy task, right"));

// #10 Find larges num https://edabit.com/challenge/HTbRYCmPwfZGnBcxW
function findLargestNum(arr: number[]) {
    return arr.sort((a, b) => b - a)[0];
}

console.log(findLargestNum([4, 5, 1, 3]));

// #11 https://edabit.com/challenge/6R6gReGTGwzpwuffD
function sevenBoom(arr: number[]) {
    return arr.join("").search("7") != -1 ? "Boom!" : "there is no 7 in the array";
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
console.log(sevenBoom([8, 6, 33, 100]));

// #12 https://edabit.com/challenge/R3AYf3eTdATXTQTdZ
function firstLast(arr: any[]) {
    return [arr[0], arr[arr.length - 1]];
}

console.log(firstLast([5, 10, 15, 20, 25])); // [5, 25]
console.log(firstLast(["edabit", 13, null, false, true])); // ["edabit", true]

// #13 https://edabit.com/challenge/uJ9K3HtbjHoDGXKhg
function noOdds(arr: number[]) {
    return arr.filter(n => n % 2 === 0);
}

console.log(noOdds([1, 2, 3, 4, 5, 6, 7, 8])); // [2, 4, 6, 8]
console.log(noOdds([43, 65, 23, 89, 53, 9, 6])); // [6]

// #14 https://edabit.com/challenge/Wk7ScSpAG4wLSqm8k
// Формула числа сочетаний: n!/(n−k)!⋅k!
function combinations(k: number, n: number) {
    // 5! = 1*2*3*4*5=120
    function factorial(n: number) {
        let f = 1;
        for (let i = 2; i <= n; i++)
            f *= i;
        return f;
    }
    return Math.round(factorial(n) / (factorial(n - k) * factorial(k)));
}

console.log(combinations(52, 52)); // 1
console.log(combinations(5, 52)); // 2598960

const f = (n: number): number => n <= 1 ? 1 : n * f(n - 1); // факториал числа 5! = 1*2*3*4*5=120

// #15 https://edabit.com/challenge/djyXcJZAuezrSXJ4j
function missingAngle(angle1: number, angle2: number) {
    const angle3 = 180 - angle1 - angle2;
    return angle3 === 90 ? "right" : angle3 < 90 ? "acute" : "obtuse";
}

console.log(missingAngle(27, 59)); // "obtuse"
console.log(missingAngle(135, 11)); // "acute"
console.log(missingAngle(45, 45)); // "right"

// #16 https://edabit.com/challenge/GJn7xcBiCLdCNXFgy
interface Info {
    costPrice: number;
    sellPrice: number;
    inventory: number;
}

function profit(info: Info) {
    return Math.round(info.sellPrice * info.inventory - info.costPrice * info.inventory);
}

console.log(profit({
    costPrice: 32.67,
    sellPrice: 45.00,
    inventory: 1200
})); // 14796

console.log(profit({
    costPrice: 225.89,
    sellPrice: 550.00,
    inventory: 100
})); // 32411

console.log(profit({
    costPrice: 2.77,
    sellPrice: 7.95,
    inventory: 8500
})); // 44030

// #17 RGB check https://edabit.com/challenge/CoAPnr8jxcTah2CzZ
function validColor(color: string) {
    const regex = color.match(/(rgb|rgba)\((.*?)\)/);
    if (regex) {
        const arr = regex[2].split(","); // [ '0', '', '0' ]
        if (regex[1] === "rgb" && arr.length == 3 || regex[1] === "rgba" && arr.length == 4) {
            for (let i = 0; i < arr.length; i++) {
                let n: string | number = arr[i].trim(); // remove space
                if (!n.length)
                    return false;
                const persent = n[n.length - 1] === "%";
                if (persent)
                    n = n.slice(0, -1);
                n = Number(n);
                if (isNaN(n) || n < 0 || i == 3 && n > (persent ? 100 : 1) || n > (persent ? 100 : 255))
                    return false;
            }
            return true;
        }
    }
    return false;
}

console.log("#17");
console.log(validColor("rgb(100%,100%,101%)")); //  ➞ false
console.log(validColor("rgb(0%,0,0)")); // ➞ true
console.log(validColor("rgb(0,,0)")); // ➞ false
console.log(validColor("rgb( 255, 256  ,255 )")); // ➞ false
console.log(validColor("rgba(0,0,0,0.123456789)")); // ➞ true


// #18 Additive Inverse https://edabit.com/challenge/Qbi3GuXjwW5fsoKRn
function additiveInverse(arr: number[]) {
    return arr.map(n => -n);
}
console.log(additiveInverse([5, -7, 8, 3])); // ➞[-5, 7, -8, -3]
console.log(additiveInverse([1, 1, 1, 1, 1])); // ➞[-1, -1, -1, -1, -1]
console.log(additiveInverse([-5, -25, 35])); // ➞[5, 25, -35]

// #19 Unlucky 13 https://edabit.com/challenge/5232asan2yFuMGnHq
function unlucky13(nums: number[]) {
    return nums.filter(n => n % 13);
}

console.log(unlucky13([53, 182, 435, 591, 637])); // ➞ [53, 435, 591]
console.log(unlucky13([24, 316, 393, 458, 1279])); // ➞ [24, 316, 393, 458, 1279]
console.log(unlucky13([104, 351, 455, 806, 871])); // ➞ []

// #20 Word Endings https://edabit.com/challenge/hwWLHcDoPZmXcGHyd
export function addEnding(arr: string[], ending: string) {
    return arr.map(s => s + ending);
}

// #21 https://edabit.com/challenge/kGLhgwGaLJsCMS7wS
class Employee {
    firstname: string;
    lastname: string;
    email: string;
    fullname: string;
    constructor(firstname: string, lastname: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = `${firstname}.${lastname}@company.com`.toLowerCase();
        this.fullname = `${firstname} ${lastname}`;
    }
}

let emp1 = new Employee("John", "Smith");
console.log(emp1.fullname); // ➞ "John Smith"

emp1 = new Employee("Mary", "Sue");
console.log(emp1.email); // ➞ "mary.sue@company.com"

emp1 = new Employee("Antony", "Walker");
console.log(emp1.firstname); // ➞ "Antony"

// #22 Boolean check
export function reverseB(bool: any) {
    return typeof bool === "boolean" ? !bool : "boolean expected";
}

// #23 https://edabit.com/challenge/LMhRTq3hccz2D9Lax
export function multiplyByLength(arr: number[]) {
    return arr.map(x => x * arr.length);
}

// #24
export function pianoKeys(key: number) {
    if (key < 1 || key > 88)
        return false;
    const NOTES = ["A", "A♯/B♭", "B", "C", "C♯/D♭", "D", "D♯/E♭", "E", "F", "F♯/G♭", "G", "G♯/A♭"];
    const noteFreq = (key: number) => (2 ** (key / 12) * 27.5 /* A0 */).toFixed(2); // http://www.techlib.com/reference/musical_note_frequencies.htm
    key -= 1;
    const index = key % 12;
    return [NOTES[index], key < 3 ? "0" : Math.trunc((key + 9 /* offset */) / 12).toString(), NOTES[index].length > 1 ? "Black" : "White", noteFreq(key)];
}
