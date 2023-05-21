function funChallange(input) {
  let a = 10 // O(1)
  a = 50 + 3 // O(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    anotherFunction() // O(n)
    let stranger = true // O(n)
    a++ // O(n)
  }
  return a // O(1)
}

funChallange([0,1,2,3,4,5]) // O(3 + 4n) = O(n)
