function binarySearch(array, elem) {
    let start = 0;
    let middle = Math.floor((array.length - 1) / 2);
    let end = array.length - 1;
    console.log('tu')
    while(array[middle] !== elem && start <= end) {
        if (array[middle] > elem) {
            end = middle - 1;
        } else {
            console.log('tu')
            end = middle + 1;
        }
       middle = middle + Math.floor((start + end) / 2);
    }
    return middle;
}


binarySearch([1,2,3,4,5,6,7,8], 9)