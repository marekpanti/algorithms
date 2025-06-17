function maxSubarraySum(array, sub){
    if (array.length < sub) {
        return null;
    }
 
    let total = 0;
    // potrebujeme prvy total, ktory neskor stale zvysime o najblizsiu hodnotu v poly a 
    //znizime o predchadzajuci najnizsiu
    for (let i=0; i < sub; i++){
       total += array[i];
    }
    console.log(total);
    let currentTotal = total;
    for (let i = sub; i < array.length; i++) {
       currentTotal += array[i] - array[i-sub];
       total = Math.max(total, currentTotal);
    }
    return total;
}

maxSubarraySum([100,200,300,400], 2);