function findFinalValue(nums: number[], original: number): number {
    let num = original;
    while(nums.includes(num)) {
        num = num * 2;
    }
    return num;
};