/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[j] < nums[i]) {
                [ nums[i], nums[j]] = [ nums[j], nums[i]];
            }
        }
    }

    console.log(nums);
};