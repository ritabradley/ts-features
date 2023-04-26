const add = (a: number, b: number): number => {
	return a + b;
}

function divide(a: number, b: number): number {
	return a / b;
}

const multiply = function (a: number, b: number): number {
	return a * b;
}

const logger = (message: string): void => {
	console.log(message)
}

const throwError = (message: string): never => {
	throw new Error(message);
}

const forecast = {
	date: new Date(),
	weather: 'sunny'
}

// Destructuring with annotations
// The destructuring and the annotations are separate

const logWeather = ({date, weather}: { date: Date, weather: string }): void => {
	console.log(`The weather for ${date} is ${weather}`)
}

logWeather(forecast);