function smallestIndex(nums: number[]): number {
    
    for(let i = 0; i < nums.length ; i++) {
       let num = sumOfDigits(nums[i]);
       console.log(num ,i)
       if(num === i) return i;
    }

    return -1;
};

function sumOfDigits(num) {

    let total = 0;
    while(num > 9) {
        total += num % 10;
        num = Math.floor(num / 10);
    }
    total += num;
    return total;

}