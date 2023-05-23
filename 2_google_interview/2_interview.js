/*
Solution B
Let's figure out a better solution now:

array1 => obj {
	a: true,
	b: true,
	c: true,
	x: true
}

array2[index] === obj.properties
*/

//	1. loop through first array and create object where properties === items in the array
//	2. loop through second array and check if item in second array exists on created object

const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'x']

function containsCommonItem2(arr1, arr2) {
	let map = {}
	for (let i = 0; i < arr1.length; i ++) {
		const item = arr1[i]
		if (!map[item]) {
			map[item] = true
		}
	}

	for (let i = 0; i < arr2.length; i++) {
		let item = arr2[i]
		if (map[item]) {
			return true
		}
	}
	return false
}

console.log(containsCommonItem2(array1, array2)) 

// O(n + m) - Linear Time Complexity
// O(n) - Linear Space Complexity (we are iterating for populating the map object)