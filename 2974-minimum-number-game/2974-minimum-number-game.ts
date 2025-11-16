function numberGame(nums: number[]): number[] {

    let alice, bob;
    let newArr = [];
    let numsSort = nums.sort(( a, b) => a - b);
    for(let i = 0; i < nums.length; i += 2) {
        alice = numsSort[i];
        bob = numsSort[i + 1];
        newArr.push(bob);
        newArr.push(alice);
    }

    return newArr;
    
};