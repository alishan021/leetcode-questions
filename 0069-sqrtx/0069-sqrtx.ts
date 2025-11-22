function mySqrt(x: number): number {
    
    // return Math.floor(Math.sqrt(x));
    if(x < 2) return x;

    let left = 1;
    let right = Math.floor(x / 2);
    let mid = Math.floor(( left + right ) / 2);
    while(left <= right) {

        let sq = mid * mid;
        if(sq == x) return mid;
        else if(sq > x) {
            right = mid - 1;
        }else {
            left = mid + 1;
        }

        mid = Math.floor(( left + right ) / 2);
    }
    return mid;
};