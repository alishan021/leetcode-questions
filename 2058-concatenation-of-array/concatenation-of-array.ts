function getConcatenation(nums: number[]): number[] {
    
    let ans = [], len = nums.length;
    for(let i = 0; i < len; i++) {
        ans[i] = nums[i];
        ans[i + len] = nums[i];
    }
    
    return ans;
};