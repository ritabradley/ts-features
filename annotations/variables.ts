let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['lightyellow', 'lightblue', 'periwinkle'];
let nums: number[] = [1, 2, 3, 4, 5];
let bools: boolean[] = [true, false, true];

// Classes
class Car {
}

let car: Car = new Car();

// Object literal

let plotPoint: { x: number; y: number } = {
	x: 15,
	y: 25
}

// Function
const logNum: (i: number) => void = (i: number) => {
	console.log(i);
}

// When to use annotations
// 1) Function that returns the 'any' type

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

// 2) When we declare a variable on one line
// and initialize it later

let words = ['whale', 'turtle', 'shark'];

let foundWord: boolean

for (let i = 0; i < words.length; i++) {
	if (words[i] === 'shark') {
		foundWord = true;
	}
}

// 3) Variable whose type cannot be inferred correctly
let nums2 = [-34, 22, -4]

let numAboveZero: boolean | number = false;

for (let i = 0; i < nums2.length; i++) {
	if (nums2[i] > 0) {
		numAboveZero = nums2[i];
	}
}