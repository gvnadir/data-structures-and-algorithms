// Naive
// O(n^2) - Square Time Complexity
// O(1) - Constant Space Complexity

function hasPairWithSum(arr, sum) {
	let len = arr.length
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j ++) {
			if (arr[i] + arr[j] === sum) {
				return true
			}
		}
	}
	return false
}

// console.log(hasPairWithSum([1,2,3,5], 8))

// arr = [1,2,3,9]
// arr = [1,2,4,6]
// sum = 8

// Better
// O(n) - Linear Time Complexity
// O(n) - Linear Space Complexity
function hasPairWithSum2(arr, sum) {
	const mySet = new Set()
	for (let i = 0; i < arr.length; i ++) {
		if (mySet.has(arr[i])) {
			return true
		}
		mySet.add(sum - arr[i])
	}
	return false
}

console.log(hasPairWithSum2([1,2,3,6], 8))