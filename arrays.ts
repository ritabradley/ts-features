const phoneMakers: string[] = ['Apple', 'Samsung', 'Motorola']

const phonesByMake: string[][] = []

const phone = phoneMakers[0]

const upperPhones = phoneMakers.map((phone: string): string => {
	return phone.toUpperCase()
})

console.log(upperPhones)