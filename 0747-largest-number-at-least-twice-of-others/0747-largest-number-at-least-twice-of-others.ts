function dominantIndex(nums: number[]): number {
    let big1 = -Infinity, big2 = -Infinity, index = -1;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > big1) {
            big2 = big1;
            big1 = nums[i];
            index = i;
        }else if(nums[i] > big2) {
            big2 = nums[i];
        }
    }

    if((big2 * 2) > big1) return -1;
    else return index;
};