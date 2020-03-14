// #1
export function isJS(path: string) {
    return /\.(jsx|js|ts)$/.test(path);
}

// #2
export const addition = (num: number) => ++num;

// #3
export function getFirstValue(arr: Array<number>) {
    let a: any;
    [a] = arr;
    return [a, arr[0], arr.shift()];
}

// #4
export const isFourLetters = (arr: string[]) => arr.filter((str) => str.length == 4);

// #5
export function googlify(n: number) {
    return n > 1 ? "G" + "o".repeat(n) + "gle" : "invalid";
}

// #6 https://edabit.com/challenge/PMKNyPeYgz7weyNXF
export function wordBuilder(letters: string[], positions: number[]) {
    const word: string[] = [];
    letters.forEach((letter, index) => word[positions[index]] = letter);
    return word.join("");
}

// #7 https://edabit.com/challenge/oS3wCwLWsDqvs7XKd
export function reverse(str: string) {
    return Array.from(str).reverse().join("");
}

// #8 https://edabit.com/challenge/3cBe8af7yG2rzLEA2
export function Go(num: number) {
    return "-".repeat(num);
}

// #9 https://edabit.com/challenge/FydPqxRiosP7EBiQh
export function countWords(str: string) {
    const word = str.match(/\s/g);
    return word ? word.length + 1 : 1;
}

export function countWordsB(str: string) {
    return str.split(" ").length;
}

// #10 Find larges num https://edabit.com/challenge/HTbRYCmPwfZGnBcxW
export function findLargestNum(arr: number[]) {
    return arr.sort((a, b) => b - a)[0];
}

// #11 https://edabit.com/challenge/6R6gReGTGwzpwuffD
export function sevenBoom(arr: number[]) {
    return arr.join("").search("7") != -1 ? "Boom!" : "there is no 7 in the array";
}

// #12 https://edabit.com/challenge/R3AYf3eTdATXTQTdZ
export function firstLast(arr: any[]) {
    return [arr[0], arr[arr.length - 1]];
}

// #13 https://edabit.com/challenge/uJ9K3HtbjHoDGXKhg
export function noOdds(arr: number[]) {
    return arr.filter(n => n % 2 === 0);
}

// #14 https://edabit.com/challenge/Wk7ScSpAG4wLSqm8k
// Формула числа сочетаний: n!/(n−k)!⋅k!
export function combinations(k: number, n: number) {
    // 5! = 1*2*3*4*5=120
    function factorial(n: number) {
        let f = 1;
        for (let i = 2; i <= n; i++)
            f *= i;
        return f;
    }
    return Math.round(factorial(n) / (factorial(n - k) * factorial(k)));
}

export const f = (n: number): number => n <= 1 ? 1 : n * f(n - 1); // факториал числа 5! = 1*2*3*4*5=120

// #15 https://edabit.com/challenge/djyXcJZAuezrSXJ4j
export function missingAngle(angle1: number, angle2: number) {
    const angle3 = 180 - angle1 - angle2;
    return angle3 === 90 ? "right" : angle3 < 90 ? "acute" : "obtuse";
}

// #16 https://edabit.com/challenge/GJn7xcBiCLdCNXFgy
interface Info {
    costPrice: number;
    sellPrice: number;
    inventory: number;
}

export function profit(info: Info) {
    return Math.round(info.sellPrice * info.inventory - info.costPrice * info.inventory);
}

// #17 RGB check https://edabit.com/challenge/CoAPnr8jxcTah2CzZ
export function validColor(color: string) {
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

// #18 Additive Inverse https://edabit.com/challenge/Qbi3GuXjwW5fsoKRn
export function additiveInverse(arr: number[]) {
    return arr.map(n => -n);
}

// #19 Unlucky 13 https://edabit.com/challenge/5232asan2yFuMGnHq
export function unlucky13(nums: number[]) {
    return nums.filter(n => n % 13);
}

// #20 Word Endings https://edabit.com/challenge/hwWLHcDoPZmXcGHyd
export function addEnding(arr: string[], ending: string) {
    return arr.map(s => s + ending);
}

// #21 https://edabit.com/challenge/kGLhgwGaLJsCMS7wS
export class Employee {
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

// #25 https://edabit.com/challenge/vHvu4Wis8RhmQbwXm
// 1 + 6 + 7 + 9 + 5 + 8 + 3 = 39
// 3 + 9 = 12
// 1 + 2 = 3
// It takes 3 iterations to reach a single-digit number.
export function additivePersistence(n: number) {
    return persistence(n, (p, c) => p + c);
}

// 7 x 7 = 49
// 4 x 9 = 36
// 3 x 6 = 18
// 1 x 8 = 8
// It takes 4 iterations to reach a single-digit number.
export function multiplicativePersistence(n: number) {
    return persistence(n, (p, c) => p * c);
}

type ReduceCbk = (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number;

function persistence(n: number, f: ReduceCbk) {
    if (n < 10)
        return 0;
    function recursiveSum(n: number, count: number = 0): number {
        count++;
        const sum = n.toString().split("").map(n => parseInt(n)).reduce(f);
        if (sum > 9)
            return recursiveSum(sum, count);
        return count;
    }
    return recursiveSum(n);
}