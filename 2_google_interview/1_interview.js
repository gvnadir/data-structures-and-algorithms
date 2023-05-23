/*
Given two arrays, create a function that let's the user know (true/false) whether these two arrays contain any common items
For example:
const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'i']
should return false
-------------------------------------
const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'x']
should return true

2 parameters - arrays - no size limit
return true or false
*/

// Solution A
// naive/brute force approach 

const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'x']

function containsCommonItem(arr1, arr2) {
	for (let i = 0; i < arr1.length; i ++) {
		for (let j = 0; j < arr2.length; j ++) {
			if (arr1[i] === arr2[j]) {
				return true
			}
		}
	}
	return false
}

console.log(containsCommonItem(array1, array2))
// O(n * m) - Square Time Complexity (because the arrays have different sizes otherwise would have been O(n^2))
// O(1) - Constant Space Complexity