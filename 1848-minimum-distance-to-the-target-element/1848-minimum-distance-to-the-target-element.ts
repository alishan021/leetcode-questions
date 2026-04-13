function getMinDistance(nums: number[], target: number, start: number): number {
    
    let arr = [];
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target) {
            arr.push(Math.abs(i - start));
        }
    }
    return Math.min(...arr);
};