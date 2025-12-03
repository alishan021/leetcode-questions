/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {

    let len = nums.length;
    for(let i = 0; i < len - 1; i++) {
        if(nums[i] === 0) {
            let j = i;
            while(j !== len - 1) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
                j++;
            }
            len--;
            i--;
        }
    }
};