function isPowerOfThree(n: number): boolean {

    // while(n > 3) n = n/3;
    // return n === 3 || n === 1 ? true : false;
    
    let power = Math.log10(n)/Math.log10(3);

    return (power - Math.floor(power) === 0) ? true : false;
};