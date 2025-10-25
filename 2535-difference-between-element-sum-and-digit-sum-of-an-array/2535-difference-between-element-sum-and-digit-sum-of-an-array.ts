function differenceOfSum(nums: number[]): number {
    
    let eleSum = 0, digitSum = 0;
    for(let num of nums) {
        eleSum += num;
        let digits = num.toString().split('').map( num => parseInt(num));
        digitSum += digits.reduce(( acc, cur) => acc + cur);
    }
    return Math.abs(eleSum - digitSum);
};