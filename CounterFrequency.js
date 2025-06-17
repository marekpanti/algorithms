function sameFrequency(arg1, arg2){
  // good luck. Add any arguments you deem necessary.
  const freq1 = arg1.toString();
  const freq2 = arg2.toString();
  if (freq1.length !== freq2.length) return false;
  
  const count1 = {};
  const count2 = {};
  console.log(freq1, freq1.length)
  for (let i = 0; i < freq1.length; i++) {
      console.log('tu');
        if (!count1[freq1[i]]) {
            count1[freq1[i]] = 0;
        } else {
            count1[freq1[i]]++;
        }
    }
    
    for (let i = 0; i < freq2.length; i++) {
        if (!count2[freq2[i]]) {
            count2[freq2[i]] = 0;
        } else {
            count2[arg2[i]]++;
        }
    }
    
   for(let key in count1) {
    console.log(count1, count2);
    if(count1[key] !== count2[key]) return false;
   }
  console.log(count1, count2);
  return true;
  }

 sameFrequency(34, 14)


 function areThereDuplicates() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}

areThereDuplicates(1,2);