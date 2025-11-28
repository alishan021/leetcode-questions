function smallestIndex(nums: number[]): number {
    
    for(let i = 0; i < nums.length ; i++) {
       let num = sumOfDigits(nums[i]);
       if(num === i) return i;
    }

    return -1;
};

function sumOfDigits(num) {

    let total = 0;
    do {
        total += num % 10;
        num = Math.floor(num / 10);
    } while((num > 0))

    return total;
}