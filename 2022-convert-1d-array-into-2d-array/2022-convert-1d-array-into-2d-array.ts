function construct2DArray(original: number[], m: number, n: number): number[][] {
    
    if(m * n !== original.length) return [];

    let result = [];
    let tempArr = [];
    for(let i = 0; i < original.length; i++) {
        if((i + 1) % n !== 0) {
            tempArr.push(original[i])
        }else {
            tempArr.push(original[i]);
            result.push(tempArr);
            tempArr = [];
        }
    }

    return result;
};