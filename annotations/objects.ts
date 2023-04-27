const profile = {
	name: 'Rita',
	age: 36,
	coords: {
		lat: 23.4562,
		long: 34.1234
	},
	setAge(age: number): void {
		this.age = age;
	}
}

// Get age, where age is a number from profile
const {age, name}: { age: number; name: string } = profile;
const {coords: {lat, long}}: { coords: { lat: number; long: number } } = profile;