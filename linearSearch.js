function linearSearch(array, value){
  // add whatever parameters you deem necessary - good luck!
  console.log(array.length === 0)
  for (let i = 0; i < array.length; i++) {
      console.log('tu', array[i])
      if (array[i] === value) return i;
  }
  return -1;
}

linearSearch([10, 15, 20, 25, 30], 15)
