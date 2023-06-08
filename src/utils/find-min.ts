const findMin = (array: number[]) => {
    const len = array.length;
    let min = array[0];
    
    for (let i = 0; i < len; i++) {
        if(array[i] < min) {
            min = array[i]
        }
    }

    return min;
}

export { findMin }