function kLengthApart(nums: number[], k: number): boolean {

    let currI = 0, prevI = 0, count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
            if(count == 1) {
                currI = i;
                continue;
            }
            prevI = currI;
            currI = i;
            if(currI - prevI <= k) return false;
        }
        console.log( count, currI, prevI, currI - prevI)
    }
    return true;
};