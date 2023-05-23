function fun1(n) {
  for (let i = 0; i < n; i++) {
    console.log('hello')
  }
}

fun1(6) // O(1)
// We're not adding space and we don't care about the input

function fun2(n) {
  let myArray = []
  for (let i = 0; i < n; i++) {
    myArray[i] = 'hi'
  }
  return myArray
}

fun2(6) // O(n)
// We created a data structure (myArray) and we are filling it with n elements
