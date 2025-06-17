function averagePair(arr, num){
  let start = 0;
  let end = arr.length-1;
  while(start < end) {
    const avg = (arr[start]+arr[end]) / 2;
    console.log('tu', arr[start], arr[end], avg)
    if(avg === num) {
        console.log('v pravde');
        return true;
    }
    else if(avg < num) {
        start++;
    }
    else {
        end--;
    }
  }
  return false;
}

averagePair([1,3,3,5,6,7,10,12,19], 8);
// najst prvy par, ktoreho priemerom je nami zadane cislo.

function findAverage(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    const avg = arr[start] + arr[end] / 2;
  }
}