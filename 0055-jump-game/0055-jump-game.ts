function canJump(nums: number[]): boolean {

    let pos = nums.length -1;   // pos == position ;
    let jumpsToComplete = nums.length - 1;  // Total jumps have to complete
    while(pos >= 0){
        let jumpsAvailable = nums[pos];     // Jumps available in this position

        if((pos + jumpsAvailable) >= jumpsToComplete) {
            jumpsToComplete = pos;
        }
        pos--;
    }

    return jumpsToComplete === 0;
};