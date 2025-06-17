function bubbleSort(array) {
    let noBubble;
    for (let i = 0; i < array.length; i--) {
        let noBubble = true;
        for (let j; j < i - 1; j++) {
            if(array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j+1] = temp;
                noBubble = false;
            }
        }
        if (noBubble) break;
    }
    return array;
}

bubbleSort([2,5,1,5,10,21,3])