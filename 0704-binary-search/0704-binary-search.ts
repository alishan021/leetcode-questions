function search(nums: number[], target: number): number {
    
    nums.sort(( a, b) => a - b);
    // let left = 0;
    // let right = nums.length - 1;
    // while(left <= right) {
    //     let index = Math.floor((left + right) / 2);
    //     if(target === nums[index]) {
    //         return index;
    //     }else if(target > nums[index]) {
    //         left = index + 1;
    //     }else {
    //         right = index - 1;
    //     }
    // }
    // return -1;
    for(let left = 0, right = nums.length - 1; left <= right; ) {
        let index = Math.floor((left + right) / 2);
        if(target === nums[index]) {
            return index;
        }else if(target > nums[index]) {
            left = index + 1;
        }else {
            right = index - 1;
        }
    }
    return -1;
};