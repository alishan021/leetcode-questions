function construct2DArray(original: number[], m: number, n: number): number[][] {
    
    if(m * n !== original.length) return [];

    let result = [];
    let tempArr = [];
    while( original.length != 0) {
        tempArr = original.splice( 0, n);
        result.push(tempArr);
        tempArr = [];
    }

    return result;
};