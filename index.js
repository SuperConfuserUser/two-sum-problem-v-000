function bruteForceTwoSum(array, sum) {
<<<<<<< HEAD
  const twoSums = [];
  
  for (let i = 0; i < array.length - 1; i++) {
    for(let j = i + 1; j < array.length; j++) {
      const n = array[i];
      const n2 = array[j];
      if (n + n2 === sum) {
        twoSums.push([n, n2]);
=======
  const twoSum = [];
  
  // array.forEach((n, i) => {
  //   array.forEach((n2, j) => {
  //     if (n + n2 === sum && i !== j) {
  //       twoSum.push([n, n2]);
  //     }
  //   })
  // })
  
  while (array.length > 2) {
    const n = array[0];
    for(let i = 0; i++; i < array.length) {
      const n2 = array[i];
      if (n + n2 === sum) {
        twoSum.push([n, n2]);
        array.splice(0, 1);
        array.splice(i, 1);
>>>>>>> 1830d2beceb54f2d8495c378ef834735ee764a85
      }
    }
  }
  
<<<<<<< HEAD
  return twoSums;
}

function binarySearchTwoSum(array, sum) {
  const twoSums = [];
  const sorted = array.sort();
  
  for (let i = 0; i < sorted.length - 1; i++) {
    const n = sorted[i];
    const n2 = sum - n;
    if (binaryMatch(sorted.slice(i + 1), n2)) {
      twoSums.push([n, n2]);
    }
  }
  return twoSums;
}

function binaryMatch(array, missingNum) {
  while(array.length > 0) {
    const midPoint = Math.floor(array.length / 2);
    const n = array[midPoint];
    if (n === missingNum) {
      return true;
    }
    if (n > missingNum) {
      return binaryMatch(array.slice(0, midPoint - 1), missingNum);
    } else {
      return binaryMatch(array.slice(midPoint), missingNum);
    }
  }
  return undefined;
}

function hashTwoSum(array, sum) {
  const hash = {};
  const twoSums = [];
  
  array.forEach(n => {
    const n2 = sum - n;
    if (!hash[n]) {
      hash[n] = 1;
    } else {
      hash[n]++;
    }
  })
  
  array.forEach(n => {
    const n2 = sum - n;
    if(hash[n] && hash[n2]) {
      if (n !== n2 || hash[n] >= 2) {
        twoSums.push([n, n2]);
        hash[n]--;
        hash[n2]--;
      }
    }
  })
  
  return twoSums;
=======
  return twoSum;
}

function binarySearchTwoSum(array, sum) {
  
}

function binaryMatch(sortedArray, missingNum) {
  
}

function hashTwoSum(array, sum) {
  
>>>>>>> 1830d2beceb54f2d8495c378ef834735ee764a85
}