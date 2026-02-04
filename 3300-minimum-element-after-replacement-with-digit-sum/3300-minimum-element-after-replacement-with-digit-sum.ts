function minElement(nums: number[]): number {
    
    let sumOfNums: number[] = [];
    for(let i = 0; i < nums.length; i++) {
        let strNums = nums[i].toString().split('');
        let total = 0;
        for(let j = 0; j < strNums.length; j++) {
            total += parseInt(strNums[j]);
        };
        sumOfNums.push(total);
    };

    return Math.min(...sumOfNums);
};