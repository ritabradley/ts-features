const drink = {
	color: 'clear',
	alcoholic: true,
	sugar: 10,
	carbonated: true
}

// Type alias
type Drink = [string, boolean, number, boolean]

const whiteClaw: Drink = ['clear', true, 10, true]

// Tuple
const starry: [string, boolean, number, boolean] = ['clear', false, 60, true]

whiteClaw[0] = true
starry[1] = 20