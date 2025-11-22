function findKthPositive(arr: number[], k: number): number {
    
    let arrI = 0;
    let misArrI = 0;
    let res = 1;
    while(misArrI !== k) {
        if(!arr.includes(res)) {
            misArrI++;
        }else {
            arrI++;
        }
        res++;
    }

    console.log( arrI, misArrI);
    return arrI + misArrI;
};