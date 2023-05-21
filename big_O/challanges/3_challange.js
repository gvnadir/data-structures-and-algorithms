function doSomeStuff(items) {
  console.log(items[0])

  var middleIndex = Math.floor(items.length/2)
  var index = 0

  while (index < middleIndex) { // O(n/2)
    console.log(items[index])
    index ++
  }

  for (let i = 0; i < 100; i++) { // O(100)
    console.log('hi')
  }
}

doSomeStuff(items) // O(n)

