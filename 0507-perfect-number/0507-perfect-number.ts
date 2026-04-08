function checkPerfectNumber(num: number): boolean {
    
    let sum = 0;
    let limit = num/ 2;
    for(let i = 1; i <= limit; i++) {
        if(num % i === 0) {
            sum += i;
            // sum += num / i;
        }
    }

    console.log(sum)
    return sum === num;
};