// #1
export function isJS(path: string) {
    return /\.(jsx|js|ts)$/.test(path);
}

// #2
export const addition = (num: number) => ++num;

// #3
export function getFirstValue(arr: Array<number>) {
    const [a] = arr;
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
    return [...str].reverse().join("");
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
export const factorial = (n: number): number => n <= 1 ? 1 : n * factorial(n - 1); // факториал числа 5! = 1*2*3*4*5=120

export function combinations(k: number, n: number) {
    return Math.round(factorial(n) / (factorial(n - k) * factorial(k)));
}

// #15 https://edabit.com/challenge/djyXcJZAuezrSXJ4j
export function missingAngle(angle1: number, angle2: number) {
    const angle3 = 180 - angle1 - angle2;
    return angle3 === 90 ? "right" : (angle3 < 90 ? "acute" : "obtuse");
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
            for (const [i, element] of arr.entries()) {
                let n: string | number = element.trim(); // remove space
                if (!n.length)
                    return false;
                const persent = n.endsWith("%");
                if (persent)
                    n = n.slice(0, -1);
                n = Number(n);
                if (Number.isNaN(n) || n < 0 || i == 3 && n > (persent ? 100 : 1) || n > (persent ? 100 : 255))
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
export const noteFreq = (key: number) => (2 ** (key / 12) * 27.5 /* A0 */).toFixed(2); // http://www.techlib.com/reference/musical_note_frequencies.html

export function pianoKeys(key: number) {
    if (key < 1 || key > 88)
        return false;
    const NOTES = ["A", "A♯/B♭", "B", "C", "C♯/D♭", "D", "D♯/E♭", "E", "F", "F♯/G♭", "G", "G♯/A♭"];
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
    function recursiveSum(n: number, count = 0): number {
        count++;
        const sum = n.toString().split("").map(n => Number.parseInt(n)).reduce(f);
        if (sum > 9)
            return recursiveSum(sum, count);
        return count;
    }
    return recursiveSum(n);
}

// #26 Maximum Difference https://edabit.com/challenge/4vvFr9ZTK2AdyswXH
export function difference(nums: number[]) {
    return nums.sort((a, b) => b - a)[0] - nums[nums.length - 1];
}

// #27 Patterned Wristband https://edabit.com/challenge/HX5eEuKb7epMgsKsj
export function isWristband(arr: string[][]) {
    // horizontal: each item in a row is identical.
    function isHorizontal() {
        for (const element of arr) {
            for (let y = 1; y < element.length; y++) {
                if (element[0] != element[y])
                    return false;
            }
        }
        return true;
    }
    // vertical: each item in a column is identical.
    function isVertical() {
        for (let y = 0; y < arr[0].length; y++) {
            for (let x = 1; x < arr.length; x++) {
                if (arr[0][y] != arr[x][y])
                    return false;
            }
        }
        return true;
    }
    // diagonal left: each item is identical to the one on it's upper left or bottom right.
    function isDiagonalLeft() {
        for (let x = 0; x < arr.length - 1; x++) {
            for (let y = 0; y < arr[x].length - 1; y++) {
                if (arr[x][y] != arr[x + 1][y + 1])
                    return false;
            }
        }
        return true;
    }
    // diagonal right: each item is identical to the one on it's upper right or bottom left.
    function isDiagonalRight() {
        for (let x = 0; x < arr.length - 1; x++) {
            for (let y = 1; y < arr[x].length; y++) {
                if (arr[x][y] != arr[x + 1][y - 1])
                    return false;
            }
        }
        return true;
    }
    return isHorizontal() || isVertical() || isDiagonalLeft() || isDiagonalRight();
}

// #28 Standard Competition Ranking https://edabit.com/challenge/g2QxB5HCE9hN3PS75
interface Rank {
    [Name: string]: number;
}

export function competitionRank(results: Rank, person: string) {
    const sortable: [string, number][] = [];
    for (const name in results) {
        sortable.push([name, results[name]]);
    }
    sortable.sort((a, b) => b[1] - a[1]);
    let prev: number = Number.NaN, count = 0;
    for (const [i, element] of sortable.entries()) {
        if (element[1] != prev)
            count = i + 1;
        if (element[0] === person)
            return count;
        prev = element[1];
    }
    // better solution
    /*     let rank = 1;
        for (let key in results) {
            if (results[key] > results[person]) {
                rank++;
            }
        }
        return rank; */
}

// #29 Find the Most Frequent Element in an Array https://edabit.com/challenge/hxHBsYebaBM3ff5s6
export function findFrequent(arr: any[]) {
    let freq = [0];
    for (const num of arr) {
        const count = arr.length - arr.filter(v => num !== v).length;
        if (count > freq[0])
            freq = [count, num];
    }
    return freq[1];
}

// #30 Binary Tree Nodes https://edabit.com/challenge/ycNLF4XMmQub5AeTt
export function nodeType(N: number[], P: number[], n: number) {
    return [...N, ...P].includes(n) ? P[N.indexOf(n)] === -1 ? "Root" : P.includes(n) ? "Inner" : "Leaf" : "Not exist";
}
