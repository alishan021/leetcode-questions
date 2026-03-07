function rob(nums: number[]): number {
    
    let rob1 = 0;
    let rob2 = 0;
    for(let i = 0; i < nums.length; i++) {
        let rob = Math.max( nums[i] + rob1, rob2);
        rob1 = rob2;
        rob2 = rob;
    }
    return rob2;
};