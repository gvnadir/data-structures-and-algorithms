function logAllNumberAndPairsSumns(numbers) {

  console.log('these are the numbers:') 
  numbers.foreach(function(number) {
    console.log(number)
  })

  console.log('and these are their sums:')
  numbers.foreach(function(firstNumber) {
    numbers.foreach(function(secondNumber) {
      console.log(firstNumber + secondNumber)
    })
  })
}

logAllNumberAndPairsSumns([1,2,3,4,5]) // O(n + n^2) => O(n^2)
