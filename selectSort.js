function selectionSort(arr) {
    // If current iteration isn't lowest we'll swap their order
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

// we iterate through all array
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    // we iterate through rest of the array and are checking lowest value
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    // the swapping
    if (i !== lowest) swap(arr, i, lowest);
  }
  console.log('tu');

  return arr;
}


selectionSort([0,2,34,22,10,19,17]);