function arraySign(nums: number[]): number {
    
    // let product = nums[0];
    // for(let i = 1; i < nums.length; i++) {
    //     product = product * nums[i];
    // }

    // if(product > 0) {
    //     return 1;
    // }else if (product < 0) {
    //     return -1;
    // }else {
    //     return 0;
    // }

    let negatives = 0;
    for(let num of nums) {
        if(num === 0) return 0;
        else if(num < 0) negatives++; 
    }

    if( negatives % 2 === 0) return 1;
    else return -1;
};