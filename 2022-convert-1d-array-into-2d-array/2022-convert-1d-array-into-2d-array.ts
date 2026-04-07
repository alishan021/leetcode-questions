function construct2DArray(original: number[], m: number, n: number): number[][] {
    
    if(m * n !== original.length) return [];

    let result = [];
    let tempArr = [];
    let i = 0;
    while( i < original.length) {
        tempArr = original.slice( i, i + n);
        i = i + n;
        result.push(tempArr);
        tempArr = [];
    }

    return result;
};