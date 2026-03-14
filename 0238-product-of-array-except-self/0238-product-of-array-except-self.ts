function productExceptSelf(nums: number[]): number[] {
    
    let prefix = 1, postfix = 1;
    let answer = new Array(nums.length).fill(1);

    for(let i = 0; i < nums.length; i++) {
        answer[i] *= prefix;
        answer[nums.length - 1 - i] *= postfix;
        prefix *= nums[i];
        postfix *= nums[nums.length - 1 - i];

    }

    return answer;
};