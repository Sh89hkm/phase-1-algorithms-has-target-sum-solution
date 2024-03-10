// Solution 3 using ( Set ) better optimized performance
function hasTargetSum(array, target) {
  const seenNumbers = new Set(); // initialize an empty Set
  for (const number of array) {
    const complement = target - number;
    // .has returns true if the Set includes the complement
    if (seenNumbers.has(complement)) return true;
    // .add adds the number to the Set
    seenNumbers.add(number);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here

*/

/* 
  Add your pseudocode here
  create an object to keep track of all the numbers we've seen
  iterate over the array of numbers
  for the current number, identify a complementary number that adds to our target
  (for example: if our number is 2, and the target is 5, the complementary number is 3)
  check if any of the keys in our object is the complement to the current number
  if so, return true
  save the current number as the key on our object so we can check it later against other numbers
  if we reach the end of the array, return false
*/

/*
  Add written explanation of your solution here
// Solution 1 using Array
function hasTargetSum(array, target) {
  // iterate over the array of numbers
  for (let i = 0; i < array.length; i++) {
    // for the current number, identify a complementary number that adds to our target
    // (for example: if our number is 2, and the target is 5, the complementary number is 3)
    // n steps (depending on the length of the input array)
    const complement = target - array[i];
    // iterate over the remaining numbers in the array
    for (let j = i + 1; j < array.length; j++) {
      // check if any of the remaining numbers is the complement
      // if so, return true
      // n * n steps (nested loop!)
      if (array[j] === complement) return true;
    }
  }
  // if we reach the end of the array, return false
  // 1 step
  return false;
}

// Solution 2 using Object
function hasTargetSum(array, target) {
  // create an object to keep track of all the numbers we've seen
  // 1 step
  const seenNumbers = {};
  // iterate over the array of numbers
  for (const number of array) {
    // for the current number, identify a complementary number that adds to our target
    // (for example: if our number is 2, and the target is 5, the complementary number is 3)
    // n steps
    const complement = target - number;
    // check if any of the keys in our object is the complement to the current number
    // if so, return true
    // n steps
    if (seenNumbers[complement]) return true;
    // save the current number as the key on our object so we can check it later against other numbers
    // n steps
    seenNumbers[number] = true;
  }
  // if we reach the end of the array, return false
  // 1 step
  return false;
}
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  
  console.log("");

  console.log("");
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
