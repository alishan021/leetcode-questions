function findMaxAverage(nums: number[], k: number): number {
    
    let sum = nums.slice( 0, k).reduce(( acc, curr) => acc + curr);
    let maxSum = sum;
    for(let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i -k];
        maxSum = (maxSum > sum) ? maxSum : sum;
    }

    return maxSum / k;
};