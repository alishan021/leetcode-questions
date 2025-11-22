function minimumOperations(nums: number[]): number {
    
    // let count = 0;
    // for(let num of nums) {
    //     if(num % 3 !== 0) count++;
    // }

    // return count;
    return (nums.filter( num => num % 3 != 0)).length;
};