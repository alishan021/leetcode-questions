function minOperations(nums: number[], k: number): number {
    
    let array = Array(nums.length).fill(0), index = k;
    for(let i = nums.length - 1; i >= 0; i--) {
        if(array[nums[i]] === 0 && nums[i] <= k) {
            array[nums[i]] = 1;
            index--;
            if(index === 0) return nums.length - i;
        }
    }

    return k;
};