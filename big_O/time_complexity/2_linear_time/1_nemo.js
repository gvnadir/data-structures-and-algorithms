const nemo = ['nemo']
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']
const large = new Array(10000).fill('nemo')

function findNemo(array) {
  let t0 = performance.now()
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found nemo!')
    }
  }
  let t1 = performance.now()
  
  // ~3.5ms single element or 10 elements
  // ~5.8ms 100 elements
  // ~16ms 1000 elements
  // ~100ms 10000 elements
  console.log('Call findNemo took ' + (t1-t0) + ' millisecons')
}

findNemo(large) // O(n) => Linear Time
