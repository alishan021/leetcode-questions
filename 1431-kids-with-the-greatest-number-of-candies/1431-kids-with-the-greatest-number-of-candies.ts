function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    
    let max = Math.max(...candies);
    let result = []
    for(let i = 0; i < candies.length; i++) {
        if(candies[i] + extraCandies < max) {
            result.push(false);
        }else {
            result.push(true);
        }
    }
    return result;
    
};