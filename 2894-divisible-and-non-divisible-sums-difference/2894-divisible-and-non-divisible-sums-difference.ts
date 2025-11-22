function differenceOfSums(n: number, m: number): number {
    
    // let num1 = 0, num2 = 0;
    // for(let i = 1; i <= n; i++) {
    //     if(i % m === 0) {
    //         num2 += i;
    //     }else {
    //         num1 += i;
    //     }
    // }

    // return num1 - num2;
    let total = (n * (n + 1)) / 2;
    let divisible = Math.floor(n / m);
    let num2 = m * ( divisible * ( divisible + 1 ) / 2);

    return (total - num2) - num2;
};