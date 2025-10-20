function majorityElement(nums: number[]): number {
    
    let map = new Map();
    let result = 0, maxcount = 0;
    for(let num of nums) {
        let count = (map.get(num) || 0) + 1;
        console.log(count);
        map.set( num, count);
        if(count > maxcount) {
            maxcount = count;
            result = num;
        }
    }
    
    return result;
};